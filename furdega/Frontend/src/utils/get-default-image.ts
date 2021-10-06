import { v4 as uuidv4 } from "uuid"
import { ImageResponse } from "../types/image"

const getDefaultImage = (): ImageResponse => ({
  id: uuidv4(),
  imageUrl: "",
})

export { getDefaultImage }
