import { AboutSectionResponse } from "./about-section"
import { CompanyBenefitsSectionResponse } from "./company-benefits-section"
import { IssueSolutionsSectionResponse } from "./issue-solutions-section"
import { MainHomeSectionResponse } from "./main-home-section"
import { StaffSectionResponse } from "./staff-section"
import { WorkExamplesSectionResponse } from "./work-examples-section"
import { WorkingProcessSectionResponse } from "./working-process-section"

export type HomePageContent = {
  mainHomeSection: MainHomeSectionResponse
  aboutSection: AboutSectionResponse
  workExamplesSection: WorkExamplesSectionResponse
  companyBenefitsSection: CompanyBenefitsSectionResponse
  issueSolutionsSection: IssueSolutionsSectionResponse
  workingProcessSection: WorkingProcessSectionResponse
  staff: StaffSectionResponse
}
