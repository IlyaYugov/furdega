import { Row, Col, Container, Button } from "react-bootstrap"
import styles from "./home.module.scss"
import { WorkExampleType } from "../../types/work-example"
import { Scrollspy } from "../../components/scrollspy/scrollspy"
import { useInView } from "react-intersection-observer"
import About from "./sections/about/about"
import WorkExamples from "./sections/work-examples/work-examples"
import Benefits from "./sections/benefits/benefits"
import Solutions from "./sections/solutions/solutions"
import Process from "./sections/process/process"
import Staff from "./sections/staff/staff"
import useMobileScreen from "../../utils/useMobileScreen"
import scrollspyIndexAnchorsMap from "../../const/scrollspy-index-anchors-map"
import scrollspyIndexAnchors from "../../const/scrollspy-index-anchors"
import { FC, useEffect, useState } from "react"
import workExamplesApi from "../../api/work-examples-api"
import LazyLoad from "react-lazyload"

const Home: FC = () => {
  const [workExamples, setWorkExamples] = useState<WorkExampleType[]>([])
  const [topScrollspyRef, isTopScrollspyVisible] = useInView()
  const [bottomScrollspyRef, isBottomScrollspyVisible] = useInView()
  const isMobile = useMobileScreen()

  const fetchWorkExamples = async () => {
    const data = await workExamplesApi.get()
    setWorkExamples(data)
  }

  useEffect(() => {
    fetchWorkExamples()
  }, [])

  return (
    <Container fluid className="g-0">
      <Container className="g-0 content">
        <div
          className={`d-flex flex-xl-row flex-column justify-content-between align-items-xl-end align-items-sm-start align-items-stretch ${styles["top-title"]}`}
        >
          <h1 className="me-3">Подарите мягкой мебели вторую жизнь</h1>
          <Button
            size="lg"
            className={`fw-demibold mt-4 mt-xl-0 mb-0 mb-xl-4 ${styles["top-title-button"]}`}
          >
            бесплатная консультация
          </Button>
        </div>
      </Container>

      <Container className={`g-0 ${styles["top-banner"]}`}>
        <LazyLoad height={550}>
          <img
            className="img-fluid w-100"
            src="/images/index-top-pic.jpg"
            alt="index-top-pic.jpg"
          />
        </LazyLoad>
      </Container>

      <Container className="g-0 content" ref={topScrollspyRef}>
        <Row className="flex-nowrap py-sm-5 g-0 bg-light">
          <Col className="scrollspy-col" sm={4} md={4} lg={3}>
            <Scrollspy
              shown={isMobile || isTopScrollspyVisible}
              anchors={scrollspyIndexAnchors}
            />
          </Col>

          <Col
            xs={12}
            sm={8}
            md={8}
            lg={9}
            className="px-3 ps-sm-5 overflow-hidden"
          >
            <div
              id={scrollspyIndexAnchorsMap["about"].id}
              className={styles.block}
            >
              <About />
            </div>

            <div
              id={scrollspyIndexAnchorsMap["examples"].id}
              className={styles.block}
            >
              <WorkExamples workExamples={workExamples} />
            </div>

            <div className={styles.block}>
              <LazyLoad height={398}>
                <img
                  className="img-fluid w-100"
                  src="/images/separator.png"
                  alt="separator.png"
                />
              </LazyLoad>
            </div>

            <div
              id={scrollspyIndexAnchorsMap["benefits"].id}
              className={styles.block}
            >
              <Benefits />
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-dark overflow-hidden g-0">
        <Container
          id="solutions"
          className={`g-0 content ${styles["solutions-block"]}`}
        >
          <Solutions />
        </Container>
      </Container>

      <Container className="g-0 content" ref={bottomScrollspyRef}>
        <Row className="flex-nowrap py-5 g-0">
          <Col className="scrollspy-col" sm={4} md={4} lg={3}>
            <Scrollspy
              shown={!isMobile && isBottomScrollspyVisible}
              anchors={scrollspyIndexAnchors}
            />
          </Col>

          <Col sm={8} md={8} lg={9} className="ps-sm-5">
            <div
              id={scrollspyIndexAnchorsMap["process"].id}
              className={styles.block}
            >
              <Process />
            </div>

            <div
              id={scrollspyIndexAnchorsMap["staff"].id}
              className={styles.block}
            >
              <Staff />
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="g-0">
        <LazyLoad height={312}>
          <img
            className="img-fluid w-100"
            src="/images/separator-big.png"
            alt="separator-big.png"
          />
        </LazyLoad>
      </Container>
    </Container>
  )
}

export { Home }
