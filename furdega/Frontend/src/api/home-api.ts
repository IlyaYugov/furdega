import axios from "axios"

import {
  AboutSection,
  CompanyBenefitsSection,
  IssueSolutionsSection,
  StaffSection,
  WorkingProcessSection,
  HomePageContent,
} from "../types/home"

const BASE_URL = "/api/home"

const homeApi = {
  getContent: async (): Promise<HomePageContent> => {
    const response = await axios.get<HomePageContent>(BASE_URL)
    return response.data
  },

  getAboutSection: async (): Promise<AboutSection> => {
    const response = await axios.get<AboutSection>(`${BASE_URL}/about-section`)
    return response.data
  },
  createOrUpdateAboutSection: async (request: AboutSection): Promise<void> => {
    await axios.post(`${BASE_URL}/about-section`, request)
  },

  createOrUpdateCompanyBenefitsSection: async (
    section: CompanyBenefitsSection
  ): Promise<void> => {},

  createOrUpdateIssueSolutionsSection: async (
    section: IssueSolutionsSection
  ): Promise<void> => {},

  getProcessSection: async (): Promise<WorkingProcessSection> => {
    const response = await axios.get<WorkingProcessSection>(
      `${BASE_URL}/working-process-section`
    )
    return response.data
  },
  createOrUpdateWorkingProcessSection: async (
    request: WorkingProcessSection
  ): Promise<void> => {
    await axios.post(`${BASE_URL}/working-process-section`, request)
  },

  createOrUpdateStaffSection: async (
    section: StaffSection
  ): Promise<void> => {},
}

export { homeApi }
