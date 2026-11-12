// app/layout.tsx
import type { Metadata } from 'next'
import localFont from "next/font/local";
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { site } from '@/lib/site'

// Fraunces variable font (supports SOFT, WONK, opsz, wght axes)
const fraunces = localFont({
  src: "./fonts/Fraunces[SOFT,WONK,opsz,wght].woff2",
  variable: "--font-fraunces", // Expose as CSS variable
  display: "swap",
  weight: "100 900", // Variable font weight range
});

// Inter variable font
const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),      // replace with real domain
  title: {
    default: `${site.photographer} — Wedding photographer in Pretoria`,
    template: `%s · ${site.photographer}`,
  },
  description:
    'Wedding, engagement and elopement photography in Pretoria and across South Africa.',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    siteName: site.photographer,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans bg-paper text-ink antialiased min-h-svh flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://your-domain.co.za',
              name: site.photographer,
              image: 'https://your-domain.co.za/hero.jpg',
              url: 'https://your-domain.co.za',
              email: site.email,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Pretoria',
                addressCountry: 'ZA',
              },
              areaServed: 'Pretoria, South Africa',
              priceRange: 'R___',
            }),
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
