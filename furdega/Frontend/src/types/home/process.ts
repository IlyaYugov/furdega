import { HomeSectionBaseResponse, HomeSectionBaseRequest } from "./common"

export type WorkingProcessSectionResponse = HomeSectionBaseResponse & {
  firstStage: string | null
  secondStage: string | null
  thirdStage: string | null
  finalStage: string | null
}

export type WorkingProcessSectionUpdateRequest = HomeSectionBaseRequest & {
  firstStage: string
  secondStage: string
  thirdStage: string
  finalStage: string
}

export type WorkingProcessSectionCreateRequest =
  WorkingProcessSectionUpdateRequest
