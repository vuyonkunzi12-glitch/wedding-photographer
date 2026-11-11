// app/work/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { getAllShoots } from '@/lib/shoots'

export const metadata = { title: 'Work' }

export default async function WorkIndex() {
  const shoots = getAllShoots()

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-4xl text-jacaranda-800 mb-12">Recent work</h1>

      <ul className="space-y-16">
        {shoots.map(s => (
          <li key={s.slug}>
            <Link href={`/work/${s.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                <Image
                  src={s.cover}
                  alt={s.coverAlt}
                  fill
                  sizes="(min-width:1024px) 960px, 100vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 className="font-display text-2xl text-ink group-hover:text-jacaranda-600 transition-colors">
                  {s.title}
                </h2>
                <p className="font-sans text-sm text-ink/60">
                  {s.venue} · {s.dateObj.toLocaleDateString('en-ZA', { month: 'long', year: 'numeric' })}
                </p>
              </div>
              <p className="mt-2 font-sans text-ink/75 max-w-2xl">{s.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}