import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/image-carousel"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  year: string
  image: string | string[]
  githubUrl?: string
  liveUrl?: string | null
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  technologies,
  year,
  image,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) {
  const images = Array.isArray(image) ? image : [image]

  return (
    <Card
      className={`bg-card border-border hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2 animate-fade-in group ${featured ? "ring-1 ring-accent/20" : ""}`}
    >
      <div className="overflow-hidden rounded-t-lg relative">
        <div className="transform transition-all duration-500">
          <ImageCarousel images={images} alt={title} />
        </div>
        {featured && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground z-10 animate-pulse shadow-lg">
            Featured
          </Badge>
        )}
      </div>

      <div className="p-6 pb-0">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>
      </div>

      <CardContent className="space-y-4 pt-0">
        <p className="text-card-foreground leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={tech}
              variant="secondary"
              className={`text-xs transition-all duration-200 hover:scale-105 animate-fade-in animate-stagger-${Math.min(index + 1, 4)}`}
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 pt-2">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="transition-all duration-200 hover:scale-105 hover:bg-accent/10 bg-transparent"
            >
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </Button>
          )}
          {liveUrl && (
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 transition-all duration-200 hover:scale-105"
              asChild
            >
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
