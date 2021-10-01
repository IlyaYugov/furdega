import { HomeSectionBase } from "../home/home-section-base"
import { WorkExampleRequest } from "./work-example-request"

export type WorkExamplesSectionRequest = HomeSectionBase & {
  workExample1: WorkExampleRequest
  workExample2: WorkExampleRequest
  workExample3: WorkExampleRequest
}
