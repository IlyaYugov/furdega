import { FC, useEffect, useState } from "react"
import LazyLoad from "react-lazyload"
import { Row, Col, Container, Button } from "react-bootstrap"
import { useInView } from "react-intersection-observer"

import { Scrollspy } from "../../components/scrollspy/scrollspy"

import About from "./sections/about/about"
import WorkExamples from "./sections/work-examples/work-examples"
import Benefits from "./sections/benefits/benefits"
import Solutions from "./sections/solutions/solutions"
import Process from "./sections/process/process"
import Staff from "./sections/staff/staff"

import { useMobileScreen } from "../../utils/useMobileScreen"
import { scrollspyAnchors, scrollspyAnchorsMap } from "../../const/home"
import { homeApi } from "../../api/home-api"
import { HomePageContent } from "../../types/home/home-page-content"

import styles from "./home.module.scss"

const Home: FC = () => {
  const [content, setContent] = useState<HomePageContent | null>(null)
  const [topScrollspyRef, isTopScrollspyVisible] = useInView()
  const [bottomScrollspyRef, isBottomScrollspyVisible] = useInView()
  const isMobile = useMobileScreen()

  const fetchWorkExamples = async () => {
    const data = await homeApi.getHomePageContent()
    setContent(data)
  }

  useEffect(() => {
    fetchWorkExamples()
  }, [])

  // TODO add skeleton or default content
  if (!content) return null

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
              anchors={scrollspyAnchors}
            />
          </Col>

          <Col
            xs={12}
            sm={8}
            md={8}
            lg={9}
            className="px-3 ps-sm-5 overflow-hidden"
          >
            <div id={scrollspyAnchorsMap["about"].id} className={styles.block}>
              <About {...content.aboutSection} />
            </div>

            <div
              id={scrollspyAnchorsMap["examples"].id}
              className={styles.block}
            >
              <WorkExamples {...content.workExamplesSection} />
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
              id={scrollspyAnchorsMap["benefits"].id}
              className={styles.block}
            >
              <Benefits {...content.companyBenefitsSection} />
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-dark overflow-hidden g-0">
        <Container
          id="solutions"
          className={`g-0 content ${styles["solutions-block"]}`}
        >
          <Solutions {...content.issueSolutionsSection} />
        </Container>
      </Container>

      <Container className="g-0 content" ref={bottomScrollspyRef}>
        <Row className="flex-nowrap py-5 g-0">
          <Col className="scrollspy-col" sm={4} md={4} lg={3}>
            <Scrollspy
              shown={!isMobile && isBottomScrollspyVisible}
              anchors={scrollspyAnchors}
            />
          </Col>

          <Col sm={8} md={8} lg={9} className="ps-sm-5">
            <div
              id={scrollspyAnchorsMap["process"].id}
              className={styles.block}
            >
              <Process {...content.workingProcessSection} />
            </div>

            <div id={scrollspyAnchorsMap["staff"].id} className={styles.block}>
              <Staff {...content.staffSection} />
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
