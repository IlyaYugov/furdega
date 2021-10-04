import { ImageRequest } from "../image-request"

export type EmployeeRequest = {
  firstName: string
  lastName: string
  image: ImageRequest
  description: string
}
