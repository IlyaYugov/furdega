import { Col, Container, Row } from "react-bootstrap"
import { FC, useEffect, useState } from "react"

import { PortfolioSection } from "./portfolio-section"
import { Scrollspy } from "../../components/scrollspy/scrollspy"
import { furnitureTypeApi } from "../../api/furniture-type-api"
import { FurnitureType } from "../../types/furniture-type"
import { ScrollspyAnchor } from "../../types/scrollspy-anchor"

import styles from "./portfolio.module.scss"

const mapFurTypesToScrollspyAnchors = (
  furTypes: FurnitureType[]
): ScrollspyAnchor[] =>
  furTypes.map((t) => ({ id: String(t.id), name: t.title }))

const Portfolio: FC = () => {
  const [furnitureTypes, setFurnitureTypes] = useState<FurnitureType[]>([])
  const [scrollspyAnchors, setScrollspyAnchors] = useState<ScrollspyAnchor[]>(
    []
  )

  const fetchFurnitureTypes = async () => {
    const data = await furnitureTypeApi.getTypes()
    setFurnitureTypes(data)
  }

  useEffect(() => {
    fetchFurnitureTypes()
  }, [])

  useEffect(() => {
    setScrollspyAnchors(mapFurTypesToScrollspyAnchors(furnitureTypes))
  }, [furnitureTypes])

  return (
    <>
      <Container className={`g-0 ${styles["title-container"]}`}>
        <img
          src="/images/portfolio-top-pic.jpg"
          alt="/images/portfolio-top-pic.jpg"
          width="1440"
          height="460"
        />
        <div
          className={`d-flex justify-content-sm-start justify-content-center ${styles["title-wrapper"]}`}
        >
          <h1 className={`text-white ${styles.title}`}>Портфолио</h1>
        </div>
      </Container>

      <Container className="g-0 content overflow-hidden">
        <Row className="flex-nowrap py-5 g-0 bg-light">
          <Col className="scrollspy-col" sm={4} md={4} lg={3}>
            <Scrollspy shown={true} anchors={scrollspyAnchors} />
          </Col>

          <Col xs={12} sm={8} md={8} lg={9} className="px-3 ps-sm-5">
            <PortfolioSection title={"Все работы"} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export { Portfolio }
