import { HomeSectionBase } from "../home-section-base"
import { IssueSolutionResponse } from "./issue-solution-response"

export type IssueSolutionsSectionResponse = HomeSectionBase & {
  issueSolution1: IssueSolutionResponse
  issueSolution2: IssueSolutionResponse
  issueSolution3: IssueSolutionResponse
  issueSolution4: IssueSolutionResponse
}
