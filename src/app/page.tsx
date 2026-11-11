// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedShoots } from '@/lib/shoots'
import { site } from '@/lib/site'
// import Testimonial from '@/components/Testimonial'

export default async function Home() {
  const featured = getFeaturedShoots(3)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85svh] min-h-[560px]">
        <Image
          src="/hero.jpg"
          alt="Couple under jacaranda trees, Pretoria"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center text-white px-6">
          <p className="font-sans uppercase tracking-[0.2em] text-sm text-jacaranda-100">
            Pretoria · South Africa
          </p>
          <h1 className="font-display text-4xl sm:text-6xl mt-4 max-w-3xl">
            Wedding photography in Pretoria
          </h1>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-jade-500 px-7 py-3 font-sans font-medium hover:bg-jade-600 transition"
          >
            Book a consultation
          </Link>
        </div>
      </section>

      {/* Featured shoots */}
      <section className="bg-jacaranda-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl text-jacaranda-800">Recent work</h2>
            <Link href="/work" className="font-sans text-jacaranda-600 hover:underline">
              See all shoots →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {featured.map(s => (
              <Link key={s.cover} href={`/work/${slugFor(s)}`} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src={s.cover}
                    alt={s.coverAlt}
                    fill
                    sizes="(min-width:640px) 33vw, 100vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <p className="mt-3 font-display text-lg text-ink">{s.title}</p>
                <p className="font-sans text-sm text-ink/60">
                  {s.venue} · {s.dateObj.getFullYear()}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl grid gap-10 sm:grid-cols-[1fr_2fr] items-center">
          <div className="relative aspect-square rounded-full overflow-hidden">
            <Image src="/portrait.jpg" alt="Portrait of [name]" fill sizes="(min-width:640px) 30vw, 60vw" className="object-cover" />
          </div>
          <div>
            <h2 className="font-display text-3xl text-jacaranda-800">
              Hi, I'm {site.photographer}
            </h2>
            <p className="mt-4 font-sans text-ink/80 leading-relaxed">
              Based in Pretoria, I blend guided portraits with documentary storytelling to capture the real 
              energy of your celebration. Couples work with me for effortless direction and timeless imagery that 
              never feels stiff or overly posed.
            </p>
            <Link href="/about" className="mt-6 inline-block font-sans text-jacaranda-600 hover:underline">
              More about me →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-jacaranda-700 text-white py-16 px-6 text-center">
        <h2 className="font-display text-3xl">Planning your day?</h2>
        <p className="mt-3 text-jacaranda-100">I take on a limited number of weddings each season.</p>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-white text-jacaranda-800 px-7 py-3 font-sans font-medium hover:bg-jacaranda-50">
          Check my availability
        </Link>
      </section>
    </>
  )
}

function slugFor(s: { title: string }) {
  return s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
