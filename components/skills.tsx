"use client"

import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.backend"),
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["Python", "Django", "REST APIs", "Flask", "Node.js", "Java", "Kotlin"],
    },
    {
      title: t("skills.frontend"),
      icon: Globe,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "TypeScript", "Responsive Design", "XML"],
    },
    {
      title: t("skills.tools"),
      icon: Wrench,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: ["Git", "Docker", "Linux", "Odoo"],
    },
    {
      title: t("skills.databases"),
      icon: Database,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: ["PostgreSQL", "MySQL", "SQLite", "SQL", "Database Design"],
    },
  ]

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 gradient-text">
              {t("skills.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("skills.subtitle")}</p>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-xl ${category.bgColor} flex items-center justify-center`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <h3 className="text-xl font-serif font-bold">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
