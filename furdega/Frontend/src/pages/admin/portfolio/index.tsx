import { FC, useEffect, useState } from "react"
import { Col, Nav, Row, Tab, Button } from "react-bootstrap"

import { materialsApi } from "../../../api/materials-api"
import {
  Material,
  MaterialCreateRequest,
  MaterialSimple,
  MaterialUpdateRequest,
} from "../../../types/material"
import { Edit } from "./edit"
import { View } from "./view"
import { AdminSectionMode } from "../../../const/admin"
import { Create } from "./create"

const Portfolio: FC = () => {
  const [mode, setMode] = useState<AdminSectionMode>(AdminSectionMode.view)

  const [material, setMaterial] = useState<Material | null>(null)
  const [materials, setMaterials] = useState<MaterialSimple[]>([])

  const fetchMaterials = async () => {
    const data = await materialsApi.getAll()
    setMaterials(data)
    return data
  }

  const createNewMaterial = async (request: MaterialCreateRequest) => {
    await materialsApi.create(request)
  }

  const updateMaterial = async (id: number, request: MaterialUpdateRequest) => {
    await materialsApi.update(id, request)
    fetchMaterialById(id)
    fetchMaterials()
    setMode(AdminSectionMode.view)
  }

  const fetchMaterialById = async (materialId: number) => {
    const data = await materialsApi.getById(materialId)
    setMaterial(data)
  }

  const onMaterialDelete = async (id: number) => {
    await materialsApi.delete(id)
    fetchMaterialById(id)
    setMode(AdminSectionMode.view)
    fetchMaterials()
  }

  useEffect(() => {
    fetchMaterials()
  }, [])

  const renderContent = () => {
    if (!material) return

    switch (mode) {
      case AdminSectionMode.view:
        return <View data={material} setMode={setMode} />
      case AdminSectionMode.edit:
        return (
          <Edit
            data={material}
            setMode={setMode}
            onUpdate={updateMaterial}
            onDelete={onMaterialDelete}
          />
        )
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
                  active={material?.id === m.id}
                  onClick={async () => {
                    fetchMaterialById(m.id)
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
              fetchMaterialById(newMaterials[newMaterials.length - 1].id)
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

export { Portfolio }
