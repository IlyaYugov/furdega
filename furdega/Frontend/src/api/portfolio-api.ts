import axios from "axios"

import { PortfolioPageContent } from "../types/portfolio-page-content"

const BASE_URL = "/api/portfolio"

const portfolioApi = {
  get: async (): Promise<PortfolioPageContent> => {
    const response = await axios.get<PortfolioPageContent>(BASE_URL)
    return response.data
  },
}

export { portfolioApi }
