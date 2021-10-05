import { FC } from "react"
import { Row, Col } from "react-bootstrap"
import LazyLoad from "react-lazyload"

import { ReactComponent as YellowSnakeIcon } from "../../../assets/svg/yellow-snake.svg"
import { RoundedButton } from "../../../components/rounded-button"
import { IssueSolutionResponse } from "../../../types/home/solutions"

type SolutionBlockProps = {
  data: IssueSolutionResponse | null
}

const SolutionBlock: FC<SolutionBlockProps> = ({ data }) => {
  return (
    <>
      <Row className="g-0">
        <Col md={4}></Col>
        <Col md={8}>
          <h3 className="text-primary">{data?.title || ""}</h3>
        </Col>
      </Row>

      <div className="mt-5">
        <LazyLoad height={500}>
          <img className="img-fluid w-100" src={data?.image?.imageUrl} alt="" />
        </LazyLoad>
      </div>

      <Row className="g-0 mt-5">
        <Col xs={0} lg={4}></Col>
        <Col xs={12} lg={8}>
          <Row className="g-4 flex-column flex-sm-row flex-nowrap">
            <Col className="text-white">{data?.description || ""}</Col>
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
    </>
  )
}

export { SolutionBlock }
