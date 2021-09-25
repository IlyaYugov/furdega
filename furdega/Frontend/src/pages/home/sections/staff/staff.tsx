import { FC } from "react"
import styles from "../../home.module.scss"
import LazyLoad from "react-lazyload"
import { Row, Col } from "react-bootstrap"

const Staff: FC = () => {
  return (
    <>
      <h2 className={styles["block-title"]}>
        Наша команда современных ремеслиников своего дела
      </h2>

      <div className={styles["block-content"]}>
        <Row className="flex-column gy-5">
          <Col>
            <Row className="justify-items-between">
              <Col xs={5}>
                <LazyLoad height={479}>
                  <img
                    className="img-fluid w-100"
                    src="/images/naruto.jpg"
                    alt="naruto.jpg"
                  />
                </LazyLoad>
              </Col>
              <Col xs={5} className="d-flex flex-column justify-content-end">
                <h4 className="fw-bold">Алексей Волохин</h4>
                <small className="d-block mt-3">Более 10 лет опыта</small>
                <small className="d-block">Лучший в своей сфере</small>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row className="flex-row-reverse justify-items-between">
              <Col xs={5}>
                <LazyLoad height={479}>
                  <img
                    className="img-fluid w-100"
                    src="/images/naruto.jpg"
                    alt="naruto.jpg"
                  />
                </LazyLoad>
              </Col>
              <Col xs={5} className="d-flex flex-column justify-content-end">
                <h4 className="fw-bold">Алексей Волохин</h4>
                <small className="d-block mt-3">Более 10 лет опыта</small>
                <small className="d-block">Лучший в своей сфере</small>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row className="justify-items-between">
              <Col xs={5}>
                <LazyLoad height={479}>
                  <img
                    className="img-fluid w-100"
                    src="/images/naruto.jpg"
                    alt="naruto.jpg"
                  />
                </LazyLoad>
              </Col>
              <Col xs={5} className="d-flex flex-column justify-content-end">
                <h4 className="fw-bold">Алексей Волохин</h4>
                <small className="d-block mt-3">Более 10 лет опыта</small>
                <small className="d-block">Лучший в своей сфере</small>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row className="flex-row-reverse justify-items-between">
              <Col xs={5}>
                <LazyLoad height={479}>
                  <img
                    className="img-fluid w-100"
                    src="/images/naruto.jpg"
                    alt="naruto.jpg"
                  />
                </LazyLoad>
              </Col>
              <Col xs={5} className="d-flex flex-column justify-content-end">
                <h4 className="fw-bold">Алексей Волохин</h4>
                <small className="d-block mt-3">Более 10 лет опыта</small>
                <small className="d-block">Лучший в своей сфере</small>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Staff
