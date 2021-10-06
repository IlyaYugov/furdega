import {
  ImageResponse,
  ImageWithPositionResponse,
  ImageCreateRequest,
} from "./image"

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
  images: ImageWithPositionResponse[]
}

export type MaterialCreateRequest = {
  title: string
  mainImage: ImageCreateRequest
  previewImage: ImageCreateRequest
  description: string
}
