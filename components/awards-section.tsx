import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Award } from "@/lib/data"

interface AwardsSectionProps {
  awards: Award[]
}

export function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Achievements</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {awards.map((award) => (
          <Card key={award.id} className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-card-foreground leading-snug">{award.title}</CardTitle>
              <div className="space-y-0.5">
                <p className="text-accent text-sm font-medium">{award.organization}</p>
                <p className="text-xs text-muted-foreground">{award.date}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-card-foreground leading-relaxed">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
