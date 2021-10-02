import { FC } from "react"
import { Row, Col } from "react-bootstrap"
import LazyLoad from "react-lazyload"

import { WorkingProcessSectionResponse } from "../../../types/working-process-section"

import styles from "./process.module.scss"

const Process: FC<WorkingProcessSectionResponse> = ({
  header,
  firstStage,
  secondStage,
  thirdStage,
  finalStage,
}) => {
  return (
    <>
      <h2 className="block-title">{header}</h2>

      <div className="block-content">
        <Row>
          <Col xs={6}>
            <div className="d-flex">
              <h3 className={styles["step-title"]}>Первый этап</h3>
            </div>

            <div className="mt-3">
              <small>{firstStage}</small>
            </div>
          </Col>

          <Col xs={6}></Col>
        </Row>

        <Row>
          <Col xs={6}></Col>
          <Col xs={6}>
            <div className="d-flex">
              <h3 className={styles["step-title"]}>Второй шаг</h3>
            </div>

            <div className="mt-3">
              <small>{secondStage}</small>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <div className="d-flex">
              <h3 className={styles["step-title"]}>Третий шаг</h3>
            </div>

            <div className="mt-3">
              <small>{thirdStage}</small>
            </div>
          </Col>

          <Col xs={6}></Col>
        </Row>

        <Row>
          <Col xs={6}></Col>

          <Col xs={6}>
            <div className="d-flex">
              <h3 className={styles["step-title"]}>Все готово</h3>
            </div>

            <div className="mt-3">
              <small>{finalStage}</small>
            </div>
          </Col>
        </Row>

        <div className="mt-5">
          <LazyLoad height={1029}>
            <img
              className="img-fluid w-100"
              src="/assets/separator-subtle.png"
              alt="/assets/separator-subtle.png"
            />
          </LazyLoad>
        </div>
      </div>
    </>
  )
}

export { Process }
