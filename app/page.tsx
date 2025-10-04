import { PageLayout } from "@/components/page-layout"
import { ExperienceCard } from "@/components/experience-card"
import { SkillsSection } from "@/components/skills-section"
import { FloatingContacts } from "@/components/floating-contacts"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Import JSON data
import personalData from "@/data/personal.json"
import skillsData from "@/data/skills.json"

export default function HomePage() {
  return (
    <>
      <FloatingContacts />
      <PageLayout>
        <div className="space-y-16">
          <section className="text-center space-y-6 py-12 animate-fade-in">
            <div className="flex justify-center mb-8 animate-scale-in animate-stagger-1">
              <div className="relative">
                <img
                  src={personalData.profileImage || "/placeholder.svg"}
                  alt={`${personalData.name} profile picture`}
                  className="w-40 h-40 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-2xl transition-all duration-300 hover:scale-105"
                />
                {/* <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20"></div> */}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance animate-fade-in animate-stagger-2">
              {personalData.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in animate-stagger-3">
              {personalData.title}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty animate-fade-in animate-stagger-4">
              {personalData.bio}
            </p>
            <div className="pt-4 animate-fade-in animate-stagger-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 transition-all duration-200 hover:scale-105"
              >
                <Link href="/projects">View My Work</Link>
              </Button>
            </div>
          </section>

          {/* <section className="space-y-8 animate-slide-up animate-stagger-2">
            <h2 className="text-3xl font-bold">Experience</h2>
            <div className="space-y-6">
              {experienceData.experiences.map((experience, index) => (
                <div key={experience.id} className={`animate-fade-in animate-stagger-${Math.min(index + 1, 4)}`}>
                  <ExperienceCard
                    title={experience.title}
                    company={experience.company}
                    period={experience.period}
                    location={experience.location}
                    description={experience.description}
                    technologies={experience.technologies}
                  />
                </div>
              ))}
            </div>
          </section> */}

          <div className="animate-slide-up animate-stagger-3">
            <SkillsSection categories={skillsData.categories} />
          </div>
        </div>
      </PageLayout>
    </>
  )
}
