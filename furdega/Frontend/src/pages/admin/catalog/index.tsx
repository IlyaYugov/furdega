import { FC, useEffect, useState } from "react"
import { Col, Nav, Row, Tab, Button } from "react-bootstrap"

import { materialsApi } from "../../../api/materials-api"
import {
  Material,
  MaterialCreateRequest,
  MaterialSimple,
} from "../../../types/material"
import { Edit } from "./edit"
import { View } from "../material-brands/view"
import { AdminSectionMode } from "../../../const/admin"
import { Create } from "./create"

export type MaterialData = MaterialSimple &
  Pick<Material, "description" | "mainImage">

const Catalog: FC = () => {
  const [mode, setMode] = useState<AdminSectionMode>(AdminSectionMode.view)

  const [materialData, setMaterialData] = useState<MaterialData | null>(null)
  const [materials, setMaterials] = useState<MaterialSimple[]>([])

  const fetchMaterials = async () => {
    const data = await materialsApi.getAll()
    setMaterials(data)
    return data
  }

  const getMaterialById = async (id: number): Promise<Material> => {
    const data = await materialsApi.getById(id)
    return data
  }

  const createNewMaterial = async (request: MaterialCreateRequest) => {
    await materialsApi.create(request)
  }

  const fetchMaterialDataByMaterialSimple = async (m: MaterialSimple) => {
    const material = await getMaterialById(m.id)

    setMaterialData({
      ...material,
      previewImage: m.previewImage,
    })
  }

  useEffect(() => {
    fetchMaterials()
  }, [])

  const renderContent = () => {
    if (!materialData) return

    switch (mode) {
      case AdminSectionMode.view:
        return <View data={materialData} setMode={setMode} />
      case AdminSectionMode.edit:
        return <Edit data={materialData} setMode={setMode} />
      default:
      case AdminSectionMode.create:
        return null
    }
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
                    fetchMaterialDataByMaterialSimple(m)
                  }}
                >
                  {m.title}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item className="mt-4">
              <Button
                variant="outline-dark"
                onClick={async () => {
                  setMode(AdminSectionMode.create)
                }}
              >
                Добавить материал
              </Button>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          {renderContent()}

          <Create
            show={mode === AdminSectionMode.create}
            submit={async (request) => {
              await createNewMaterial(request)
              setMode(AdminSectionMode.view)
              const newMaterials = await fetchMaterials()
              fetchMaterialDataByMaterialSimple(
                newMaterials[newMaterials.length - 1]
              )
            }}
            close={() => {
              setMode(AdminSectionMode.view)
            }}
          />
        </Col>
      </Row>
    </Tab.Container>
  )
}

export { Catalog }
