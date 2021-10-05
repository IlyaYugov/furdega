import axios from "axios"
import { HomePageContent } from "../../types/home/content"

const BASE_URL = "/api/home"

const homeApi = {
  getContent: async (): Promise<HomePageContent> => {
    const response = await axios.get<HomePageContent>(BASE_URL)
    return response.data
  },
}

export { homeApi }
