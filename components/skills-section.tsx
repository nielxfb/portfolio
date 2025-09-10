import { Badge } from "@/components/ui/badge"

interface SkillsSectionProps {
  categories: Array<{
    name: string
    skills: string[]
  }>
}

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="space-y-3">
            <h3 className="text-lg font-semibold text-accent">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
