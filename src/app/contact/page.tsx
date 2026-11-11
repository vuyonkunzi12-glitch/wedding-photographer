import ContactForm from '@/components/ContactForm'
import { site } from '@/lib/site'

export const metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-4xl text-jacaranda-800">Let’s talk about your day</h1>
      <p className="mt-3 font-sans text-ink/70 max-w-2xl">
        Tell me the date, the venue, and anything else you already know.
        I reply within two working days.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr]">
        <ContactForm />

        <aside className="space-y-4 font-sans text-ink/80">
          <div>
            <p className="text-sm text-ink/50 uppercase tracking-wide">Email</p>
            <a href={`mailto:${site.email}`} className="text-jacaranda-600 hover:underline">
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-sm text-ink/50 uppercase tracking-wide">Instagram</p>
            <a href={site.instagram} className="text-jacaranda-600 hover:underline">
              @studio
            </a>
          </div>
          <div>
            <p className="text-sm text-ink/50 uppercase tracking-wide">Based in</p>
            <p>{site.location}</p>
          </div>
        </aside>
      </div>
    </main>
  )
}