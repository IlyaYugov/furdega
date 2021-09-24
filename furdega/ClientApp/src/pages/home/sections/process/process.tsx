import { FC } from "react"
import styles from "../../home.module.scss"
import { Row, Col } from "react-bootstrap"
import LazyLoad from "react-lazyload"

const Process: FC = () => {
  return (
    <>
      <h2 className={styles["block-title"]}>
        Как мы оказываем услуги нашим клиентам
      </h2>

      <div className={styles["block-content"]}>
        <Row>
          <Col xs={6}>
            <div className="d-flex">
              <h3 className={styles["step-title"]}>Первый этап</h3>
            </div>

            <div className="mt-3">
              <small>Бесплатный вызов дизайнера-технолога</small>
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
              <small>Заключаем с вами договор на оказание услуг</small>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <div className="d-flex">
              <h3 className={styles["step-title"]}>Третий шаг</h3>
            </div>

            <div className="mt-3">
              <small>Забор мебели на фабрику, проведение работ</small>
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
              <small>
                ОТК проверка качества, Упаковка мебели, доставка мебели к вам
              </small>
            </div>
          </Col>
        </Row>

        <div className="mt-5">
          <LazyLoad height={1029}>
            <img
              className="img-fluid w-100"
              src="/images/separator-subtle.png"
              alt="separator-subtle.png"
            />
          </LazyLoad>
        </div>
      </div>
    </>
  )
}

export default Process
