import axios from "axios"

import { MaterialType } from "../types/material-type"

const BASE_URL = "/api/materialtype"

const materialTypeApi = {
  getTypes: async (): Promise<MaterialType[]> => {
    const response = await axios.get<MaterialType[]>(BASE_URL)
    return response.data
  },
}

export { materialTypeApi }
