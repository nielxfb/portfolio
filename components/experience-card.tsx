import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  description: string
  technologies: string[]
}

export function ExperienceCard({ title, company, period, location, description, technologies }: ExperienceCardProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl text-card-foreground">{title}</CardTitle>
        <div className="space-y-1">
          <p className="text-accent font-medium">{company}</p>
          <p className="text-sm text-muted-foreground">
            {period} • {location}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-card-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
