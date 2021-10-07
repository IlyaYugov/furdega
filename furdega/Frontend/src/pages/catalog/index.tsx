import { Col, Container, Row } from "react-bootstrap"
import { FC, useEffect, useState } from "react"

import { materialsApi } from "../../api/materials-api"
import { MaterialSimple } from "../../types/material"
import styles from "./catalog.module.scss"
import { Nav } from "./nav"

const Catalog: FC = () => {
  const [materials, setMaterials] = useState<MaterialSimple[]>([])

  const fetchMaterials = async () => {
    const data = await materialsApi.getAll()
    setMaterials(data)
  }

  useEffect(() => {
    fetchMaterials()
  }, [])

  return (
    <>
      <Container className={`g-0 ${styles["title-container"]}`}>
        <div
          className={`d-flex justify-content-sm-start justify-content-center ${styles["title-wrapper"]}`}
        >
          <h1 className={`text-dark ${styles.title}`}>Каталог</h1>
        </div>
      </Container>

      <Container className="g-0 content overflow-hidden">
        <Row className="flex-nowrap py-5 g-0 bg-light">
          <Col className="scrollspy-col" sm={4} md={4} lg={3}>
            <Nav materials={materials} />
          </Col>

          <Col xs={12} sm={8} md={8} lg={9} className="px-3 ps-sm-5"></Col>
        </Row>
      </Container>
    </>
  )
}

export { Catalog }
