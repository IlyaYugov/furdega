import { ImageResponse } from "../image-response"

export type WorkExampleResponse = {
  title: string
  furnitureType: string
  duration: string
  workType: string
  description: string
  beforeImage1: ImageResponse
  beforeImage2: ImageResponse
  beforeImage3: ImageResponse
  afterImage1: ImageResponse
  afterImage2: ImageResponse
  afterImage3: ImageResponse
}
