import axios from "axios"

import {
  WorkingProcessSectionUpdateRequest,
  WorkingProcessSectionCreateRequest,
  WorkingProcessSectionResponse,
} from "../../types/home/process"

const BASE_URL = "/api/home/working-process"

const workingProcessSectionApi = {
  get: async (): Promise<WorkingProcessSectionResponse> => {
    const response = await axios.get<WorkingProcessSectionResponse>(BASE_URL)
    return response.data
  },

  create: async (
    request: WorkingProcessSectionCreateRequest
  ): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (
    request: WorkingProcessSectionUpdateRequest
  ): Promise<void> => {
    await axios.put(BASE_URL, request)
  },
}

export { workingProcessSectionApi }
