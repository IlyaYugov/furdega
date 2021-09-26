import { CompanyBenefit } from "./company-benefit"
import { HomeSectionBase } from "./home-section-base"

export type CompanyBenefitsSection = HomeSectionBase & {
  companyBenefits: CompanyBenefit[]
}
