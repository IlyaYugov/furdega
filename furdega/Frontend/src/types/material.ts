import { ImageResponse, ImageCreateRequest, ImageUpdateRequest } from "./image"

export type MaterialSimple = {
  id: number
  title: string
  previewImage: ImageResponse
}

export type Material = {
  id: number
  title: string
  mainImage: ImageResponse
  description: string
}

export type MaterialCreateRequest = {
  title: string
  mainImage: ImageCreateRequest
  previewImage: ImageCreateRequest
  description: string
}

export type MaterialUpdateRequest = {
  title: string
  mainImage: ImageUpdateRequest
  previewImage: ImageUpdateRequest
  description: string
}
