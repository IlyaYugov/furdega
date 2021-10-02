import { CompanyBenefitResponse } from "./company-benefit-response"
import { HomeSectionBase } from "../home-section-base"

export type CompanyBenefitsSectionResponse = HomeSectionBase & {
  companyBenefit1: CompanyBenefitResponse
  companyBenefit2: CompanyBenefitResponse
  companyBenefit3: CompanyBenefitResponse
  companyBenefit4: CompanyBenefitResponse
}
