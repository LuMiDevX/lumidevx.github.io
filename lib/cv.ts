export type CvLanguage = "es" | "en"

export function cvHrefForLanguage(lang: CvLanguage): string {
  return lang === "en" ? "/Luis_Miguel_Gonzalez_Resume.pdf" : "/cv-luis-miguel-gonzalez.pdf"
}
