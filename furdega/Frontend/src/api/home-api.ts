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
