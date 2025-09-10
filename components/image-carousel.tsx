"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const changeImage = (newIndex: number) => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentIndex(newIndex)
    
    setTimeout(() => setIsTransitioning(false), 300)
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
      <div className="aspect-video rounded-lg overflow-hidden group">
        <img 
          src={images[0] || "/placeholder.svg"} 
          alt={alt} 
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:brightness-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    )
  }

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length
    changeImage(newIndex)
  }

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    changeImage(newIndex)
  }

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden group">
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image || "/placeholder.svg"}
            alt={`${alt} - Image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
              index === currentIndex 
                ? 'opacity-100 translate-x-0 scale-100' 
                : index < currentIndex 
                  ? 'opacity-0 -translate-x-full scale-95' 
                  : 'opacity-0 translate-x-full scale-95'
            } ${isTransitioning ? 'transition-all duration-500' : ''}`}
          />
        ))}
        {/* Animated overlay for smooth transitions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {currentIndex > 0 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white transition-all duration-300 hover:scale-110 hover:-translate-x-1"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4 transition-transform duration-200 hover:-translate-x-0.5" />
        </Button>
      )}

      {currentIndex < images.length - 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white transition-all duration-300 hover:scale-110 hover:translate-x-1"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4 transition-transform duration-200 hover:translate-x-0.5" />
        </Button>
      )}

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 transition-opacity duration-300">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => changeImage(index)}
          />
        ))}
      </div>
    </div>
  )
}
