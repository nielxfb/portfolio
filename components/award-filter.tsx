"use client"

import { Button } from "@/components/ui/button"

interface AwardFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function AwardFilter({ categories, activeCategory, onCategoryChange }: AwardFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={activeCategory === category ? "bg-accent hover:bg-accent/90" : "hover:bg-accent/10"}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
