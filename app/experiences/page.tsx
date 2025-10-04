import { PageLayout } from "@/components/page-layout";
import React from "react";

import experienceData from "@/data/experience.json";
import { ExperienceCard } from "@/components/experience-card";

export default function ExperiencesPage() {
  return (
    <PageLayout>
      <div className="space-y-12">
        <section className="space-y-8 animate-slide-up animate-stagger-2">
            <h2 className="text-3xl font-bold">My Experiences Over the Years</h2>
          <div className="space-y-6">
            {experienceData.experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`animate-fade-in animate-stagger-${Math.min(
                  index + 1,
                  4
                )}`}
              >
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
        </section>
      </div>
    </PageLayout>
  );
}
