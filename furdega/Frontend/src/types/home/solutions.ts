import { ImageUpdateRequest, ImageСreateRequest, ImageResponse } from "../image"
import { HomeSectionBaseRequest, HomeSectionBaseResponse } from "./common"

export type IssueSolutionResponse = {
  title: string
  image: ImageResponse
  description: string
}

export type IssueSolutionCreateRequest = {
  title: string
  description: string
  image: ImageСreateRequest
}

export type IssueSolutionUpdateRequest = {
  title: string
  description: string
  image?: ImageUpdateRequest
}

export type IssueSolutionsSectionResponse = HomeSectionBaseResponse & {
  issueSolution1: IssueSolutionResponse | null
  issueSolution2: IssueSolutionResponse | null
  issueSolution3: IssueSolutionResponse | null
  issueSolution4: IssueSolutionResponse | null
}

export type IssueSolutionsSectionCreateRequest = HomeSectionBaseRequest & {
  issueSolution1: IssueSolutionCreateRequest
  issueSolution2: IssueSolutionCreateRequest
  issueSolution3: IssueSolutionCreateRequest
  issueSolution4: IssueSolutionCreateRequest
}

export type IssueSolutionsSectionUpdateRequest = HomeSectionBaseRequest & {
  issueSolution1: IssueSolutionUpdateRequest
  issueSolution2: IssueSolutionUpdateRequest
  issueSolution3: IssueSolutionUpdateRequest
  issueSolution4: IssueSolutionUpdateRequest
}
