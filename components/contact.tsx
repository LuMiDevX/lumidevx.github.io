"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || "Contacto desde portfolio")
    const body = encodeURIComponent(
      `Hola Luis Miguel,\n\nNombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`,
    )
    window.location.href = `mailto:f3nrir.v2@gmail.com?subject=${subject}&body=${body}`
  }

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "f3nrir.v2@gmail.com",
      href: "mailto:f3nrir.v2@gmail.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+598 95 457 869",
      href: "https://wa.me/59895457869",
      color: "text-accent",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "Montevideo, Uruguay",
      href: null,
      color: "text-orange-500",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: t("contact.github"),
      href: "https://github.com/F3-nrir",
      color: "hover:text-primary",
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin"),
      href: "https://www.linkedin.com/in/luis-miguel-gonzalez-dominguez",
      color: "hover:text-blue-500",
    },
    {
      icon: MessageCircle,
      label: t("contact.telegram"),
      href: "https://t.me/f3nrir_v2",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:f3nrir.v2@gmail.com",
      color: "hover:text-accent",
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 gradient-text">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">{t("contact.subtitle")}</p>
            <p className="text-foreground/80 max-w-xl mx-auto">{t("contact.description")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">{t("contact.title")}</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center`}>
                            <info.icon className={`h-5 w-5 ${info.color}`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            {info.href ? (
                              <a
                                href={info.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="font-medium">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-serif font-semibold mb-4">{t("contact.social.title")}</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      asChild
                      className={`border-border/50 ${social.color} transition-colors`}
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="mr-2 h-4 w-4" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="border-accent/20 bg-accent/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-serif font-semibold mb-2">{t("contact.info.availability")}</h4>
                  <p className="text-sm text-foreground/80 mb-3">{t("contact.description")}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {t("contact.status.available")}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-6">{t("contact.form.title")}</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          {t("contact.form.name")} *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-background/50"
                          placeholder={t("contact.form.namePlaceholder")}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          {t("contact.form.email")} *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-background/50"
                          placeholder={t("contact.form.emailPlaceholder")}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        {t("contact.form.subject")}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-background/50"
                        placeholder={t("contact.form.subjectPlaceholder")}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t("contact.form.message")} *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-background/50 resize-none"
                        placeholder={t("contact.form.messagePlaceholder")}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-bg hover:opacity-90 text-white font-semibold"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {t("contact.form.send")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
