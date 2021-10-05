import { HomeSectionBaseRequest, HomeSectionBaseResponse } from "./common"

export type AboutSectionResponse = HomeSectionBaseResponse & {
  text: string | null
}

export type AboutSectionUpdateRequest = HomeSectionBaseRequest & {
  text: string
}

export type AboutSectionCreateRequest = AboutSectionUpdateRequest
