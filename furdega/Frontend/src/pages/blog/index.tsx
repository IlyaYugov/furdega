import { FC } from "react"
import { Col, Container, Row } from "react-bootstrap"

import { ReactComponent as ArrowIcon } from "../../assets/svg/arrow-long-right.svg"
import { tags, topBlog } from "../../const/blog"

const Blog: FC = () => {
  return (
    <Container fluid className="g-0 my-5 py-4">
      <Container className="g-0 content">
        <Row className="flex-column-reverse flex-md-row">
          <Col xs={12} md={5} lg={4} className="pe-5">
            <Row className="flex-column gy-4">
              <Col>
                <Row
                  xs="auto"
                  className="justify-content-between border-bottom py-4"
                >
                  <Col>
                    <ArrowIcon />
                  </Col>
                  <Col className="fw-bold">Фильтр</Col>
                </Row>
              </Col>

              <Col>
                <div className="fw-bold">Теги:</div>
              </Col>

              <Col>
                <Row xs="auto" className="g-2">
                  {tags.map((t) => (
                    <Col>
                      <div className="border py-2 px-3 opacity-75">{t}</div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={7} lg={8} className="ps-5">
            <h6 className="opacity-75 mt-4">ГЛАВНОЕ ЗА НЕДЕЛЮ</h6>

            <h1 className="my-5">{topBlog.title}</h1>

            <Row xs="auto" className="gx-5 mb-5">
              <Col className="fw-demibold">читать</Col>
              <Col>
                <ArrowIcon style={{ transform: "rotate(180deg)" }} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export { Blog }
