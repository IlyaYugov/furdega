import { HomeSectionBase } from "../home-section-base"
import { ImageRequest } from "../image-request"

export type MainHomeSectionRequest = HomeSectionBase & {
  image?: ImageRequest
}
