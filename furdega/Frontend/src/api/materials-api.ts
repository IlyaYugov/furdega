import axios from "axios"
import {
  MaterialSimple,
  MaterialCreateRequest,
  MaterialUpdateRequest,
  Material,
} from "../types/material"

const BASE_URL = "/api/materials"

const materialsApi = {
  getAll: async (): Promise<MaterialSimple[]> => {
    const response = await axios.get<MaterialSimple[]>(BASE_URL)
    return response.data
  },

  getById: async (id: number): Promise<Material> => {
    const response = await axios.get<Material>(`${BASE_URL}/${id}`)
    return response.data
  },

  create: async (request: MaterialCreateRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (id: number, request: MaterialUpdateRequest): Promise<void> => {
    await axios.put(`${BASE_URL}/${id}`, request)
  },
}

export { materialsApi }
