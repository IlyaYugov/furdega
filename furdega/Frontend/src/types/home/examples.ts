import { ImageUpdateRequest, ImageCreateRequest, ImageResponse } from "../image"
import { HomeSectionBaseRequest, HomeSectionBaseResponse } from "./common"

export type WorkExampleUpdateRequest = {
  title: string
  furnitureType: string
  duration: string
  workType: string
  description: string
  beforeImage1: ImageUpdateRequest
  beforeImage2: ImageUpdateRequest
  beforeImage3: ImageUpdateRequest
  afterImage1: ImageUpdateRequest
  afterImage2: ImageUpdateRequest
  afterImage3: ImageUpdateRequest
}

export type WorkExampleCreateRequest = {
  title: string
  furnitureType: string
  duration: string
  workType: string
  description: string
  beforeImage1: ImageCreateRequest
  beforeImage2: ImageCreateRequest
  beforeImage3: ImageCreateRequest
  afterImage1: ImageCreateRequest
  afterImage2: ImageCreateRequest
  afterImage3: ImageCreateRequest
}

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

export type WorkExamplesSectionCreateRequest = HomeSectionBaseRequest & {
  workExample1: WorkExampleCreateRequest
  workExample2: WorkExampleCreateRequest
  workExample3: WorkExampleCreateRequest
}

export type WorkExamplesSectionUpdateRequest = HomeSectionBaseRequest & {
  workExample1: WorkExampleUpdateRequest
  workExample2: WorkExampleUpdateRequest
  workExample3: WorkExampleUpdateRequest
}

export type WorkExamplesSectionResponse = HomeSectionBaseResponse & {
  workExample1: WorkExampleResponse | null
  workExample2: WorkExampleResponse | null
  workExample3: WorkExampleResponse | null
}
