import { FC, useEffect, useState } from "react"
import LazyLoad from "react-lazyload"
import { Row, Col, Container, Button } from "react-bootstrap"
import { useInView } from "react-intersection-observer"

import { Scrollspy } from "../../components/scrollspy/scrollspy"
import {
  About,
  Solutions,
  Process,
  WorkExamples,
  Benefits,
  Staff,
} from "../../components/home"
import { useMobileScreen } from "../../utils/useMobileScreen"
import { scrollspyAnchors, scrollspyAnchorsMap } from "../../const/home"
import { homeApi } from "../../api/home-api"
import { HomePageContent } from "../../types/home"

import styles from "./home.module.scss"

const Home: FC = () => {
  const [content, setContent] = useState<HomePageContent | null>(null)
  const [topScrollspyRef, isTopScrollspyVisible] = useInView()
  const [bottomScrollspyRef, isBottomScrollspyVisible] = useInView()
  const isMobile = useMobileScreen()

  const fetchContent = async () => {
    const data = await homeApi.getContent()
    setContent(data)
  }

  useEffect(() => {
    fetchContent()
  }, [])

  // TODO add skeleton or default content
  if (!content) return null

  return (
    <Container fluid className="g-0">
      <Container className="g-0 content">
        <div
          className={`d-flex flex-xl-row flex-column justify-content-between align-items-xl-end align-items-sm-start align-items-stretch ${styles["title"]}`}
        >
          <h1 className="me-3">{content.mainHomeSection.header}</h1>
          <Button
            size="lg"
            className={`fw-demibold mt-4 mt-xl-0 mb-0 mb-xl-4 ${styles["title-button"]}`}
          >
            бесплатная консультация
          </Button>
        </div>
      </Container>

      <Container className={`g-0 ${styles["banner"]}`}>
        <LazyLoad height={550}>
          <img
            className="img-fluid w-100"
            src={content.mainHomeSection.imageUrl}
            alt={content.mainHomeSection.imageUrl}
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
            <div className="block" id={scrollspyAnchorsMap["about"].id}>
              <About {...content.aboutSection} />
            </div>

            <div className="block" id={scrollspyAnchorsMap["examples"].id}>
              <WorkExamples {...content.workExamplesSection} />
            </div>

            <div className="block">
              <LazyLoad height={398}>
                <img
                  className="img-fluid w-100"
                  src="/assets/separator.png"
                  alt="/assets/separator.png"
                />
              </LazyLoad>
            </div>

            <div className="block" id={scrollspyAnchorsMap["benefits"].id}>
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
            <div className="block" id={scrollspyAnchorsMap["process"].id}>
              <Process {...content.workingProcessSection} />
            </div>

            <div className="block" id={scrollspyAnchorsMap["staff"].id}>
              <Staff {...content.staffSection} />
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="g-0">
        <LazyLoad height={312}>
          <img
            className="img-fluid w-100"
            src="/assets/separator-big.png"
            alt="/assets/separator-big.png"
          />
        </LazyLoad>
      </Container>
    </Container>
  )
}

export { Home }
