import { ImageRequest } from "../image-request"

export type EmployeeRequest = {
  firstName: string
  lastName: string
  description: string
  image?: ImageRequest
}
