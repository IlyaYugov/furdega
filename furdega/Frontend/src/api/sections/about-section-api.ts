import axios from "../axios"
import {
  AboutSectionCreateRequest,
  AboutSectionResponse,
  AboutSectionUpdateRequest,
} from "../../types/home/about"

const BASE_URL = "/api/sections/about"

const aboutSectionApi = {
  get: async (): Promise<AboutSectionResponse> => {
    const response = await axios.get<AboutSectionResponse>(BASE_URL)
    return response.data
  },

  create: async (request: AboutSectionCreateRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (request: AboutSectionUpdateRequest): Promise<void> => {
    await axios.put(BASE_URL, request)
  },
}

export { aboutSectionApi }
