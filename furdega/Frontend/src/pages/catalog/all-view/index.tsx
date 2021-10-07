import { FC } from "react"
import { Col, Image, Row } from "react-bootstrap"

import { MaterialSimple } from "../../../types/material"
import styles from "../catalog.module.scss"

type AllViewProps = {
  materials: MaterialSimple[]
  onMaterialClick: (materialId: number) => void
}

const AllView: FC<AllViewProps> = ({ materials, onMaterialClick }) => {
  const renderContent = () => {
    let prevStep = -3
    let prevNextStep = -2

    return materials.map((m, index) => {
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

          <Col
            xs={6}
            sm={5}
            className={styles.item}
            onClick={() => {
              onMaterialClick(m.id)
            }}
          >
            <Image fluid src={m.previewImage.imageUrl} className="mb-3" />
            <div className={styles["preview-title"]}>{m.title}</div>
          </Col>

          {addGutter ? <Col className="d-none d-sm-block" xs={1}></Col> : null}
        </>
      )
    })
  }

  return <Row className={`g-0 ${styles.container}`}>{renderContent()}</Row>
}

export { AllView }
