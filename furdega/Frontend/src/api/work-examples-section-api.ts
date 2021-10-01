import axios from "axios"

import {
  WorkExamplesSectionResponse,
  WorkExamplesSectionRequest,
} from "../types/work-examples-section"

const BASE_URL = "/api/work-examples-section"

const workExamplesSectionApi = {
  get: async (): Promise<WorkExamplesSectionResponse> => {
    const response = await axios.get<WorkExamplesSectionResponse>(BASE_URL)
    return response.data
  },

  create: async (request: WorkExamplesSectionRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (request: WorkExamplesSectionRequest): Promise<void> => {
    await axios.put(BASE_URL, request)
  },
}

export { workExamplesSectionApi }
