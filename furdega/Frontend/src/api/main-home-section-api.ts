import axios from "axios"

import {
  MainHomeSectionResponse,
  MainHomeSectionRequest,
} from "../types/main-home-section"

const BASE_URL = "/api/main-home-section"

const mainHomeSectionApi = {
  get: async (): Promise<MainHomeSectionResponse> => {
    const response = await axios.get<MainHomeSectionResponse>(BASE_URL)
    return response.data
  },

  createOrUpdate: async (request: MainHomeSectionRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },
}

export { mainHomeSectionApi }
