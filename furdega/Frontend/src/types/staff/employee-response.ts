import { ImageResponse } from "../image-response"

export type EmployeeResponse = {
  id: number
  firstName: string
  lastName: string
  image: ImageResponse
  description: string
}
