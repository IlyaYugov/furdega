import axios from "axios"

import { IssueSolutionsSectionRequest, IssueSolutionsSectionResponse } from "../../types/issue-solutions-section"

const BASE_URL = "/api/home/issue-solutions"

const issueSolutionsSectionApi = {
  get: async (): Promise<IssueSolutionsSectionResponse> => {
    const response = await axios.get<IssueSolutionsSectionResponse>(BASE_URL)
    return response.data
  },

  create: async (request: IssueSolutionsSectionRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (request: IssueSolutionsSectionRequest): Promise<void> => {
    await axios.put(BASE_URL, request)
  },
}

export { issueSolutionsSectionApi }
