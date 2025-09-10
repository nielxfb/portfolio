import { PageLayout } from "@/components/page-layout"
import { ProjectCard } from "@/components/project-card"

// Import JSON data
import projectsData from "@/data/projects.json"

export default function ProjectsPage() {
  const projects = projectsData.projects

  return (
    <PageLayout>
      <div className="space-y-12">
        <section className="animate-slide-up animate-stagger-2">
          <div className="max-w-4xl mx-auto space-y-8">
            {projects.map((project, index) => (
              <div key={project.id} className={`animate-fade-in animate-stagger-${Math.min(index + 1, 4)}`}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  category={project.category}
                  status={project.status}
                  year={project.year}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  featured={project.featured}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
