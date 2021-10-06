import axios from "axios"
import {
  MainHomeSectionCreateRequest,
  MainSectionResponse,
  MainHomeSectionUpdateRequest,
} from "../../types/home/main"

const BASE_URL = "/api/sections/main"

const mainSectionApi = {
  get: async (): Promise<MainSectionResponse> => {
    const response = await axios.get<MainSectionResponse>(BASE_URL)
    return response.data
  },

  create: async (request: MainHomeSectionCreateRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (request: MainHomeSectionUpdateRequest): Promise<void> => {
    await axios.put(BASE_URL, request)
  },
}

export { mainSectionApi }
