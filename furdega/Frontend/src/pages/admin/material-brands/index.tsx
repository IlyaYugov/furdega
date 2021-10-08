import { FC, useEffect, useState } from "react"
import { Col, Nav, Row, Tab, Button } from "react-bootstrap"

import { materialsApi } from "../../../api/materials-api"
import { Edit } from "./edit"
import { View } from "./view"
import { AdminSectionMode } from "../../../const/admin"
import { Create } from "./create"
import {
  MaterialBrand,
  MaterialBrandCreateRequest,
  MaterialBrandSimple,
  MaterialBrandUpdateRequest,
} from "../../../types/material-brand"
import { useParams } from "react-router"
import { materialBrandsApi } from "../../../api/material-brands-api"
import { Material } from "../../../types/material"

const MaterialBrands: FC = () => {
  const { materialId } = useParams<{ materialId: string }>()

  const [mode, setMode] = useState<AdminSectionMode>(AdminSectionMode.view)

  const [material, setMaterial] = useState<Material | null>(null)
  const [brand, setBrand] = useState<MaterialBrand | null>(null)
  const [brands, setBrands] = useState<MaterialBrandSimple[]>([])

  const fetchBrands = async () => {
    const data = await materialsApi.getBrandsById(Number(materialId))
    setBrands(data)
    return data
  }

  const fetchMaterial = async () => {
    const data = await materialsApi.getById(Number(materialId))
    setMaterial(data)
  }

  const createNewBrand = async (request: MaterialBrandCreateRequest) => {
    await materialBrandsApi.create(request)
  }

  const fetchBrandById = async (brandId: number) => {
    const brandResponse = await materialBrandsApi.getMaterialBrand(brandId)
    setBrand(brandResponse)
  }

  const onBrandDelete = async (id: number) => {
    await materialBrandsApi.delete(id)
    setBrand(null)
    setMode(AdminSectionMode.view)
    fetchBrands()
  }

  const onBrandUpdate = async (
    id: number,
    request: MaterialBrandUpdateRequest
  ) => {
    await materialBrandsApi.update(id, request)
    fetchBrandById(id)
    fetchBrands()
    setMode(AdminSectionMode.view)
  }

  useEffect(() => {
    fetchMaterial()
    fetchBrands()
  }, [])

  const renderContent = () => {
    if (!brand) return

    switch (mode) {
      case AdminSectionMode.view:
        return <View data={brand} setMode={setMode} />
      case AdminSectionMode.edit:
        return (
          <Edit
            data={brand}
            setMode={setMode}
            onDelete={onBrandDelete}
            onUpdate={onBrandUpdate}
          />
        )
      default:
      case AdminSectionMode.create:
        return null
    }
  }

  return (
    <div>
      <h3>Бренды для материала "{material?.title}"</h3>

      <Tab.Container>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {brands.map((b) => (
                <Nav.Item>
                  <Nav.Link
                    active={brand?.id === b.id}
                    onClick={async () => {
                      fetchBrandById(b.id)
                    }}
                  >
                    {b.title}
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
                  Добавить бренд
                </Button>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={9}>
            {renderContent()}

            <Create
              show={mode === AdminSectionMode.create}
              materialId={Number(materialId)}
              submit={async (request) => {
                await createNewBrand(request)
                setMode(AdminSectionMode.view)
                const newBrands = await fetchBrands()
                fetchBrandById(newBrands[newBrands.length - 1].id)
              }}
              close={() => {
                setMode(AdminSectionMode.view)
              }}
            />
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export { MaterialBrands }
