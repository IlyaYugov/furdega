import { Col, Container, Row, Image } from "react-bootstrap"
import { FC, useEffect, useState } from "react"

import { materialsApi } from "../../api/materials-api"
import { Material, MaterialSimple } from "../../types/material"
import styles from "./catalog.module.scss"
import { Nav } from "./nav"
import { MaterialBrand, MaterialBrandSimple } from "../../types/material-brand"
import { materialBrandsApi } from "../../api/material-brands-api"
import { BrandView } from "./brand-view"
import { AllView } from "./all-view"
import { MaterialView } from "./material-view"
import { Title } from "../../components/title"

export type MaterialData = Material & { brands: MaterialBrandSimple[] }

const Catalog: FC = () => {
  const [materials, setMaterials] = useState<MaterialSimple[]>([])
  const [activeMaterialId, setActiveMaterialId] = useState<number>(-1)
  const [activeBrandId, setActiveBrandId] = useState<number>(-1)
  const [materialData, setMaterialData] = useState<MaterialData | null>(null)
  const [brand, setBrand] = useState<MaterialBrand | null>(null)

  const fetchMaterials = async () => {
    const data = await materialsApi.getAll()
    setMaterials(data)
  }

  const onMaterialNavClick = async (materialId: number) => {
    setActiveMaterialId(materialId)
    setActiveBrandId(-1)
    setBrand(null)
  }

  const onBrandNavClick = async (brandId: number) => {
    setActiveBrandId(brandId)
  }

  const fetchMaterialDataByMaterialId = async (materialId: number) => {
    const materialResponse = await materialsApi.getById(materialId)
    const brandsResponse = await materialsApi.getBrandsById(activeMaterialId)

    setMaterialData({ ...materialResponse, brands: brandsResponse })
  }

  const fetchBrandByBrandId = async (brandId: number) => {
    const data = await materialBrandsApi.getMaterialBrand(brandId)
    setBrand(data)
  }

  useEffect(() => {
    if (activeMaterialId === -1) return
    fetchMaterialDataByMaterialId(activeMaterialId)
  }, [activeMaterialId])

  useEffect(() => {
    if (activeBrandId === -1) return
    fetchBrandByBrandId(activeBrandId)
  }, [activeBrandId])

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
          <AllView materials={materials} onMaterialClick={onMaterialNavClick} />
        </>
      )

    if (materialData)
      return (
        <>
          <Title title={materialData.title} />
          <MaterialView {...materialData} onBrandClick={onBrandNavClick} />
        </>
      )

    return null
  }

  return (
    <Container fluid className="g-0">
      <Container className={`g-0 ${styles["title-container"]}`}>
        <Image src="/assets/catalog-top-pic.jpg" width="1440" height="460" />
        <div
          className={`d-flex justify-content-sm-start justify-content-center ${styles["title-wrapper"]}`}
        >
          <h1 className={`text-white ${styles.title}`}>Каталог</h1>
        </div>
      </Container>

      <Container className="g-0 content overflow-hidden">
        <Row className="flex-nowrap py-5 g-0 bg-light">
          <Col className="scrollspy-col" sm={4} md={4} lg={3}>
            <Nav
              activeMaterialId={activeMaterialId}
              activeBrandId={activeBrandId}
              materials={materials}
              brands={materialData?.brands || []}
              onMaterialClick={onMaterialNavClick}
              onBrandClick={onBrandNavClick}
            />
          </Col>

          <Col xs={12} sm={8} md={8} lg={9} className="px-3 ps-sm-5">
            {renderContent()}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export { Catalog }
