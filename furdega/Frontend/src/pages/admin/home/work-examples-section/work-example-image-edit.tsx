import { FC } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { ImageResponse } from "../../../../types/image-response"
import { FormInputEvent } from "../../../../types/utils"
import { fileToBase64 } from "../../../../utils/fileToBase64"

type WorkExampleImageEditProps = {
  image: ImageResponse
  onChange: (newImage: ImageResponse, newImageBase64: string) => void
}

const WorkExampleImageEdit: FC<WorkExampleImageEditProps> = ({
  image,
  onChange,
}) => {
  const onImageChange = async (event: FormInputEvent) => {
    const files = (event.currentTarget as HTMLInputElement).files
    if (!files) return null

    const file = files[0]
    const fileUrl = URL.createObjectURL(file)
    const base64 = await fileToBase64(file)

    onChange({ ...image, imageUrl: fileUrl }, base64)
  }

  return (
    <Row className="flex-column gy-2">
      <Col>
        <img
          src={image?.imageUrl}
          alt={image?.imageUrl}
          className="img-fluid w-100"
        />
      </Col>

      <Col>
        <Form.Control
          type="file"
          accept=".jpeg, .jpg, .png"
          onChange={onImageChange}
        />
      </Col>
    </Row>
  )
}

export { WorkExampleImageEdit }
