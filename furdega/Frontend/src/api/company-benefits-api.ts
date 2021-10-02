import axios from "axios"

import { CompanyBenefitsSectionResponse } from "../types/company-benefits-section"

const BASE_URL = "/api/company-benefits-section"

const companyBenefitsApi = {
  get: async (): Promise<CompanyBenefitsSectionResponse> => {
    const response = await axios.get<CompanyBenefitsSectionResponse>(BASE_URL)
    return response.data
  },

  // create: async (request: WorkExamplesSectionRequest): Promise<void> => {
  //   await axios.post(BASE_URL, request)
  // },

  // update: async (request: WorkExamplesSectionRequest): Promise<void> => {
  //   await axios.put(BASE_URL, request)
  // },
}

export { companyBenefitsApi }
