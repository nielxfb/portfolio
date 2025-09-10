"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageModal } from "@/components/image-modal"
import Link from "next/link"
import Image from "next/image"

interface AwardCardProps {
  title: string
  organization: string
  year: string
  category: string
  description: string
  image: string
  certificateUrl?: string
  featured?: boolean
}

export function AwardCard({
  title,
  organization,
  year,
  category,
  description,
  image,
  certificateUrl,
  featured = false,
}: AwardCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card
        className={`bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 animate-fade-in ${featured ? "ring-1 ring-accent/20" : ""}`}
      >
        <CardHeader className="text-center">
          <div className="relative mx-auto mb-4">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={200}
              height={140}
              className="mx-auto rounded-lg bg-accent/10 p-2 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105 object-cover"
              onClick={() => setIsModalOpen(true)}
            />
            {featured && (
              <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground animate-scale-in">
                Featured
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg text-card-foreground text-balance animate-fade-in animate-stagger-1">
            {title}
          </CardTitle>
          <div className="space-y-2 animate-fade-in animate-stagger-2">
            <p className="text-accent font-medium">{organization}</p>
            <div className="flex justify-center gap-2">
              <Badge variant="outline" className="transition-all duration-200 hover:scale-105">
                {category}
              </Badge>
              <Badge variant="secondary" className="transition-all duration-200 hover:scale-105">
                {year}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 text-center animate-fade-in animate-stagger-3">
          <p className="text-card-foreground leading-relaxed text-sm">{description}</p>

          {certificateUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="w-full bg-transparent transition-all duration-200 hover:scale-105 hover:bg-accent/10"
            >
              <Link href={certificateUrl} target="_blank" rel="noopener noreferrer">
                View Certificate
              </Link>
            </Button>
          )}
        </CardContent>
      </Card>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src={image || "/placeholder.svg"}
        alt={title}
      />
    </>
  )
}
