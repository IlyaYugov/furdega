import { Col, Container, Row } from "react-bootstrap"
import { FC, useEffect, useState } from "react"

import { Scrollspy } from "../../components/scrollspy"
import { furnitureTypesApi } from "../../api/furniture-types-api"
import { FurnitureType } from "../../types/furniture"
import { ScrollspyAnchor } from "../../types/scrollspy-anchor"
import { Title } from "../../components/title"
import { PageHeader } from "../../components/page-header"

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
    const data = await furnitureTypesApi.get()
    setFurnitureTypes(data)
  }

  useEffect(() => {
    fetchFurnitureTypes()
  }, [])

  useEffect(() => {
    setScrollspyAnchors(mapFurTypesToScrollspyAnchors(furnitureTypes))
  }, [furnitureTypes])

  return (
    <Container fluid className="g-0">
      <PageHeader imageSrc="/assets/portfolio-top-pic.jpg" title="Портфолио" />

      <Container className="g-0 content overflow-hidden">
        <Row className="flex-nowrap py-5 g-0 bg-light">
          <Col className="scrollspy-col" sm={4} md={4} lg={3}>
            <Scrollspy shown={true} anchors={scrollspyAnchors} />
          </Col>

          <Col xs={12} sm={8} md={8} lg={9} className="px-3 ps-sm-5">
            <Title title="Все материалы" />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export { Portfolio }
