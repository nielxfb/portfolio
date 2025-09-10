import { PageLayout } from "@/components/page-layout"
import { AwardCard } from "@/components/award-card"

// Import JSON data
import awardsData from "@/data/awards.json"

export default function AwardsPage() {
  const awards = awardsData.awards.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return Number.parseInt(b.year) - Number.parseInt(a.year)
  })

  return (
    <PageLayout>
      <div className="space-y-12">
        <section className="animate-slide-up animate-stagger-2">
          <div className="max-w-4xl mx-auto space-y-8">
            {awards.map((award, index) => (
              <div key={award.id} className={`animate-fade-in animate-stagger-${Math.min(index + 1, 4)}`}>
                <AwardCard
                  title={award.title}
                  organization={award.organization}
                  year={award.year}
                  category={award.category}
                  description={award.description}
                  image={award.image}
                  certificateUrl={award.certificateUrl}
                  featured={award.featured}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
