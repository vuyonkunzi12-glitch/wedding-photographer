// app/work/[slug]/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllShoots, getShoot } from '@/lib/shoots'
import GalleryGrid from '@/components/GalleryGrid'
import CtaBand from '@/components/CtaBand'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const shoot = getShoot(slug)
  if (!shoot) return { title: 'Not found' }
  return {
    title: shoot.title,
    description: shoot.excerpt,
    openGraph: {
      title: shoot.title,
      description: shoot.excerpt,
      images: [{ url: shoot.cover, width: shoot.coverWidth, height: shoot.coverHeight }],
    },
  }
}

export function generateStaticParams() {
  return getAllShoots().map((s) => ({ slug: s.slug }))
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const shoot = getShoot(slug)
  if (!shoot) notFound()

  // Dynamic import — the bundler sees the template literal and includes
  // every matching .mdx file at build time.
  const { default: Body } = await import(`@/content/shoots/${slug}.mdx`)

  const all = getAllShoots()
  const idx = all.findIndex((s) => s.slug === slug)
  const prev = all[idx - 1]
  const next = all[idx + 1]

  return (
    <article>
      <section className="relative h-[70svh] min-h-[480px]">
        <Image src={shoot.cover} alt={shoot.coverAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white max-w-5xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl">{shoot.title}</h1>
          <p className="mt-2 font-sans text-jacaranda-100">
            {shoot.venue} · {shoot.dateObj.toLocaleDateString('en-ZA', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      <div className="prose mx-auto max-w-3xl px-6 py-12">
        <Body />
      </div>

      <GalleryGrid images={shoot.gallery} />

      <CtaBand />

      <nav className="mx-auto max-w-5xl px-6 py-12 flex justify-between font-sans">
        {prev ? <Link href={`/work/${prev.slug}`} className="text-jacaranda-600 hover:underline">← {prev.title}</Link> : <span />}
        {next ? <Link href={`/work/${next.slug}`} className="text-jacaranda-600 hover:underline">{next.title} →</Link> : <span />}
      </nav>
    </article>
  )
}