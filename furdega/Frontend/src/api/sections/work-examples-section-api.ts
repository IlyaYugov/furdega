import axios from "axios"

import {
  WorkExamplesSectionCreateRequest,
  WorkExamplesSectionResponse,
  WorkExamplesSectionUpdateRequest,
} from "../../types/home/examples"

const BASE_URL = "/api/sections/work-examples"

const workExamplesSectionApi = {
  get: async (): Promise<WorkExamplesSectionResponse> => {
    const response = await axios.get<WorkExamplesSectionResponse>(BASE_URL)
    return response.data
  },

  create: async (request: WorkExamplesSectionCreateRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (request: WorkExamplesSectionUpdateRequest): Promise<void> => {
    await axios.put(BASE_URL, request)
  },
}

export { workExamplesSectionApi }
