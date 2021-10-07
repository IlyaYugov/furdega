import { FC } from "react"
import { Col, Image, Row } from "react-bootstrap"

import { MaterialSimple } from "../../../types/material"
import styles from "../catalog.module.scss"

type AllViewProps = {
  materials: MaterialSimple[]
}

const AllView: FC<AllViewProps> = ({ materials }) => {
  const renderContent = () => {
    let prevStep = -3

    return materials.map((m, index) => {
      let addGutter = false

      if (index === prevStep + 4) {
        prevStep = index
        addGutter = true
      }

      if (index === prevStep + 5) {
        addGutter = true
      }

      return (
        <>
          {addGutter ? <Col xs={1}></Col> : null}
          <Col xs={5}>
            <Image fluid src={m.previewImage.imageUrl} className="mb-3" />
            <div className={styles["preview-title"]}>{m.title}</div>
          </Col>
          {addGutter ? <Col xs={1}></Col> : null}
        </>
      )
    })
  }

  return <Row>{renderContent()}</Row>
}

export { AllView }
