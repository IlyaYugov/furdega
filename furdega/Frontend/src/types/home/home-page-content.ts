import { AboutSection } from "./about-section"
import { CompanyBenefitsSection } from "./company-benefits-section"
import { IssueSolutionsSection } from "./issue-solutions-section"
import { StaffSection } from "./staff-section"
import { WorkExamplesSection } from "./work-examples-section"
import { WorkingProcessSection } from "./working-process-section"

export type HomePageContent = {
  header: string
  imageUrl: string
  aboutSection: AboutSection
  workExamplesSection: WorkExamplesSection
  companyBenefitsSection: CompanyBenefitsSection
  issueSolutionsSection: IssueSolutionsSection
  workingProcessSection: WorkingProcessSection
  staffSection: StaffSection
}
