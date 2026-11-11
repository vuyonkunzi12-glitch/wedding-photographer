'use client'
import Image from 'next/image'
import { useEffect, useCallback } from 'react'

type LightboxImage = { src: string; alt: string; width: number; height: number }

export default function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  const img = images[index]
  if (!img) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 text-white text-3xl hover:opacity-70"
      >×</button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous"
        className="absolute left-4 text-white text-4xl hover:opacity-70"
      >‹</button>

      <div className="relative max-h-full max-w-full" onClick={(e) => e.stopPropagation()}>
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className="max-h-[90vh] w-auto h-auto object-contain"
          priority
        />
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next"
        className="absolute right-4 text-white text-4xl hover:opacity-70"
      >›</button>
    </div>
  )
}