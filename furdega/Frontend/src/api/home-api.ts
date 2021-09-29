import axios from "axios"

import {
  AboutSection,
  CompanyBenefitsSection,
  IssueSolutionsSection,
  StaffSection,
  WorkExamplesSection,
  WorkingProcessSection,
  HomePageContent,
} from "../types/home"
import { MainHomeSectionRequest } from "../types/home-api/main-home-section-request"
import { MainHomeSection } from "../types/home/main-home-section"
import { mapObjectToFormData } from "../utils/mapToFormData"

const BASE_URL = "/api/home"

const homeApi = {
  getContent: async (): Promise<HomePageContent> => {
    const response = await axios.get<HomePageContent>(BASE_URL)
    return response.data
  },

  createOrUpdateAboutSection: async (
    section: AboutSection
  ): Promise<void> => {},

  createOrUpdateWorkExamplesSection: async (
    section: WorkExamplesSection
  ): Promise<void> => {
    const formData = new FormData()

    formData.append("header", section.header)
    formData.append("workExamples", JSON.stringify(section.workExamples))

    await axios.post(`${BASE_URL}/workexamplessection`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  },

  createOrUpdateMainHomeSection: async (
    request: MainHomeSectionRequest
  ): Promise<void> => {
    await axios.post(
      `${BASE_URL}/mainhomesectionrequest`,
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
