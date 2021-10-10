import axios from "./axios"

import { AppointmentMakeRequest } from "../types/appointment"

const BASE_URL = "/api/clientappeal"

const appointmentApi = {
  make: async (request: AppointmentMakeRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },
}

export { appointmentApi }
