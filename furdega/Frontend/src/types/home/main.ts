import { HomeSectionBaseRequest, HomeSectionBaseResponse } from "./common"
import { ImageUpdateRequest, ImageCreateRequest, ImageResponse } from "../image"

export type MainHomeSectionUpdateRequest = HomeSectionBaseRequest & {
  image: ImageUpdateRequest
}

export type MainSectionResponse = HomeSectionBaseResponse & {
  image: ImageResponse | null
}

export type MainHomeSectionCreateRequest = HomeSectionBaseRequest & {
  image: ImageCreateRequest
}
