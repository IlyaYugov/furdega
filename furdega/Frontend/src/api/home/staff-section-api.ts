import axios from "axios"

import { StaffSectionRequest, StaffSectionResponse } from "../../types/staff-section"

const BASE_URL = "/api/home/staff"

const staffSectionApi = {
  get: async (): Promise<StaffSectionResponse> => {
    const response = await axios.get<StaffSectionResponse>(BASE_URL)
    return response.data
  },

  create: async (request: StaffSectionRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (request: StaffSectionRequest): Promise<void> => {
    await axios.put(BASE_URL, request)
  }
}

export { staffSectionApi }
