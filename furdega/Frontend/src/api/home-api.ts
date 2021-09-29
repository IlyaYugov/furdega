import axios from "axios"

import {
  AboutSection,
  CompanyBenefitsSection,
  IssueSolutionsSection,
  StaffSection,
  WorkingProcessSection,
  HomePageContent,
  WorkExamplesSection,
  MainHomeSection,
} from "../types/home"
import { MainHomeSectionRequest } from "../types/home-api/main-home-section-request"
import { WorkExamplesSectionRequest } from "../types/home-api/work-examples-section-request"
import { mapObjectToFormData } from "../utils/mapObjectToFormData"

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
    await axios.post(
      `${BASE_URL}/about-section`,
      mapObjectToFormData({ object: request })
    )
  },

  getWorkExamplesSection: async (): Promise<WorkExamplesSection> => {
    const response = await axios.get<WorkExamplesSection>(
      `${BASE_URL}/work-examples-section`
    )
    return response.data
  },
  createOrUpdateWorkExamplesSection: async (
    request: WorkExamplesSectionRequest
  ): Promise<void> => {
    await axios.post(`${BASE_URL}/work-examples-section`, request)
  },

  getMainHomeSection: async (): Promise<MainHomeSection> => {
    const response = await axios.get<MainHomeSection>(
      `${BASE_URL}/work-examples-section`
    )
    return response.data
  },
  createOrUpdateMainHomeSection: async (
    request: MainHomeSectionRequest
  ): Promise<void> => {
    await axios.post(`${BASE_URL}/main-home-section`, request)
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
    section: WorkingProcessSection
  ): Promise<void> => {},

  createOrUpdateStaffSection: async (
    section: StaffSection
  ): Promise<void> => {},
}

export { homeApi }
