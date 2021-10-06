export type ImageResponse = {
  id: string
  imageUrl: string
}

export type ImageUpdateRequest = {
  id: string
  base64ImageString: string | null
}

export type ImageCreateRequest = {
  id: string
  base64ImageString: string
}

export type ImageWithPositionResponse = {
  id: string
  position: number
  imageUrl: string
}

export type ImageWithPositionCreateRequest = {
  id: string
  position: number
  base64ImageString: string
}

export type ImageWithPositionUpdateRequest = {
  id: string
  position: number
  base64ImageString: string | null
}
