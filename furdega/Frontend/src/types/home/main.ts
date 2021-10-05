import { HomeSectionBaseRequest, HomeSectionBaseResponse } from "./common"
import { ImageUpdateRequest, ImageСreateRequest, ImageResponse } from "../image"

export type MainHomeSectionUpdateRequest = HomeSectionBaseRequest & {
  image: ImageUpdateRequest
}

export type MainHomeSectionResponse = HomeSectionBaseResponse & {
  image: ImageResponse | null
}

export type MainHomeSectionCreateRequest = HomeSectionBaseRequest & {
  image: ImageСreateRequest
}
