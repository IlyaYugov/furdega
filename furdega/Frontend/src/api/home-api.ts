import axios from "axios"

import { HomePageContent } from "../types/home/home-page-content"

const homeApi = {
  getHomePageContent: async (): Promise<HomePageContent> => {
    const response = await axios.get<HomePageContent>("/api/home")
    return response.data
  },
}

export { homeApi }
