import { ScrollspyAnchor } from "../types/scrollspy-anchor"

const scrollspyAnchorsMap: Record<string, ScrollspyAnchor> = {
  all: {
    id: "all",
    name: "Все работы",
  },
  chairs: {
    id: "chairs",
    name: "Стулья",
  },
  tables: {
    id: "tables",
    name: "Столы",
  },
}

const scrollspyAnchors: ScrollspyAnchor[] = Object.values(scrollspyAnchorsMap)

export { scrollspyAnchorsMap, scrollspyAnchors }
