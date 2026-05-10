"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import { ImageModal } from "@/components/image-modal"

import projectsData from "@/data/projects.json"

const ALL = "All"

interface ModalState {
  images: string[]
  currentIndex: number
  alt: string
}

export default function ProjectsPage() {
  const projects = projectsData.projects
  const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))]
  const [activeCategory, setActiveCategory] = useState(ALL)
  const [modal, setModal] = useState<ModalState | null>(null)

  const filtered = activeCategory === ALL ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <PageLayout>
        <div className="space-y-12">
          <section className="animate-slide-up animate-stagger-2">
            <div className="max-w-4xl mx-auto space-y-8">
              <ProjectFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
              {filtered.map((project, index) => (
                <div key={project.id} className={`animate-fade-in animate-stagger-${Math.min(index + 1, 4)}`}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    year={project.year}
                    image={project.image}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    isPrivate={project.isPrivate}
                    onImageClick={(images, currentIndex, alt) => setModal({ images, currentIndex, alt })}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </PageLayout>

      <ImageModal
        isOpen={!!modal}
        onClose={() => setModal(null)}
        images={modal?.images ?? []}
        initialIndex={modal?.currentIndex ?? 0}
        alt={modal?.alt ?? ""}
      />
    </>
  )
}
