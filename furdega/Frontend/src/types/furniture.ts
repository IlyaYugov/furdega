import { ImageCreateRequest, ImageResponse, ImageUpdateRequest } from "./image"

export type FurnitureType = {
  id: number
  title: string
}

export type FurnitureTypeCreateRequest = {
  title: string
}

export type FurnitureTypeUpdateRequest = {
  title: string
}

export type Furniture = {
  id: number
  beforeImage: ImageResponse
  afterImage: ImageResponse
  furnitureTypeId: number
}

export type FurnitureCreateRequest = {
  beforeImage: ImageCreateRequest
  afterImage: ImageCreateRequest
  furnitureTypeId: number
}

export type FurnitureUpdateRequest = {
  beforeImage: ImageUpdateRequest
  afterImage: ImageUpdateRequest
  furnitureTypeId: number
}
