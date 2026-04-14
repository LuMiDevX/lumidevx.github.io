"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

type ExperienceId = "yafex" | "asi"

export function Experience() {
  const { t } = useLanguage()

  const experiences: {
    id: ExperienceId
    website: string | null
    technologies: string[]
  }[] = [
    {
      id: "yafex",
      website: null,
      technologies: ["Python", "Django", "JavaScript", "Docker", "Git", "SQL", "React", "XML"],
    },
    {
      id: "asi",
      website: "https://antasi.asisurl.cu",
      technologies: ["Python", "Django", "Odoo", "PostgreSQL", "Docker", "Git", "Kotlin", "XML", "JavaScript"],
    },
  ]

  const bulletsFor = (id: ExperienceId): string[] => {
    if (id === "yafex") {
      return [t("experience.yafex.bullet1"), t("experience.yafex.bullet2"), t("experience.yafex.bullet3")]
    }
    return [
      t("experience.asi.bullet1"),
      t("experience.asi.bullet2"),
      t("experience.asi.bullet3"),
      t("experience.asi.bullet4"),
    ]
  }

  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 gradient-text">
              {t("experience.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("experience.subtitle")}</p>
          </div>

          <div className="space-y-8 mb-16">
            {experiences.map((exp) => {
              const prefix = `experience.${exp.id}` as const
              return (
                <Card
                  key={exp.id}
                  className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Building className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-serif font-bold">{t(`${prefix}.position`)}</h3>
                            <div className="flex items-center gap-2 text-primary font-semibold">
                              <span>{t(`${prefix}.company`)}</span>
                              {exp.website && (
                                <a
                                  href={exp.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-accent transition-colors"
                                  aria-label={`${t(`${prefix}.company`)} — web`}
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {t(`${prefix}.period`)}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {t(`${prefix}.location`)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-6 leading-relaxed">{t(`${prefix}.description`)}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">{t("experience.responsibilities")}</h4>
                      <ul className="space-y-2">
                        {bulletsFor(exp.id).map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">{t("experience.technologies")}</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
