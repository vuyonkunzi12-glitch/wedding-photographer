// lib/shoots.ts
import { z } from 'zod'
import { shoots as raw } from './generated-shoots'

const Shoot = z.object({
  slug: z.string(),
  title: z.string(),
  venue: z.string(),
  location: z.string().default('Pretoria'),
  date: z.string(),                    // ISO string from the generator
  category: z.enum(['wedding', 'engagement', 'elopement']),
  cover: z.string(),
  coverAlt: z.string(),
  coverWidth: z.number(),
  coverHeight: z.number(),
  gallery: z.array(z.object({
    src: z.string(),
    alt: z.string(),
    width: z.number(),
    height: z.number(),
    wide: z.boolean().default(false),
  })).default([]),
  excerpt: z.string().max(180),
  featured: z.boolean().default(false),
})

export type Shoot = z.infer<typeof Shoot> & { dateObj: Date }

function parseAll(): Shoot[] {
  return raw
    .map((s) => {
      const parsed = Shoot.parse(s)
      return { ...parsed, dateObj: new Date(parsed.date) }
    })
    .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime())
}

export function getAllShoots(): Shoot[] {
  return parseAll()
}

export function getShoot(slug: string): Shoot | undefined {
  return getAllShoots().find((s) => s.slug === slug)
}

export function getFeaturedShoots(limit = 3): Shoot[] {
  const all = getAllShoots()
  const featured = all.filter((s) => s.featured)
  return (featured.length >= limit ? featured : all).slice(0, limit)
}