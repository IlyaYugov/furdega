import { BlogPreview } from "../types/blog"
import { getDefaultImage } from "../utils/get-default-image"

export const tags = ["Новости", "О мебели", "Как это работает"]

export const topBlog: BlogPreview = {
  id: 1,
  title: "Совершенно новый подход к реставрации мебели",
  image: getDefaultImage(),
}
