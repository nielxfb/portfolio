"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  initialIndex: number
  alt: string
}

export function ImageModal({ isOpen, onClose, images, initialIndex, alt }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    if (isOpen) setCurrentIndex(initialIndex)
  }, [initialIndex, isOpen])

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = "hidden"

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", onKey)
    }
  }, [isOpen, onClose, prev, next])

  if (!isOpen) return null

  const multi = images.length > 1

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex items-center justify-center w-full h-full p-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white rounded-full z-10"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Counter */}
        {multi && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded-full z-10 select-none">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Prev */}
        {multi && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full z-10 h-10 w-10"
            onClick={prev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}

        {/* Image */}
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className="max-w-full object-contain rounded-lg shadow-2xl animate-scale-in"
          style={{ maxHeight: "calc(100vh - 8rem)" }}
        />

        {/* Next */}
        {multi && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full z-10 h-10 w-10"
            onClick={next}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}

        {/* Dots */}
        {multi && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
