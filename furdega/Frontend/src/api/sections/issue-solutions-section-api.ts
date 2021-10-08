import axios from "axios"
import {
  IssueSolutionsSectionCreateRequest,
  IssueSolutionsSectionResponse,
  IssueSolutionsSectionUpdateRequest,
} from "../../types/home/solutions"

const BASE_URL = "/api/sections/issue-solutions"

const issueSolutionsSectionApi = {
  get: async (): Promise<IssueSolutionsSectionResponse> => {
    const response = await axios.get<IssueSolutionsSectionResponse>(BASE_URL)
    return response.data
  },

  create: async (
    request: IssueSolutionsSectionCreateRequest
  ): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (
    request: IssueSolutionsSectionUpdateRequest
  ): Promise<void> => {
    await axios.put(BASE_URL, request)
  },
}

export { issueSolutionsSectionApi }
