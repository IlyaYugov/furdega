import { FC } from "react"
import LazyLoad from "react-lazyload"
import { Row, Col } from "react-bootstrap"

import { RoundedButton } from "../../../../components/rounded-button/rounded-button"

import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"
import { IssueSolutionsSection } from "../../../../types/home/issue-solutions-section"

const Solutions: FC<IssueSolutionsSection> = ({ header, issueSolutions }) => {
  return (
    <>
      <Row className="g-0 justify-content-center">
        <Col md={8}>
          <h2 className="text-white">{header}</h2>
        </Col>
      </Row>

      <Row className="g-0 my-5">
        <Col md={8} className="position-relative" style={{ height: "53px" }}>
          <YellowSnakeIcon className="position-absolute" style={{ right: 0 }} />
        </Col>
        <Col md={4}></Col>
      </Row>

      <Row className="g-0">
        <Col md={4}></Col>
        <Col md={8}>
          <h3 className="text-primary">{issueSolutions[0].title}</h3>
        </Col>
      </Row>

      <div className="mt-5">
        <LazyLoad height={500}>
          <img
            className="img-fluid w-100"
            src={issueSolutions[0].imageUrl}
            alt={issueSolutions[0].imageUrl}
          />
        </LazyLoad>
      </div>

      <Row className="g-0 mt-5">
        <Col xs={0} lg={4}></Col>
        <Col xs={12} lg={8}>
          <Row className="g-4 flex-column flex-sm-row flex-nowrap">
            <Col className="text-white">{issueSolutions[0].description}</Col>
            <Col>
              <RoundedButton>бесплатная консультация</RoundedButton>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="g-0 my-5">
        <Col md={4}></Col>
        <Col md={8} className="position-relative" style={{ height: "53px" }}>
          <YellowSnakeIcon className="position-absolute" style={{ left: 0 }} />
        </Col>
      </Row>

      <Row className="g-0">
        <Col md={4}></Col>
        <Col md={8}>
          <h3 className="text-primary">{issueSolutions[1].title}</h3>
        </Col>
      </Row>

      <div className="mt-5">
        <LazyLoad height={500}>
          <img
            className="img-fluid w-100"
            src={issueSolutions[1].imageUrl}
            alt={issueSolutions[1].imageUrl}
          />
        </LazyLoad>
      </div>

      <Row className="g-0 mt-5">
        <Col xs={12} lg={8}>
          <Row className="g-4 flex-column-reverse flex-sm-row flex-nowrap">
            <Col>
              <RoundedButton type="secondary">
                бесплатная консультация
              </RoundedButton>
            </Col>
            <Col className="text-white">{issueSolutions[1].description}</Col>
          </Row>
        </Col>
        <Col xs={0} lg={4}></Col>
      </Row>

      <Row className="g-0 my-5">
        <Col md={8} className="position-relative" style={{ height: "53px" }}>
          <YellowSnakeIcon className="position-absolute" style={{ right: 0 }} />
        </Col>
        <Col md={4}></Col>
      </Row>
    </>
  )
}

export default Solutions
