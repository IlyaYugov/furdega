import axios from "./axios"

import {
  Furniture,
  FurnitureCreateRequest,
  FurnitureUpdateRequest,
} from "../types/furniture"

const BASE_URL = "/api/furnitures"

const furnituresApi = {
  getByFurnitureTypeId: async (typeId?: number): Promise<Furniture[]> => {
    const response = await axios.get<Furniture[]>(BASE_URL, {
      params: { typeId },
    })
    return response.data
  },

  get: async (): Promise<Furniture[]> => {
    const response = await axios.get<Furniture[]>(BASE_URL)
    return response.data
  },

  create: async (request: FurnitureCreateRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (
    id: number,
    request: FurnitureUpdateRequest
  ): Promise<void> => {
    await axios.put(`${BASE_URL}/${id}`, request)
  },

  delete: async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`)
  },
}

export { furnituresApi }
