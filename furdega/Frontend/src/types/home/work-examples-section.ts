import { HomeSectionBase } from "./home-section-base"
import { WorkExample } from "./work-example"

export type WorkExamplesSection = HomeSectionBase & {
  workExamples: WorkExample[]
}
