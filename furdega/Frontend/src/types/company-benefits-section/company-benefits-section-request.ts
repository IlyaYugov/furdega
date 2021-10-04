import { HomeSectionBase } from "../home-section-base";
import { CompanyBenefitRequest } from './company-benefit-request'

export type CompanyBenefitsSectionRequest = HomeSectionBase & {
    companyBenefit1: CompanyBenefitRequest
    companyBenefit2: CompanyBenefitRequest
    companyBenefit3: CompanyBenefitRequest
    companyBenefit4: CompanyBenefitRequest
}