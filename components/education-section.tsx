import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Education } from "@/lib/data"

interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Education</h2>
      <div className="space-y-4">
        {education.map((entry) => (
          <Card key={entry.id} className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground">{entry.institution}</CardTitle>
              <div className="space-y-1">
                <p className="text-accent font-medium">{entry.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {entry.period} • {entry.location}
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-card-foreground">
                <span className="font-medium">GPA:</span> {entry.gpa}
              </p>
              <p className="text-card-foreground text-sm leading-relaxed">
                <span className="font-medium">Thesis:</span> {entry.thesis}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
