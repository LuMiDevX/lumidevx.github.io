"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ArrowDown, Download, Mail, Github, Linkedin, Globe, Phone } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useIsMobile } from "@/hooks/use-mobile"
import { cvHrefForLanguage } from "@/lib/cv"

export function Hero() {
  const { t, language } = useLanguage()
  const cvHref = cvHrefForLanguage(language)
  const isMobile = useIsMobile()
  const [photoZoomOpen, setPhotoZoomOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(132,204,22,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium">{t("hero.greeting")}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                <span className="gradient-text">Luis Miguel</span>
                <br />
                <span className="text-foreground">González D.</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-primary font-semibold">
                {t("hero.title")}
              </h2>
              <p className="text-lg text-accent font-medium">{t("hero.subtitle")}</p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t("hero.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="gradient-bg hover:opacity-90 transition-opacity text-white font-semibold px-8 py-3"
              >
                {t("hero.cta")}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                {t("hero.contact")}
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary"
              >
                <a href="https://github.com/LuMiDevX" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary"
              >
                <a
                  href="https://www.linkedin.com/in/luis-miguel-gonzalez-dominguez"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary"
              >
                <a href="https://wa.me/59895457869"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("hero.portfolio")}
                >
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary"
              >
                <a href="mailto:lumidevx@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 max-w-sm w-full bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
              <div className="text-center space-y-6">
                {/* Profile image — tap to zoom on mobile */}
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-lg">
                  {isMobile ? (
                    <button
                      type="button"
                      onClick={() => setPhotoZoomOpen(true)}
                      className="w-full h-full rounded-full overflow-hidden bg-background block border-0 p-0 cursor-zoom-in active:scale-[0.98] transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={t("hero.photoZoom")}
                    >
                      <img src="/portada.png" alt="" className="w-full h-full object-cover pointer-events-none" />
                    </button>
                  ) : (
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <img src="/portada.png" alt="Luis Miguel González" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                <Dialog open={photoZoomOpen} onOpenChange={setPhotoZoomOpen}>
                  <DialogContent
                    showCloseButton
                    className="max-w-[min(92vw,28rem)] border-0 bg-transparent p-0 shadow-none data-[state=open]:zoom-in-90 data-[state=closed]:zoom-out-90 duration-300 [&>button]:text-white [&>button]:opacity-90 [&>button]:hover:opacity-100"
                  >
                    <DialogTitle className="sr-only">{t("hero.photoZoom")}</DialogTitle>
                    <div className="rounded-full p-1 bg-gradient-to-br from-primary via-accent to-primary shadow-[0_0_48px_-8px_hsl(var(--primary))] animate-in fade-in zoom-in-90 duration-300">
                      <div className="rounded-full overflow-hidden bg-background ring-2 ring-background/80">
                        <img
                          src="/portada.png"
                          alt="Luis Miguel González"
                          className="w-full h-full object-cover aspect-square"
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold">Luis Miguel González Domínguez</h3>
                  <p className="text-primary font-medium">{t("hero.work")}</p>
                  <p className="text-sm text-muted-foreground">{t("hero.location")}</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium">lumidevx@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="font-medium">+598 95 457 869</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <a href={cvHref} download>
                    <Download className="mr-2 h-4 w-4" />
                    {t("hero.download")}
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection("about")}
          className="w-10 h-10 p-0 rounded-full hover:bg-primary/10"
        >
          <ArrowDown className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
