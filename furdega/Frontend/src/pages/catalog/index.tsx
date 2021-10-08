import { Col, Container, Row } from "react-bootstrap"
import { FC, useEffect, useState } from "react"

import { materialsApi } from "../../api/materials-api"
import { Material, MaterialSimple } from "../../types/material"
import { Nav } from "./nav"
import { MaterialBrand, MaterialBrandSimple } from "../../types/material-brand"
import { materialBrandsApi } from "../../api/material-brands-api"
import { BrandView } from "./brand-view"
import { AllView } from "./all-view"
import { MaterialView } from "./material-view"
import { Title } from "../../components/title"
import { PageHeader } from "../../components/page-header"

export type MaterialData = Material & { brands: MaterialBrandSimple[] }

const Catalog: FC = () => {
  const [materials, setMaterials] = useState<MaterialSimple[]>([])
  const [activeMaterialId, setActiveMaterialId] = useState<number>(-1)
  const [activeBrandId, setActiveBrandId] = useState<number>(-1)
  const [materialData, setMaterialData] = useState<MaterialData | null>(null)
  const [brand, setBrand] = useState<MaterialBrand | null>(null)
  const [contentVisible, setContentVisible] = useState<boolean>(true)

  const fetchMaterials = async () => {
    const newMaterials = await materialsApi.getAll()
    setMaterials(newMaterials)
  }

  const onMaterialClick = async (materialId: number) => {
    if (materialId === -1) {
      if (activeMaterialId !== -1) {
        setContentVisible(false)
        setTimeout(() => {
          setActiveMaterialId(materialId)
          setContentVisible(true)
        }, 200)
      }

      return
    }

    setContentVisible(false)

    const [materialResponse, brandsResponse] = await Promise.all([
      materialsApi.getById(materialId),
      materialsApi.getBrandsById(materialId),
    ])
    const newMaterialData = { ...materialResponse, brands: brandsResponse }

    setActiveMaterialId(materialId)
    setMaterialData(newMaterialData)
    setBrand(null)
    setActiveBrandId(-1)

    setContentVisible(true)
  }

  const onBrandClick = async (brandId: number) => {
    if (brandId === -1) {
      return
    }

    setContentVisible(false)

    const newBrand = await materialBrandsApi.getMaterialBrand(brandId)

    setBrand(newBrand)
    setActiveBrandId(brandId)

    setContentVisible(true)
  }

  useEffect(() => {
    fetchMaterials()
  }, [])

  const renderContent = () => {
    if (brand)
      return (
        <>
          <Title title={brand.title} />
          <BrandView {...brand} />
        </>
      )

    if (activeMaterialId === -1)
      return (
        <>
          <Title title="Все материалы" />
          <AllView materials={materials} onMaterialClick={onMaterialClick} />
        </>
      )

    if (materialData)
      return (
        <>
          <Title title={materialData.title} />
          <MaterialView {...materialData} onBrandClick={onBrandClick} />
        </>
      )

    return null
  }

  return (
    <Container fluid className="g-0">
      <PageHeader imageSrc="/assets/catalog-top-pic.jpg" title="Каталог" />

      <Container className="g-0 content overflow-hidden">
        <Row className="flex-nowrap py-5 g-0 bg-light">
          <Col className="scrollspy-col" sm={4} md={4} lg={3}>
            <Nav
              activeMaterialId={activeMaterialId}
              activeBrandId={activeBrandId}
              materials={materials}
              brands={materialData?.brands || []}
              onMaterialClick={onMaterialClick}
              onBrandClick={onBrandClick}
            />
          </Col>

          <Col
            xs={12}
            sm={8}
            md={8}
            lg={9}
            className={`px-3 ps-sm-5 fade-container ${
              contentVisible ? "loaded" : "unloaded"
            }`}
          >
            {renderContent()}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export { Catalog }
