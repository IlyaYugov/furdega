import { ScrollspyAnchor } from "../types/scrollspy-anchor"

const scrollspyAnchorsMap: Record<string, ScrollspyAnchor> = {
  about: {
    id: "about",
    name: "О фабрике",
  },
  examples: {
    id: "examples",
    name: "Работы",
  },
  benefits: {
    id: "benefits",
    name: "Преимущества",
  },
  solutions: {
    id: "solutions",
    name: "Решения",
  },
  process: {
    id: "process",
    name: "Процесс",
  },
  staff: {
    id: "staff",
    name: "Персонал",
  },
}

const scrollspyAnchors: ScrollspyAnchor[] = Object.values(scrollspyAnchorsMap)

export { scrollspyAnchorsMap, scrollspyAnchors }
