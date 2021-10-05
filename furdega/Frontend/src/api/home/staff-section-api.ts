import axios from "axios"
import {
  StaffSectionUpdateRequest,
  StaffSectionCreateRequest,
  StaffSectionResponse,
} from "../../types/home/staff"

const BASE_URL = "/api/home/staff"

const staffSectionApi = {
  get: async (): Promise<StaffSectionResponse> => {
    const response = await axios.get<StaffSectionResponse>(BASE_URL)
    return response.data
  },

  create: async (request: StaffSectionCreateRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (request: StaffSectionUpdateRequest): Promise<void> => {
    await axios.put(BASE_URL, request)
  },
}

export { staffSectionApi }
