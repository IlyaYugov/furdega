import { AboutSectionResponse } from "./about"
import { CompanyBenefitsSectionResponse } from "./benefits"
import { IssueSolutionsSectionResponse } from "./solutions"
import { MainHomeSectionResponse } from "./main"
import { StaffSectionResponse } from "./staff"
import { WorkExamplesSectionResponse } from "./examples"
import { WorkingProcessSectionResponse } from "./process"

export type SectionsResponse = {
  mainHomeSection: MainHomeSectionResponse
  aboutSection: AboutSectionResponse
  workExamplesSection: WorkExamplesSectionResponse
  companyBenefitsSection: CompanyBenefitsSectionResponse
  issueSolutionsSection: IssueSolutionsSectionResponse
  workingProcessSection: WorkingProcessSectionResponse
  staff: StaffSectionResponse
}
