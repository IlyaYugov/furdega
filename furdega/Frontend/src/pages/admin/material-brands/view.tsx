import { Dispatch, FC, SetStateAction } from "react"
import { Col, Row, Button, Image } from "react-bootstrap"

import { AdminSectionMode } from "../../../const/admin"
import { ReactComponent as YellowSnakeIcon } from "../../../assets/svg/yellow-snake.svg"
import { MaterialBrand } from "../../../types/material-brand"

type ViewProps = {
  data: MaterialBrand
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const View: FC<ViewProps> = ({ data, setMode }) => {
  const { title, mainImage, previewImage, images } = data

  return (
    <Row className="flex-column gy-3">
      <Col className="d-flex justify-content-end">
        <Button
          onClick={() => {
            setMode(AdminSectionMode.edit)
          }}
        >
          Редактировать
        </Button>
      </Col>

      <Col>
        <h4 className="fw-bold">Название бренда</h4>
        <div>{title}</div>
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <Row>
          <Col>
            <h4 className="fw-bold">Preview изображение</h4>
            <Image fluid src={previewImage.imageUrl} />
          </Col>

          <Col>
            <h4 className="fw-bold">Главное изображение</h4>
            <Image fluid src={mainImage.imageUrl} />
          </Col>
        </Row>
      </Col>

      <Col>
        <h4 className="fw-bold">Изображения</h4>

        <Row>
          {images.map((i) => (
            <Col xs={6}>
              <Image fluid src={i.imageUrl} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export { View }
