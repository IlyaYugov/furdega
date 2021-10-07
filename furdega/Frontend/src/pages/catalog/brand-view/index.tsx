import { FC } from "react"
import { Col, Image, Row } from "react-bootstrap"

import styles from "../catalog.module.scss"
import { ReactComponent as YellowSnakeIcon } from "../../../assets/svg/yellow-snake.svg"
import { MaterialBrand } from "../../../types/material-brand"

type BrandViewProps = MaterialBrand

const BrandView: FC<BrandViewProps> = ({ title, mainImage, images }) => {
  const renderImages = () => {
    let prevStep = -3
    let prevNextStep = -2

    return images.map((image, index) => {
      let addGutter = false

      if (index === prevStep + 4) {
        prevStep = index
        addGutter = true
      }

      if (index === prevNextStep + 4) {
        prevNextStep = index
        addGutter = true
      }

      return (
        <>
          {addGutter ? <Col className="d-none d-sm-block" xs={1}></Col> : null}
          <Col xs={6} sm={5}>
            <Image fluid src={image.imageUrl} className="mb-3" />
          </Col>
          {addGutter ? <Col className="d-none d-sm-block" xs={1}></Col> : null}
        </>
      )
    })
  }

  return (
    <>
      <Row xs="auto" className="g-0 mb-5 flex-nowrap">
        <Col>
          <span className={styles["content-title"]}>{title}</span>
        </Col>
        <Col className="position-relative">
          <YellowSnakeIcon className={styles["content-title-spring"]} />
        </Col>
      </Row>
      <Row></Row>

      <Row className="mb-5">
        <Image fluid src={mainImage.imageUrl} />
      </Row>

      <Row className={`g-0 ${styles.container}`}>{renderImages()}</Row>
    </>
  )
}

export { BrandView }
