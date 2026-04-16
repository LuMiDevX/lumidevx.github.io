"use client"

import { Button } from "@/components/ui/button"
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/LuMiDevX",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/luis-miguel-gonzalez-dominguez",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:lumidevx@gmail.com",
      label: "Email",
    },
  ]

  const quickLinks = [
    { key: "nav.about", href: "about" },
    { key: "nav.skills", href: "skills" },
    { key: "nav.experience", href: "experience" },
    { key: "nav.projects", href: "projects" },
    { key: "nav.learning", href: "learning" },
    { key: "nav.contact", href: "contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                {/* Added gradient background to profile image */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent p-0.5">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-background">
                    <img src="/perfil.png" alt="Luis Miguel González D." className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold break-words">Luis Miguel González Domínguez</h3>
                  <p className="text-sm text-muted-foreground">{t("hero.work")}</p>
                </div>
              </div>
              <p className="text-foreground/80 max-w-md leading-relaxed">{t("footer.description")}</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-9 h-9 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-semibold mb-4">
                {/* Added translation for quick links title */}
                {t("footer.quickLinks")}
              </h4>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(link.key)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-semibold mb-4">
                {/* Added translation for contact title */}
                {t("footer.contact")}
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">Montevideo, Uruguay</p>
                <a
                  href="mailto:lumidevx@gmail.com"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  lumidevx@gmail.com
                </a>
                <a
                  href="https://wa.me/59895457869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  +598 95 457 869
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground text-center sm:text-left">
              <span>© {currentYear} Luis Miguel González Domínguez.</span>
              <span>{t("footer.rights")}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4">
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 text-sm text-muted-foreground text-center sm:text-left">
                <span>
                  {/* Added translation for made with text */}
                  {t("footer.madeWith")}
                </span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>{t("footer.and")} Next.js & Tailwind CSS</span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="w-8 h-8 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
