"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageCarouselProps {
  images: string[]
  alt: string
  onImageClick?: (images: string[], currentIndex: number) => void
}

export function ImageCarousel({ images, alt, onImageClick }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi, onSelect])

  const scrollPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    emblaApi?.scrollPrev()
  }

  const scrollNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    emblaApi?.scrollNext()
  }

  const scrollTo = (e: React.MouseEvent, index: number) => {
    e.stopPropagation()
    emblaApi?.scrollTo(index)
  }

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <span className="text-muted-foreground">No images available</span>
      </div>
    )
  }

  if (images.length === 1) {
    return (
      <div
        className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
        onClick={() => onImageClick?.(images, 0)}
      >
        <img
          src={images[0] || "/placeholder.svg"}
          alt={alt}
          className="w-full h-full object-cover object-top transition-all duration-500 group-hover:brightness-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="pointer-events-none absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/50 rounded-full p-1.5">
            <Maximize2 className="h-3.5 w-3.5 text-white" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden group">
      {/* Embla viewport */}
      <div
        ref={emblaRef}
        className="h-full overflow-hidden cursor-pointer"
        onClick={() => onImageClick?.(images, currentIndex)}
      >
        <div className="flex h-full">
          {images.map((image, index) => (
            <div key={index} className="relative flex-[0_0_100%] h-full">
              <img
                src={image || "/placeholder.svg"}
                alt={`${alt} - Image ${index + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Expand hint */}
      <div className="pointer-events-none absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black/50 rounded-full p-1.5">
          <Maximize2 className="h-3.5 w-3.5 text-white" />
        </div>
      </div>

      {/* Prev / Next */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white transition-all duration-200 hover:scale-110"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white transition-all duration-200 hover:scale-110"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dot indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={(e) => scrollTo(e, index)}
          />
        ))}
      </div>
    </div>
  )
}
