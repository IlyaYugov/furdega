import axios from "axios"
import {
  MainHomeSectionCreateRequest,
  MainHomeSectionResponse,
  MainHomeSectionUpdateRequest,
} from "../../types/home/main"

const BASE_URL = "/api/home/main"

const mainHomeSectionApi = {
  get: async (): Promise<MainHomeSectionResponse> => {
    const response = await axios.get<MainHomeSectionResponse>(BASE_URL)
    return response.data
  },

  create: async (request: MainHomeSectionCreateRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (request: MainHomeSectionUpdateRequest): Promise<void> => {
    await axios.put(BASE_URL, request)
  },
}

export { mainHomeSectionApi }
