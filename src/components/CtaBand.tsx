import Link from 'next/link'

type CtaBandProps = {
  heading?: string
  subtext?: string
  buttonLabel?: string
  href?: string
}

export default function CtaBand({
  heading = 'Planning your day?',
  subtext = 'I take on a limited number of weddings each season.',
  buttonLabel = 'Check my availability',
  href = '/contact',
}: CtaBandProps) {
  return (
    <section className="bg-jacaranda-700 text-white py-16 px-6 text-center">
      <h2 className="font-display text-3xl">{heading}</h2>
      <p className="mt-3 text-jacaranda-100">{subtext}</p>
      <Link
        href={href}
        className="mt-6 inline-flex rounded-full bg-white text-jacaranda-800 px-7 py-3 font-sans font-medium hover:bg-jacaranda-50 transition"
      >
        {buttonLabel}
      </Link>
    </section>
  )
}