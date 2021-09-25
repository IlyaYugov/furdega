import { FC } from "react"
import styles from "../../home.module.scss"
import benefitsStyles from "./benefits.module.scss"
import LazyLoad from "react-lazyload"
import { Row, Col } from "react-bootstrap"

type BenefitProps = {
  imgSrc: string
  title: string
  subTitle: string
  imgClassName?: string
}

const Benefit: FC<BenefitProps> = ({
  imgSrc,
  title,
  subTitle,
  imgClassName = "",
}) => {
  return (
    <>
      <div className={imgClassName}>
        <LazyLoad height={512}>
          <img className="img-fluid w-100" src={imgSrc} alt={imgSrc} />
        </LazyLoad>
      </div>

      <div className="mt-2 mt-md-5">
        <h4 className="fw-bold">{title}</h4>
        <small className="mt-3">{subTitle}</small>
      </div>
    </>
  )
}

const Benefits: FC = () => {
  return (
    <>
      <h2 className={styles["block-title"]}>
        Наши ключевые преимущества которые делают нас лучшими
      </h2>
      <div>
        <Row className="g-0 flex-nowrap justify-content-evenly flex-column flex-md-row">
          <Col xs={6} md={5} xl={4} className="d-none d-md-block">
            <Row className="flex-column gy-5">
              <Col>
                <Benefit
                  imgSrc="/images/unnamed.png"
                  title={"Опыт"}
                  subTitle={"Более 10 лет работаем и любим то, чем занимаемся"}
                />
              </Col>

              <Col>
                <Benefit
                  imgSrc="/images/unnamed.png"
                  title={"Опыт"}
                  subTitle={"Более 10 лет работаем и любим то, чем занимаемся"}
                />
              </Col>
            </Row>
          </Col>

          <Col xs={6} md={5} xl={4} className="d-none d-md-block">
            <Row className="flex-column gy-5">
              <Col>
                <Benefit
                  imgSrc="/images/unnamed.png"
                  title={"Опыт"}
                  subTitle={"Более 10 лет работаем и любим то, чем занимаемся"}
                  imgClassName={benefitsStyles["moved-column-pic"]}
                />
              </Col>

              <Col>
                <Benefit
                  imgSrc="/images/unnamed.png"
                  title={"Опыт"}
                  subTitle={"Более 10 лет работаем и любим то, чем занимаемся"}
                />
              </Col>
            </Row>
          </Col>

          <Col xs={12} className="d-block d-md-none">
            <Row>
              <Col xs={6}>
                <Benefit
                  imgSrc="/images/unnamed.png"
                  title={"Опыт"}
                  subTitle={"Более 10 лет работаем и любим то, чем занимаемся"}
                />
              </Col>
              <Col xs={6}></Col>
            </Row>
          </Col>

          <Col xs={12} className="d-block d-md-none">
            <Row>
              <Col xs={6}></Col>
              <Col xs={6}>
                <Benefit
                  imgSrc="/images/unnamed.png"
                  title={"Опыт"}
                  subTitle={"Более 10 лет работаем и любим то, чем занимаемся"}
                />
              </Col>
            </Row>
          </Col>

          <Col xs={12} className="d-block d-md-none">
            <Row>
              <Col xs={6}>
                <Benefit
                  imgSrc="/images/unnamed.png"
                  title={"Опыт"}
                  subTitle={"Более 10 лет работаем и любим то, чем занимаемся"}
                />
              </Col>
              <Col xs={6}></Col>
            </Row>
          </Col>

          <Col xs={12} className="d-block d-md-none">
            <Row>
              <Col xs={6}></Col>
              <Col xs={6}>
                <Benefit
                  imgSrc="/images/unnamed.png"
                  title={"Опыт"}
                  subTitle={"Более 10 лет работаем и любим то, чем занимаемся"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Benefits
