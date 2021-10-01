import { HomeSectionBase } from "../home/home-section-base"
import { WorkExampleResponse } from "./work-example-response"

export type WorkExamplesSectionResponse =
  | (HomeSectionBase & {
      workExample1: WorkExampleResponse
      workExample2: WorkExampleResponse
      workExample3: WorkExampleResponse
    })
  | null
