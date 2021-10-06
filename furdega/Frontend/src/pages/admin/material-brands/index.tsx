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
} from "../../../types/material-brand"
import { useParams } from "react-router"
import { materialBrandsApi } from "../../../api/material-brands-api"

export type BrandData = MaterialBrandSimple &
  Pick<MaterialBrand, "mainImage" | "images" | "materialId">

const MaterialBrands: FC = () => {
  const { materialId } = useParams<{ materialId: string }>()

  const [mode, setMode] = useState<AdminSectionMode>(AdminSectionMode.view)

  const [brandData, setBrandData] = useState<BrandData | null>(null)
  const [brands, setBrands] = useState<MaterialBrandSimple[]>([])

  const fetchBrands = async () => {
    const data = await materialsApi.getBrandsById(Number(materialId))
    setBrands(data)
    return data
  }

  const getBrandById = async (brandId: number): Promise<MaterialBrand> => {
    const data = await materialBrandsApi.getMaterialBrand(brandId)
    return data
  }

  const createNewBrand = async (request: MaterialBrandCreateRequest) => {
    await materialBrandsApi.create(request)
  }

  const fetchBrandDataByBrandSimple = async (b: MaterialBrandSimple) => {
    const material = await getBrandById(b.id)

    setBrandData({
      ...material,
      previewImage: b.previewImage,
    })
  }

  useEffect(() => {
    fetchBrands()
  }, [])

  const renderContent = () => {
    if (!brandData) return

    switch (mode) {
      case AdminSectionMode.view:
        return <View data={brandData} setMode={setMode} />
      case AdminSectionMode.edit:
        return <Edit data={brandData} setMode={setMode} />
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
            {brands.map((b) => (
              <Nav.Item>
                <Nav.Link
                  active={brandData?.id === b.id}
                  onClick={async () => {
                    fetchBrandDataByBrandSimple(b)
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
              fetchBrandDataByBrandSimple(newBrands[newBrands.length - 1])
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

export { MaterialBrands }
