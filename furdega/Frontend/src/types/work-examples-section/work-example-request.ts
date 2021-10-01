import { ImageRequest } from "../image-request"

export type WorkExampleRequest = {
  title: string
  furnitureType: string
  duration: string
  workType: string
  description: string
  beforeImage1?: ImageRequest
  beforeImage2?: ImageRequest
  beforeImage3?: ImageRequest
  afterImage1?: ImageRequest
  afterImage2?: ImageRequest
  afterImage3?: ImageRequest
}
