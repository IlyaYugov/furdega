import { HomeSectionBaseRequest, HomeSectionBaseResponse } from "./common"
import { ImageUpdateRequest, ImageCreateRequest, ImageResponse } from "../image"

export type MainHomeSectionUpdateRequest = HomeSectionBaseRequest & {
  image: ImageUpdateRequest
}

export type MainHomeSectionResponse = HomeSectionBaseResponse & {
  image: ImageResponse | null
}

export type MainHomeSectionCreateRequest = HomeSectionBaseRequest & {
  image: ImageCreateRequest
}
