import { FC, useEffect, useState } from "react"
import { Col, Nav, Row, Tab, Button, Image } from "react-bootstrap"

import { ReactComponent as YellowSnakeIcon } from "../../../assets/svg/yellow-snake.svg"
import { FurEditCreate } from "./fur-edit-create"
import { furnitureTypesApi } from "../../../api/furniture-types-api"
import {
  Furniture,
  FurnitureCreateRequest,
  FurnitureType,
  FurnitureUpdateRequest,
} from "../../../types/furniture"
import { furnituresApi } from "../../../api/furnitures-api"
import { TypeEditCreate } from "./type-edit-create"
import { getDefaultImage } from "../../../utils/get-default-image"

export type FurnitureData = FurnitureType & { items: Furniture[] }

export const NEW_TYPE_ID = -1

export const NEW_FUR_ID = -1

const newType: FurnitureType = {
  id: NEW_TYPE_ID,
  title: "",
}

const getNewFur = (typeId: number): Furniture => ({
  id: NEW_FUR_ID,
  furnitureTypeId: typeId,
  beforeImage: getDefaultImage(),
  afterImage: getDefaultImage(),
})

const Portfolio: FC = () => {
  const [furnitureType, setFurnitureType] = useState<FurnitureType | null>(null)
  const [furnitureTypes, setFurnitureTypes] = useState<FurnitureType[]>([])

  const [furnitures, setFurnitures] = useState<Furniture[]>([])

  const [isTypeEditCreate, setIsTypeEditCreate] = useState<boolean>(false)
  const [typeEditCreate, setTypeEditCreate] = useState<FurnitureType>(newType)

  const [isFurEditCreate, setIsFurEditCreate] = useState<boolean>(false)
  const [furEditCreate, setFurEditCreate] = useState<Furniture>(
    getNewFur(NEW_TYPE_ID)
  )

  const fetchFurnitureTypes = async () => {
    const newFurnitureTypes = await furnitureTypesApi.get()
    setFurnitureTypes(newFurnitureTypes)
    return newFurnitureTypes
  }

  const fetchFurnituresByTypeId = async (furnitureTypeId?: number) => {
    const newFurnitures = await furnituresApi.getByFurnitureTypeId(
      furnitureTypeId
    )
    setFurnitures(newFurnitures)
  }

  const onTypeEditCreateSubmit = async (request: FurnitureType) => {
    if (request.id === NEW_TYPE_ID) {
      await furnitureTypesApi.create(request)
      const newFurnitures = await fetchFurnitureTypes()
      fetchFurnituresByTypeId(newFurnitures[newFurnitures.length - 1].id)
    } else {
      await furnitureTypesApi.update(request.id, request)
      fetchFurnituresByTypeId(furnitureType?.id)
    }

    setIsTypeEditCreate(false)
  }

  const onFurCreateSubmit = async (request: FurnitureCreateRequest) => {
    await furnituresApi.create(request)
    await fetchFurnituresByTypeId(furnitureType?.id)
    setIsFurEditCreate(false)
  }

  const onFurEditSubmit = async (
    furId: number,
    request: FurnitureUpdateRequest
  ) => {
    await furnituresApi.update(furId, request)
    await fetchFurnituresByTypeId(furnitureType?.id)
    setIsFurEditCreate(false)
  }

  const onFurDelete = async (id: number) => {
    await furnituresApi.delete(id)
    fetchFurnituresByTypeId(furnitureType?.id)
  }

  useEffect(() => {
    fetchFurnitureTypes()
  }, [])

  return (
    <Tab.Container>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            {furnitureTypes.map((t) => (
              <Nav.Item key={`fur-type-nav-${t.id}`}>
                <Nav.Link
                  active={furnitureType?.id === t.id}
                  onClick={() => {
                    setFurnitureType(t)
                    fetchFurnituresByTypeId(t.id)
                  }}
                >
                  {t.title}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item className="mt-4">
              <Button
                variant="outline-dark"
                onClick={async () => {
                  setTypeEditCreate(newType)
                  setIsTypeEditCreate(true)
                }}
              >
                Добавить тип мебели
              </Button>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          {furnitureType && (
            <Row className="flex-column gy-3">
              <Col>
                <h4 className="fw-bold">Тип мебели</h4>
                <div>{furnitureType.title}</div>
              </Col>

              <Col>
                <YellowSnakeIcon />
              </Col>

              <Col>
                <h4 className="fw-bold">Примеры работ</h4>

                {furnitures.map((f) => (
                  <Row key={`fur-${f.id}`}>
                    <Row className="mt-4">
                      <Col>
                        <div className="fw-bold">До</div>
                        <Image fluid src={f.beforeImage.imageUrl} />
                      </Col>

                      <Col>
                        <div className="fw-bold">После</div>
                        <Image fluid src={f.afterImage.imageUrl} />
                      </Col>
                    </Row>

                    <Row xs="auto">
                      <Col>
                        <Button
                          onClick={() => {
                            setFurEditCreate(f)
                            setIsFurEditCreate(true)
                          }}
                        >
                          Редактировать
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          variant="secondary"
                          onClick={() => {
                            onFurDelete(f.id)
                          }}
                        >
                          Удалить
                        </Button>
                      </Col>
                    </Row>
                  </Row>
                ))}

                <Button
                  className="mt-5"
                  onClick={() => {
                    setIsFurEditCreate(true)
                    setFurEditCreate(getNewFur(furnitureType.id))
                  }}
                >
                  Добавить
                </Button>
              </Col>
            </Row>
          )}

          <FurEditCreate
            show={isFurEditCreate}
            fur={furEditCreate}
            type={furnitureType}
            onCreate={onFurCreateSubmit}
            onUpdate={onFurEditSubmit}
            close={() => {
              setIsFurEditCreate(false)
            }}
          />

          <TypeEditCreate
            show={isTypeEditCreate}
            type={typeEditCreate}
            close={() => {
              setIsTypeEditCreate(false)
            }}
            onSubmit={onTypeEditCreateSubmit}
          />
        </Col>
      </Row>
    </Tab.Container>
  )
}

export { Portfolio }
