import { ImageCreateRequest, ImageResponse, ImageUpdateRequest } from "./image"

export type MaterialBrandSimple = {
  id: number
  title: string
  materialId: number
  previewImage: ImageResponse
}

export type MaterialBrand = {
  id: number
  title: string
  materialId: number
  mainImage: ImageResponse
  images: ImageResponse[]
}

export type MaterialBrandCreateRequest = {
  title: string
  materialId: number
  mainImage: ImageCreateRequest
  previewImage: ImageCreateRequest
  images: ImageCreateRequest[]
}

export type MaterialBrandUpdateRequest = {
  title: string
  materialId: number
  mainImage: ImageUpdateRequest
  previewImage: ImageUpdateRequest
  images: ImageUpdateRequest[]
}
