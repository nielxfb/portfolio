import type React from "react"
import { Navigation } from "./navigation"

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6">{children}</div>
      </main>
    </div>
  )
}
