import axios from "axios"

import { MaterialType } from "../types/material-type"

const BASE_URL = "/api/materialtype"

const materialTypeApi = {
  getTypes: async (): Promise<MaterialType[]> => {
    const response = await axios.get<MaterialType[]>(BASE_URL)
    return response.data
  },

  createType: async (title: string): Promise<void> => {
    await axios.post(BASE_URL, { title })
  },

  updateType: async (type: MaterialType): Promise<void> => {
    await axios.put(`${BASE_URL}/${type.id}`, { title: type.title })
  },

  deleteType: async (id: Pick<MaterialType, "id">): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`)
  },
}

export { materialTypeApi }
