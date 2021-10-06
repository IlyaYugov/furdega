import { ImageUpdateRequest, ImageCreateRequest, ImageResponse } from "../image"

export type EmployeeCreateRequest = {
  firstName: string
  lastName: string
  description: string
  image: ImageCreateRequest
}

export type EmployeeUpdateRequest = {
  firstName: string
  lastName: string
  description: string
  image: ImageUpdateRequest
}

export type EmployeeResponse = {
  id: number
  firstName: string
  lastName: string
  image: ImageResponse
  description: string
}
