import axios from "axios"

import { ProtfolioPageContent } from "../types/portfolio-page-content"

const BASE_URL = "/api/portfolio"

const portfolioApi = {
  getContent: async (): Promise<ProtfolioPageContent> => {
    const response = await axios.get<ProtfolioPageContent>(BASE_URL)
    return response.data
  },
}

export { portfolioApi }
