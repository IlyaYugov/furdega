import { FC } from "react"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"
import LazyLoad from "react-lazyload"
import { Row, Col } from "react-bootstrap"
import { RoundedButton } from "../../../../components/rounded-button/rounded-button"

const Solutions: FC = () => {
  return (
    <>
      <Row className="g-0 justify-content-center">
        <Col md={8}>
          <h2 className="text-white">У нас есть решения самых сложных задач</h2>
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
          <h3 className="text-primary">Реставрация мебели</h3>
        </Col>
      </Row>

      <div className="mt-5">
        <LazyLoad height={500}>
          <img
            className="img-fluid w-100"
            src="/images/benefits-1.jpg"
            alt="benefits-1.jpg"
          />
        </LazyLoad>
      </div>

      <Row className="g-0 mt-5">
        <Col xs={0} lg={4}></Col>
        <Col xs={12} lg={8}>
          <Row className="g-4 flex-column flex-sm-row flex-nowrap">
            <Col className="text-white">
              Нужна реставрация мебели из за потери качества со временем или
              из-за конкретных повреждений
            </Col>
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
          <h3 className="text-primary">Антивандальная обивка</h3>
        </Col>
      </Row>

      <div className="mt-5">
        <LazyLoad height={500}>
          <img
            className="img-fluid w-100"
            src="/images/benefits-2.jpg"
            alt="benefits-2.jpg"
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
            <Col className="text-white">
              Необходимо перетянуть мебель в антивандальную обивку, чтобы
              защитить обивку от физических дефектов легкой степени.
            </Col>
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

      <Row className="g-0">
        <Col md={4}></Col>
        <Col md={8}>
          <h3 className="text-primary">Смена дизайна-интерьера</h3>
        </Col>
      </Row>

      <div className="mt-5">
        <LazyLoad height={500}>
          <img
            className="img-fluid w-100"
            src="/images/benefits-3.jpg"
            alt="benefits-3.jpg"
          />
        </LazyLoad>
      </div>

      <Row className="g-0 mt-5">
        <Col xs={0} lg={4}></Col>
        <Col xs={12} lg={8}>
          <Row className="g-4 flex-column flex-sm-row flex-nowrap">
            <Col className="text-white">
              Необходимо перетянуть мебель, потому что сменили дизайн-интерьер в
              квартире или переехали на новую, где дизайн отличается.
            </Col>
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
          <h3 className="text-primary">Аллергия на ткань</h3>
        </Col>
      </Row>

      <div className="mt-5">
        <LazyLoad height={500}>
          <img
            className="img-fluid w-100"
            src="/images/benefits-4.jpg"
            alt="benefits-4.jpg"
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
            <Col className="text-white">
              Необходимо сменить обивку на мебели, потому что аллергия на
              натуральный материал, либо эко-защитники.
            </Col>
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
