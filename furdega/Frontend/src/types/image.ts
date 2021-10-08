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
