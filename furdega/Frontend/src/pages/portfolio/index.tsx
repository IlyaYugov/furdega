import { Col, Container, Row } from "react-bootstrap"
import { FC, useEffect, useState } from "react"

import { furnitureTypesApi } from "../../api/furniture-types-api"
import { Furniture, FurnitureType } from "../../types/furniture"
import { Title } from "../../components/title"
import { PageHeader } from "../../components/page-header"
import { Nav } from "./nav"
import { furnituresApi } from "../../api/furnitures-api"
import { FurView } from "./fur-view"

export const defaultFurType: FurnitureType = {
  id: -1,
  title: "Все работы",
}

const Portfolio: FC = () => {
  const [furnitureType, setFurnitureType] =
    useState<FurnitureType>(defaultFurType)
  const [furnitureTypes, setFurnitureTypes] = useState<FurnitureType[]>([])
  const [furnitures, setFurnitures] = useState<Furniture[]>([])

  const fetchFurnitureTypes = async () => {
    const data = await furnitureTypesApi.get()
    setFurnitureTypes(data)
  }

  const fetchAllFurnitures = async () => {
    const data = await furnituresApi.get()
    setFurnitures(data)
  }

  const fetchFurnituresByTypeId = async (typeId: number) => {
    const data = await furnituresApi.getByFurnitureTypeId(typeId)
    setFurnitures(data)
  }

  useEffect(() => {
    fetchFurnitureTypes()
  }, [])

  useEffect(() => {
    if (furnitureType.id === defaultFurType.id) {
      fetchAllFurnitures()
      return
    }

    fetchFurnituresByTypeId(furnitureType.id)
  }, [furnitureType])

  return (
    <Container fluid className="g-0">
      <PageHeader imageSrc="/assets/portfolio-top-pic.jpg" title="Портфолио" />

      <Container className="g-0 content overflow-hidden">
        <Row className="flex-nowrap py-5 g-0 bg-light">
          <Col className="scrollspy-col" sm={4} md={4} lg={3}>
            <Nav
              items={furnitureTypes}
              activeItem={furnitureType}
              onItemClick={(type) => {
                setFurnitureType(type)
              }}
            />
          </Col>

          <Col xs={12} sm={8} md={8} lg={9} className="px-3 ps-sm-5">
            <Title title={furnitureType.title} />

            <Row className="flex-column gy-5">
              {furnitures.map((fur, index) => (
                <Col>
                  <FurView {...fur} index={index} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export { Portfolio }
