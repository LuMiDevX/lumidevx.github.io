"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Workflow, ExternalLink, BookOpen } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Learning() {
  const { t } = useLanguage()

  const learningItems = [
    {
      title: t("learning.machineLearning.title"),
      description: t("learning.machineLearning.description"),
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      source: t("learning.machineLearning.source"),
      link: "https://www.freecodecamp.org/learn/machine-learning-with-python/",
      progress: t("learning.machineLearning.progress"),
    },
    {
      title: t("learning.automatization.title"),
      description: t("learning.automatization.description"),
      icon: Workflow,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      technologies: ["n8n", "AI Agents", "Webhooks", "APIs"],
      source: t("learning.automatization.source"),
      link: "https://cursos.raiola.link/cursos/curso-de-automatizaciones-con-n8n-e-inteligencia-artificial/",
      progress: t("learning.automatization.progress"),
    },
  ]

  return (
    <section id="learning" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 gradient-text">
              {t("learning.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("learning.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Learning Projects */}
            <div className="space-y-8">
              <h3 className="text-2xl font-serif font-bold">
                {t("learning.what")}
              </h3>

              <div className="space-y-6">
                {learningItems.map((item, index) => (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0`}
                        >
                          <item.icon className={`h-6 w-6 ${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-serif font-bold">{item.title}</h4>
                            <Badge variant="secondary" className="bg-accent/10 text-accent">
                              {item.progress}
                            </Badge>
                          </div>
                          <p className="text-foreground/80 text-sm leading-relaxed mb-3">{item.description}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <BookOpen className="h-4 w-4" />
                            <span>
                              {t("learning.sourceLabel")} {item.source}
                            </span>
                            {item.link && (
                              <Button variant="ghost" size="sm" asChild className="p-1 h-auto hover:text-primary">
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={item.title}
                                >
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              </Button>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="bg-muted/50 text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="space-y-8">
              <h3 className="text-2xl font-serif font-bold">{t("learning.hobbies")}</h3>

              <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-foreground/80 mb-6 leading-relaxed">{t("learning.description")}</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-serif font-semibold mb-3">{t("learning.filosophy")}</h4>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {t("learning.filosophy.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
