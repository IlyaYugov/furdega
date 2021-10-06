import axios from "axios"
import {
  Material,
  MaterialBrand,
  MaterialBrandSimple,
  MaterialSimple,
  MaterialCreateRequest,
} from "../types/material"

const BASE_URL = "/api/materials"

const materialsApi = {
  getMaterials: async (): Promise<MaterialSimple[]> => {
    const response = await axios.get<MaterialSimple[]>(BASE_URL)
    return response.data
  },

  addMaterial: async (request: MaterialCreateRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  getMaterialById: async (id: number): Promise<Material> => {
    const response = await axios.get<Material>(`${BASE_URL}/${id}`)
    return response.data
  },

  getMaterialBrands: async (
    materialId: number
  ): Promise<MaterialBrandSimple[]> => {
    const response = await axios.get<MaterialBrandSimple[]>(
      `${BASE_URL}/${materialId}/brands`
    )
    return response.data
  },

  getMaterialBrandById: async (
    materialId: number,
    materialBrandId: number
  ): Promise<MaterialBrand> => {
    const response = await axios.get<MaterialBrand>(
      `${BASE_URL}/${materialId}/brands/${materialBrandId}`
    )
    return response.data
  },
}

export { materialsApi }
