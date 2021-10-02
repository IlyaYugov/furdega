import axios from "axios"

import { StaffSectionResponse } from "../types/staff-section"

const BASE_URL = "/api/staff-section"

const staffSectionApi = {
  get: async (): Promise<StaffSectionResponse> => {
    const response = await axios.get<StaffSectionResponse>(BASE_URL)
    return response.data
  },

  // create: async (request: WorkExamplesSectionRequest): Promise<void> => {
  //   await axios.post(BASE_URL, request)
  // },

  // update: async (request: WorkExamplesSectionRequest): Promise<void> => {
  //   await axios.put(BASE_URL, request)
  // },
}

export { staffSectionApi }
