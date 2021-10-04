import { HomeSectionBase } from "../home-section-base"
import { IssueSolutionRequest } from "./issue-solution-request"

export type IssueSolutionsSectionRequest = HomeSectionBase & {
    issueSolution1: IssueSolutionRequest
    issueSolution2: IssueSolutionRequest
    issueSolution3: IssueSolutionRequest
    issueSolution4: IssueSolutionRequest
}
