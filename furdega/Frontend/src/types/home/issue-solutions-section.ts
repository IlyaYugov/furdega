import { HomeSectionBase } from "./home-section-base"
import { IssueSolution } from "./issue-solution"

export type IssueSolutionsSection = HomeSectionBase & {
  issueSolutions: IssueSolution[]
}
