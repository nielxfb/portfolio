import { PageLayout } from "@/components/page-layout"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { AwardsSection } from "@/components/awards-section"
import { FloatingContacts } from "@/components/floating-contacts"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import personalData from "@/data/personal.json"
import skillsData from "@/data/skills.json"
import educationData from "@/data/education.json"
import awardsData from "@/data/awards.json"

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
            <div className="flex flex-row items-center justify-center gap-2 pt-4 animate-fade-in animate-stagger-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 transition-all duration-200 hover:scale-105"
              >
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 transition-all duration-200 hover:scale-105"
              >
                <a href="/Daniel Adamlu.pdf" download="Daniel Adamlu.pdf">Download CV</a>
              </Button>
            </div>
          </section>

          <div className="animate-slide-up animate-stagger-2">
            <SkillsSection categories={skillsData.categories} />
          </div>

          <div className="animate-slide-up animate-stagger-3">
            <EducationSection education={educationData.education} />
          </div>

          <div className="animate-slide-up animate-stagger-4">
            <AwardsSection awards={awardsData.awards} />
          </div>
        </div>
      </PageLayout>
    </>
  )
}
