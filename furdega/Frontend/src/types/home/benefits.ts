import { ImageUpdateRequest, ImageСreateRequest, ImageResponse } from "../image"
import { HomeSectionBaseRequest, HomeSectionBaseResponse } from "./common"

export type CompanyBenefitsSectionResponse = HomeSectionBaseResponse & {
  companyBenefit1: CompanyBenefitResponse | null
  companyBenefit2: CompanyBenefitResponse | null
  companyBenefit3: CompanyBenefitResponse | null
  companyBenefit4: CompanyBenefitResponse | null
}

export type CompanyBenefitsSectionCreateRequest = HomeSectionBaseRequest & {
  companyBenefit1: CompanyBenefitCreateRequest
  companyBenefit2: CompanyBenefitCreateRequest
  companyBenefit3: CompanyBenefitCreateRequest
  companyBenefit4: CompanyBenefitCreateRequest
}

export type CompanyBenefitsSectionUpdateRequest = HomeSectionBaseRequest & {
  companyBenefit1: CompanyBenefitUpdateRequest
  companyBenefit2: CompanyBenefitUpdateRequest
  companyBenefit3: CompanyBenefitUpdateRequest
  companyBenefit4: CompanyBenefitUpdateRequest
}

export type CompanyBenefitCreateRequest = {
  title: string
  description: string
  image: ImageСreateRequest
}

export type CompanyBenefitUpdateRequest = {
  title: string
  description: string
  image: ImageUpdateRequest
}

export type CompanyBenefitResponse = {
  title: string
  image: ImageResponse
  description: string
}
