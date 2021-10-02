import axios from "axios"

import {
  AboutSectionRequest,
  AboutSectionResponse,
} from "../types/about-section"

const BASE_URL = "/api/about-section"

const aboutSectionApi = {
  get: async (): Promise<AboutSectionResponse> => {
    const response = await axios.get<AboutSectionResponse>(BASE_URL)
    return response.data
  },

  createOrUpdate: async (request: AboutSectionRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },
}

export { aboutSectionApi }
