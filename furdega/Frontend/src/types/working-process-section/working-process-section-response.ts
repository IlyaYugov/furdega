import { HomeSectionBase } from "../home-section-base"

export type WorkingProcessSectionResponse = HomeSectionBase & {
  firstStage: string
  secondStage: string
  thirdStage: string
  finalStage: string
}
