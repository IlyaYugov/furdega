import axios from "axios"

import { MaterialBrand, MaterialBrandSimple } from "../types/material"

const BASE_URL = "/api/material-brands"

const materialBrandsApi = {
  getAll: async (materialId: number): Promise<MaterialBrandSimple[]> => {
    const response = await axios.get<MaterialBrandSimple[]>(
      `${BASE_URL}/${materialId}/brands`
    )
    return response.data
  },

  get: async (
    materialId: number,
    materialBrandId: number
  ): Promise<MaterialBrand> => {
    const response = await axios.get<MaterialBrand>(
      `${BASE_URL}/${materialId}/brands/${materialBrandId}`
    )
    return response.data
  },
}

export { materialBrandsApi }
