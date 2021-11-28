import { FC } from "react"
import { FormControl } from "react-bootstrap"
import { ImageUploadRules } from "../../types/image-upload"
import { FormInputEvent } from "../../types/utils"
import { fileToBase64 } from "../../utils/file-to-base64"
import { validateImageFile } from "../../utils/validate-image-file"

type ImageUploadProps = {
  onChange: (imageUrl: string, imageBase64: string) => unknown
  rules?: ImageUploadRules
}

const ImageUpload: FC<ImageUploadProps> = ({ onChange, rules }) => {
  const onImageChange = async (event: FormInputEvent) => {
    const files = (event.currentTarget as HTMLInputElement).files

    if (!files) return null

    const file = files[0]
    const isFileValid = rules ? await validateImageFile(file, rules) : true

    if (!isFileValid) return

    const fileUrl = URL.createObjectURL(file)
    const fileBase64 = await fileToBase64(file)

    onChange(fileUrl, fileBase64)
  }

  return (
    <FormControl
      type="file"
      accept=".jpeg, .jpg, .png, .webp, .gif, .mp4"
      onChange={onImageChange}
    />
  )
}

export { ImageUpload }
