import axios from "axios"

import {
  AboutSection,
  CompanyBenefitsSection,
  IssueSolutionsSection,
  StaffSection,
  WorkingProcessSection,
  HomePageContent,
} from "../types/home"
import { MainHomeSectionRequest } from "../types/home-api/main-home-section-request"
import { WorkExamplesSectionRequest } from "../types/home-api/work-examples-section-request"
import { mapObjectToFormData } from "../utils/mapToFormData"

const BASE_URL = "/api/home"

const homeApi = {
  getContent: async (): Promise<HomePageContent> => {
    const response = await axios.get<HomePageContent>(BASE_URL)
    return response.data
  },

  createOrUpdateAboutSection: async (request: AboutSection): Promise<void> => {
    await axios.post(
      `${BASE_URL}/about-section`,
      mapObjectToFormData({ object: request })
    )
  },

  createOrUpdateWorkExamplesSection: async (
    request: WorkExamplesSectionRequest
  ): Promise<void> => {
    await axios.post(
      `${BASE_URL}/workexamplessection`,
      mapObjectToFormData({ object: request })
    )
  },

  createOrUpdateMainHomeSection: async (
    request: MainHomeSectionRequest
  ): Promise<void> => {
    await axios.post(
      `${BASE_URL}/main-home-section`,
      mapObjectToFormData({ object: request })
    )
  },

  createOrUpdateCompanyBenefitsSection: async (
    section: CompanyBenefitsSection
  ): Promise<void> => {},

  createOrUpdateIssueSolutionsSection: async (
    section: IssueSolutionsSection
  ): Promise<void> => {},

  createOrUpdateWorkingProcessSection: async (
    section: WorkingProcessSection
  ): Promise<void> => {},

  createOrUpdateStaffSection: async (
    section: StaffSection
  ): Promise<void> => {},
}

export { homeApi }
