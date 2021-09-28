import axios from "axios"

import { FurnitureType } from "../types/furniture-type"

const BASE_URL = "/api/furnitureType"

const furnitureTypeApi = {
  getTypes: async (): Promise<FurnitureType[]> => {
    const response = await axios.get<FurnitureType[]>(BASE_URL)
    return response.data
  },

  createType: async (title: string): Promise<void> => {
    await axios.post(BASE_URL, { title })
  },

  updateType: async (type: FurnitureType): Promise<void> => {
    await axios.put(`${BASE_URL}/${type.id}`, { title: type.title })
  },

  deleteType: async (id: Pick<FurnitureType, "id">): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`)
  },
}

export { furnitureTypeApi }
