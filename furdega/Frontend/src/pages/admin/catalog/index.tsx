import { FC, useEffect, useState } from "react"
import { Col, Nav, Row, Tab, Button } from "react-bootstrap"
import { materialsApi } from "../../../api/materials-api"
import {
  Material as MaterialType,
  MaterialSimple,
} from "../../../types/material"
import { Material } from "./material"

export type MaterialData = MaterialType & Pick<MaterialSimple, "previewImage">

const Catalog: FC = () => {
  const [materialData, setMaterialData] = useState<MaterialData | null>(null)
  const [materials, setMaterials] = useState<MaterialSimple[]>([])
  const [isMaterialCreate, setIsMaterialCreate] = useState<boolean>(false)

  const fetchMaterials = async () => {
    const data = await materialsApi.getMaterials()
    setMaterials(data)
  }

  const getMaterialById = async (id: number): Promise<MaterialType> => {
    const data = await materialsApi.getMaterialById(id)
    return data
  }

  useEffect(() => {
    fetchMaterials()
  }, [])

  const renderContent = () => {
    if (isMaterialCreate) {
      return <Material create />
    }

    if (materialData) {
      return <Material data={materialData} />
    }

    return null
  }

  return (
    <Tab.Container>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            {materials.map((m) => (
              <Nav.Item>
                <Nav.Link
                  active={materialData?.id === m.id}
                  onClick={async () => {
                    const material = await getMaterialById(m.id)
                    setMaterialData({
                      ...material,
                      previewImage: m.previewImage,
                    })
                  }}
                >
                  {m.title}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item>
              <Button
                variant="outline-dark"
                onClick={async () => {
                  setIsMaterialCreate(true)
                }}
              >
                Добавить материал
              </Button>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>{renderContent()}</Col>
      </Row>
    </Tab.Container>
  )
}

export { Catalog }
