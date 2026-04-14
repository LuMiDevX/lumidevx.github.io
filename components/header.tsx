"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Languages, Menu, X, Download } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { cvHrefForLanguage } from "@/lib/cv"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const cvHref = cvHrefForLanguage(language)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  const navItems = [
    { key: "nav.about", href: "about" },
    { key: "nav.skills", href: "skills" },
    { key: "nav.experience", href: "experience" },
    { key: "nav.projects", href: "projects" },
    { key: "nav.learning", href: "learning" },
    { key: "nav.contact", href: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              {isScrolled && (
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img src="/perfil.png" alt="Luis Miguel González D." className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
              {isScrolled && (
                <span className="ml-1 text-xl lg:text-2xl font-serif font-bold gradient-text hover:opacity-80 transition-opacity">
                  LMGD
                </span>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-sm lg:text-base font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex h-9 px-3 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href={cvHref} download aria-label={t("hero.download")}>
                <Download className="h-4 w-4 sm:mr-1.5" />
                <span className="hidden md:inline text-sm font-medium">{t("hero.download")}</span>
              </a>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 p-0 hover:bg-primary/10"
              aria-label={
                mounted ? (theme === "dark" ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"
              }
            >
              {mounted ? (
                <>
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </>
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="w-9 h-9 p-0 hover:bg-primary/10 relative"
              aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              <Languages className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 text-xs font-bold text-accent">{language.toUpperCase()}</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="inline-flex sm:hidden h-9 w-9 p-0 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href={cvHref} download aria-label={t("hero.download")}>
                <Download className="h-4 w-4" />
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-9 h-9 p-0 hover:bg-primary/10"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors duration-200 rounded-md"
                >
                  {t(item.key)}
                </button>
              ))}
              <a
                href={cvHref}
                download
                className="flex items-center gap-2 px-4 py-2 text-base font-medium text-primary hover:bg-primary/5 transition-colors duration-200 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download className="h-4 w-4 shrink-0" />
                {t("hero.download")}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
