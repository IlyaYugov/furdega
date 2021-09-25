import { Col, Container, Row } from "react-bootstrap"
import { PortfolioSection } from "../../components/portfolio-section/portfolio-section"
import { Scrollspy } from "../../components/scrollspy/scrollspy"
import scrollspyPortfolioAnchors from "../../const/scrollspy-portfolio-anchors"
import styles from "./portfolio.module.scss"
import { FC } from "react"

const Portfolio: FC = () => {
  return (
    <>
      <Container className={`g-0 ${styles["title-container"]}`}>
        <img
          src="/images/portfolio-top-pic.jpg"
          alt="portfolio-top-pic.jpg"
          width="1440"
          height="460"
        />
        <div
          className={`d-flex justify-content-sm-start justify-content-center ${styles["title-wrapper"]}`}
        >
          <h1 className={`text-white ${styles.title}`}>Портфолио</h1>
        </div>
      </Container>

      <Container className="g-0 content overflow-hidden">
        <Row className="flex-nowrap py-5 g-0 bg-light">
          <Col className="scrollspy-col" sm={4} md={4} lg={3}>
            <Scrollspy shown={true} anchors={scrollspyPortfolioAnchors} />
          </Col>

          <Col xs={12} sm={8} md={8} lg={9} className="px-3 ps-sm-5">
            <PortfolioSection title={"Все работы"} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export { Portfolio }
