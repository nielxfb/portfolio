"use client"

import { Mail, Linkedin, Github } from "lucide-react"
import personalData from "@/data/personal.json"

export function FloatingContacts() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 space-y-4">
      <div className="contact-icon-hover group relative">
        <a
          href={`mailto:${personalData.email}`}
          className="flex items-center justify-center w-12 h-12 bg-card border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Mail className="h-5 w-5 text-primary" />
        </a>
        <div className="contact-tooltip absolute right-16 top-1/2 -translate-y-1/2 bg-card border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
          <span className="text-sm font-medium">{personalData.email}</span>
        </div>
      </div>

      <div className="contact-icon-hover group relative">
        <a
          href={personalData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-card border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Linkedin className="h-5 w-5 text-secondary" />
        </a>
        <div className="contact-tooltip absolute right-16 top-1/2 -translate-y-1/2 bg-card border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
          <span className="text-sm font-medium">LinkedIn Profile</span>
        </div>
      </div>

      <div className="contact-icon-hover group relative">
        <a
          href={personalData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-card border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Github className="h-5 w-5 text-foreground" />
        </a>
        <div className="contact-tooltip absolute right-16 top-1/2 -translate-y-1/2 bg-card border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
          <span className="text-sm font-medium">GitHub Profile</span>
        </div>
      </div>

    </div>
  )
}
