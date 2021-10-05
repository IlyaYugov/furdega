import { FC } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { WorkExampleResponse } from "../../../types/home/examples"

import { WorkExampleImageBlock } from "./work-example-image-block"

type WorkExampleProps = {
  data: WorkExampleResponse | null
}

const WorkExample: FC<WorkExampleProps> = ({ data }) => {
  return (
    <Container className="g-0 pt-5">
      <Row>
        <Col sm={12} md={9} lg={8}>
          <Row className="flex-column gy-5 gx-0 mb-5">
            <Col>
              <h4 className="fw-bold">{data?.title || ""}</h4>
            </Col>

            <Col>
              <Row className="gx-3">
                <Col>
                  <div className="opacity-50">Тип мебели</div>
                  <div className="fs-medium fw-demibold">
                    {data?.furnitureType || ""}
                  </div>
                </Col>
                <Col>
                  <div className="opacity-50">Сроки</div>
                  <div className="fs-medium fw-demibold">
                    {data?.duration || ""}
                  </div>
                </Col>
                <Col>
                  <div className="opacity-50">Тип работы</div>
                  <div className="fs-medium fw-demibold">
                    {data?.workType || ""}
                  </div>
                </Col>
              </Row>
            </Col>

            <Col style={{ opacity: "0.8" }}>{data?.description || ""}</Col>
          </Row>
        </Col>
      </Row>

      <Row className="g-5 flex-column flex-xl-row justify-content-between">
        <WorkExampleImageBlock
          before
          image1={data?.beforeImage1 || null}
          image2={data?.beforeImage2 || null}
          image3={data?.beforeImage3 || null}
        />
        <WorkExampleImageBlock
          image1={data?.afterImage1 || null}
          image2={data?.afterImage2 || null}
          image3={data?.afterImage3 || null}
        />
      </Row>
    </Container>
  )
}

export { WorkExample }
