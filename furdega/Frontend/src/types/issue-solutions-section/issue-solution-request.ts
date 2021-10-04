import { ImageRequest } from "../image-request"

export type IssueSolutionRequest = {
  title: string
  description: string
  image?: ImageRequest
}
