// components/SiteHeader.tsx
import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-jacaranda-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg text-jacaranda-800">
          Keo Studio
        </Link>
        <ul className="hidden gap-6 sm:flex font-sans text-sm">
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}