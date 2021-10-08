import axios from "axios"
import { SectionsResponse } from "../../types/home/content"

const BASE_URL = "/api/sections"

const sectionsApi = {
  get: async (): Promise<SectionsResponse> => {
    const response = await axios.get<SectionsResponse>(BASE_URL)
    return response.data
  },
}

export { sectionsApi }
