import { HomeSectionBase } from "../home-section-base"
import { ImageResponse } from "../image-response"

export type MainHomeSectionResponse = HomeSectionBase & {
  image: ImageResponse
}
