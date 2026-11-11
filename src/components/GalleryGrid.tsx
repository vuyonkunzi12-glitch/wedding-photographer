'use client'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from './Lightbox'

type GalleryImage = { src: string; alt: string; width: number; height: number; wide?: boolean }

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  if (!images?.length) return null

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 max-w-5xl mx-auto px-6">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setOpenIndex(i)}
            className={img.wide ? 'sm:col-span-2' : ''}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full h-auto rounded-lg hover:opacity-90 transition"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onPrev={() => setOpenIndex((i) => (i! - 1 + images.length) % images.length)}
          onNext={() => setOpenIndex((i) => (i! + 1) % images.length)}
        />
      )}
    </>
  )
}