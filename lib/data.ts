// Centralized data management utilities
import personalData from "@/data/personal.json"
import experienceData from "@/data/experience.json"
import skillsData from "@/data/skills.json"
import projectsData from "@/data/projects.json"
import awardsData from "@/data/awards.json"
import educationData from "@/data/education.json"

// Type definitions for better TypeScript support
export interface PersonalInfo {
  name: string
  title: string
  bio: string
  location: string
  email: string
  linkedin: string
  github: string
  website?: string
}

export interface Experience {
  id: number
  title: string
  company: string
  period: string
  location: string
  description: string
  technologies: string[]
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  status: string
  year: string
  image: string
  githubUrl?: string
  liveUrl?: string | null
  featured: boolean
}

export interface Award {
  id: number
  title: string
  organization: string
  date: string
  description: string
}

export interface Education {
  id: number
  institution: string
  degree: string
  location: string
  period: string
  gpa: string
  thesis: string
}

// Data getters with type safety
export const getPersonalInfo = (): PersonalInfo => personalData

export const getExperiences = (): Experience[] => experienceData.experiences

export const getSkillCategories = (): SkillCategory[] => skillsData.categories

export const getProjects = (): Project[] => projectsData.projects

export const getFeaturedProjects = (): Project[] => projectsData.projects.filter((project) => project.featured)

export const getProjectsByCategory = (category: string): Project[] =>
  category === "All" ? projectsData.projects : projectsData.projects.filter((project) => project.category === category)

export const getAwards = (): Award[] => awardsData.awards

export const getEducation = (): Education[] => educationData.education
