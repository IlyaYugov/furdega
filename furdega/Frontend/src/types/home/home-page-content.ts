import { AboutSection } from "./about-section"
import { CompanyBenefitsSection } from "./company-benefits-section"
import { IssueSolutionsSection } from "./issue-solutions-section"
import { MainHomeSectionResponse } from "../main-home-section"
import { StaffSection } from "./staff-section"
import { WorkExamplesSectionResponse } from "../work-examples-section"
import { WorkingProcessSection } from "./working-process-section"

export type HomePageContent = {
  mainHomeSection: MainHomeSectionResponse
  aboutSection: AboutSection
  workExamplesSection: WorkExamplesSectionResponse
  companyBenefitsSection: CompanyBenefitsSection
  issueSolutionsSection: IssueSolutionsSection
  workingProcessSection: WorkingProcessSection
  staffSection: StaffSection
}
