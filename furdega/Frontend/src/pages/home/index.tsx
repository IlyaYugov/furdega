import { FC, useContext, useEffect, useState } from "react"
import LazyLoad from "react-lazyload"
import { Row, Col, Container, Button, Image } from "react-bootstrap"
import { useInView } from "react-intersection-observer"

import { Scrollspy } from "../../components/scrollspy"
import { useMobileScreen } from "../../utils/use-mobile-screen"
import {
  defaultSectionsResponse,
  scrollspyAnchors,
  scrollspyAnchorsMap,
} from "../../const/home"
import { sectionsApi } from "../../api/sections/sections-api"
import { About } from "./about"
import { WorkExamples } from "./work-examples"
import { Benefits } from "./benefits"
import { Solutions } from "./solutions"
import { Process } from "./process"
import { Staff } from "./staff"
import styles from "./home.module.scss"
import { SectionsResponse } from "../../types/home/content"
import { AppContext } from "../../app"

const Home: FC = () => {
  const [content, setContent] = useState<SectionsResponse>(
    defaultSectionsResponse
  )
  const [topScrollspyRef, isTopScrollspyVisible] = useInView()
  const [bottomScrollspyRef, isBottomScrollspyVisible] = useInView()
  const isMobile = useMobileScreen()
  const { setShowRegModal } = useContext(AppContext)

  const fetchContent = async () => {
    const data = await sectionsApi.get()
    setContent(data)
  }

  useEffect(() => {
    fetchContent()
  }, [])

  return (
    <Container fluid className="g-0">
      <Container className="g-0 content">
        <div
          className={`d-flex flex-xl-row flex-column justify-content-between align-items-xl-end align-items-sm-start align-items-stretch ${styles["title"]}`}
        >
          {/* <h1 className="me-3">{content.mainHomeSection.header}</h1> */}
          <h1 className="me-3">подарите мягкой мебели вторую жизнь</h1>
          <Button
            size="lg"
            className={`fw-demibold mt-4 mt-xl-0 mb-0 mb-xl-4 ${styles["title-button"]}`}
            onClick={() => {
              setShowRegModal(true)
            }}
          >
            бесплатная консультация
          </Button>
        </div>
      </Container>

      <Container className={`g-0 ${styles["banner"]}`}>
        <LazyLoad height={550}>
          <Image
            fluid
            src="/assets/home-top-pic.jpg"
            width={2880}
            height={1100}
            // src={content.mainHomeSection.image?.imageUrl}
          />
        </LazyLoad>
      </Container>

      <Container className="g-0 content" ref={topScrollspyRef}>
        <Row className="flex-nowrap py-sm-5 g-0 bg-light">
          <Col className="scrollspy-col" sm={4} md={4} lg={3}>
            <Scrollspy
              shown={isMobile || isTopScrollspyVisible}
              anchors={scrollspyAnchors}
              onRegClick={() => {
                setShowRegModal(true)
              }}
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
              <WorkExamples data={content.workExamplesSection} />
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
              onRegClick={() => {
                setShowRegModal(true)
              }}
            />
          </Col>

          <Col sm={8} md={8} lg={9} className="ps-sm-5">
            <div className="block" id={scrollspyAnchorsMap["process"].id}>
              <Process {...content.workingProcessSection} />
            </div>

            <div className="block" id={scrollspyAnchorsMap["staff"].id}>
              <Staff {...content.staff} />
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
