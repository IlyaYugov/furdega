import axios from "axios"

import {
  WorkingProcessSectionRequest,
  WorkingProcessSectionResponse,
} from "../types/working-process-section"

const BASE_URL = "/api/issue-solutions-section"

const workingProcessSectionApi = {
  get: async (): Promise<WorkingProcessSectionResponse> => {
    const response = await axios.get<WorkingProcessSectionResponse>(BASE_URL)
    return response.data
  },

  createOrUpdate: async (
    request: WorkingProcessSectionRequest
  ): Promise<void> => {
    await axios.post(BASE_URL, request)
  },
}

export { workingProcessSectionApi }
