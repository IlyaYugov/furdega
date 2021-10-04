import { Dispatch, FC, SetStateAction } from "react"
import { Col, Row, Button } from "react-bootstrap"

import { AdminSectionMode } from "../../../../const/admin"
import { MainHomeSectionResponse } from "../../../../types/main-home-section"

type ViewProps = {
  data: MainHomeSectionResponse | null
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const View: FC<ViewProps> = ({ data, setMode }) => {
  if (!data)
    return (
      <Button
        size="lg"
        onClick={() => {
          setMode(AdminSectionMode.edit)
        }}
      >
        Создать
      </Button>
    )

  const { header, image } = data

  return (
    <Row className="flex-column gy-3">
      <Col>
        <h5>Заголовок</h5>
        <div>{header}</div>
      </Col>

      <Col>
        <h5>Изображение</h5>
        <img
          src={image.imageUrl}
          alt={image.imageUrl}
          className="img-fluid w-100"
        />
      </Col>

      <Col className="d-flex justify-content-end">
        <Button
          size="lg"
          onClick={() => {
            setMode(AdminSectionMode.edit)
          }}
        >
          Редактировать
        </Button>
      </Col>
    </Row>
  )
}

export { View }