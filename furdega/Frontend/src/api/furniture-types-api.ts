import axios from "./axios"

import {
  FurnitureType,
  FurnitureTypeCreateRequest,
  FurnitureTypeUpdateRequest,
} from "../types/furniture"

const BASE_URL = "/api/furnitureTypes"

const furnitureTypesApi = {
  get: async (): Promise<FurnitureType[]> => {
    const response = await axios.get<FurnitureType[]>(BASE_URL)
    return response.data
  },

  create: async (request: FurnitureTypeCreateRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (
    id: number,
    request: FurnitureTypeUpdateRequest
  ): Promise<void> => {
    await axios.put(`${BASE_URL}/${id}`, request)
  },

  delete: async (id: Pick<FurnitureType, "id">): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`)
  },
}

export { furnitureTypesApi }
