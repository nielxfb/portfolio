"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import { ImageModal } from "@/components/image-modal"

import projectsData from "@/data/projects.json"

const ALL = "All"

export default function ProjectsPage() {
  const projects = projectsData.projects
  const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))]
  const [activeCategory, setActiveCategory] = useState(ALL)
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)

  const filtered = activeCategory === ALL ? projects : projects.filter((p) => p.category === activeCategory)

  const handleImageClick = (imageUrl: string, alt: string) => {
    setModalImage({ src: imageUrl, alt })
  }

  const closeModal = () => {
    setModalImage(null)
  }

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
                    onImageClick={handleImageClick}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </PageLayout>

      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={closeModal}
          src={modalImage.src}
          alt={modalImage.alt}
        />
      )}
    </>
  )
}
