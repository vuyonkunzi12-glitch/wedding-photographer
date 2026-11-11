import Image from 'next/image'
import Link from 'next/link'
import CtaBand from '@/components/CtaBand'
import { site } from '@/lib/site'

export const metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 py-16 grid gap-10 md:grid-cols-[1fr_1.5fr] items-start">
        <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
          <Image src="/portrait.jpg" alt={`Portrait of ${site.photographer}`} fill sizes="(min-width:768px) 30vw, 60vw" className="object-cover" />
        </div>
        <div>
          <h1 className="font-display text-4xl text-jacaranda-800">Hi, I’m {site.photographer}.</h1>
          <div className="mt-6 font-sans text-ink/80 leading-relaxed space-y-4">
            <p>
              My love for photography started [years ago / in college / when I picked up my first camera] with a simple 
              obsession: trying to freeze the feeling of a moment before it passed. What began as taking photos of friends 
              and everyday life quickly turned into a deep appreciation for real human connection, natural light, and the 
              quiet details people often miss in the rush of a big day.
            </p>
            <p>
              That is exactly why I fell in love with weddings. A wedding is one of the few times in life when everyone you 
              love is in the exact same room, celebrating something joyful. I love the big, loud moments on the dance floor 
              just as much as the quiet, nervous breaths right before the ceremony—and getting to preserve those memories for 
              couples to look back on for decades is a privilege I never take for granted.
            </p>
            <p>
              Spending a wedding day with me feels like hanging out with a calm, organized friend who happens to have a camera. 
              I don't believe in stiff, awkward posing or pulling you away from your party for hours on end. Instead, I keep 
              things relaxed, give gentle direction when you need it, and blend into the background when you don't, so you can 
              stay completely present with your partner and your guests.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-jacaranda-50 py-16 px-6">
        <div className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-3 font-sans">
          <div>
            <h2 className="font-display text-xl text-jacaranda-800">Approach</h2>
            <p className="mt-2 text-ink/80">Documentary, unobtrusive, a few gentle prompts when the light is right.</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-jacaranda-800">Delivery</h2>
            <p className="mt-2 text-ink/80">Sneak peek within a week, full gallery in 4–6 weeks, high-res downloads.</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-jacaranda-800">Packages</h2>
            <p className="mt-2 text-ink/80">Full-day coverage from R___; half-day and elopement options available.</p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Want to check a date?"
        subtext="Send me your venue and date—I’ll confirm availability."
        buttonLabel="Enquire"
      />
    </main>
  )
}