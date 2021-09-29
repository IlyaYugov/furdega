import { HomeSectionBase } from "../home/home-section-base"
import { WorkExampleRequest } from "./work-example-request"

export type WorkExamplesSectionRequest = HomeSectionBase & {
  workExamples: WorkExampleRequest[]
}
