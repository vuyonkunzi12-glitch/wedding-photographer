// src/app/sitemap.ts
import type { MetadataRoute } from 'next'
import { getAllShoots } from '@/lib/shoots'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://your-domain.co.za'
  const shoots = getAllShoots().map((s) => ({
    url: `${base}/work/${s.slug}`,
    lastModified: new Date(s.date),
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }))

  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/work`, changeFrequency: 'monthly', priority: 0.9 },
    ...shoots,
    { url: `${base}/about`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/contact`, changeFrequency: 'yearly', priority: 0.7 },
  ]
}