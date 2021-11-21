import { FC, useContext, useEffect, useState, lazy, Suspense } from "react"
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
import styles from "./home.module.scss"
import { SectionsResponse } from "../../types/home/content"
import { AppContext } from "../../app"
import { useLocation } from "react-router-dom"

const About = lazy(() => import("./about"))
const WorkExamples = lazy(() => import("./work-examples"))
const Benefits = lazy(() => import("./benefits"))
const Solutions = lazy(() => import("./solutions"))
const Process = lazy(() => import("./process"))
const Staff = lazy(() => import("./staff"))

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [content, setContent] = useState<SectionsResponse>(
    defaultSectionsResponse
  )
  const [topScrollspyRef, isTopScrollspyVisible] = useInView()
  const [bottomScrollspyRef, isBottomScrollspyVisible] = useInView()
  const isMobile = useMobileScreen()
  const { setShowRegModal } = useContext(AppContext)
  const location = useLocation()

  const fetchContent = async () => {
    const data = await sectionsApi.get()
    setContent(data)
    setIsLoading(false)
  }

  const initCalculator = () => {
    function init(t: string, p: any) {
      // @ts-ignore
      window.Marquiz
        ? // @ts-ignore
          Marquiz.add([t, p])
        : document.addEventListener("marquizLoaded", function () {
            // @ts-ignore
            Marquiz.add([t, p])
          })
    }

    init("Inline", {
      id: "618984d8c8ea35003f260c76",
      buttonText: "Пройти тест",
      bgColor: "#f6e294",
      textColor: "#363636",
      rounded: true,
      shadow: "rgba(246, 226, 148, 0.5)",
      blicked: true,
      buttonOnMobile: true,
    })
  }

  const scrollToSectionById = (id: string) => {
    const element = document.getElementById(scrollspyAnchorsMap[id].id)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    fetchContent()
    initCalculator()
    const hash = location.hash.substring(1)
    if (hash)
      setTimeout(() => {
        scrollToSectionById(hash)
      }, 1000)
  }, [])

  return (
    <Container fluid className="g-0">
      <Container className="g-0 content">
        <div
          className={`d-flex flex-xl-row flex-column justify-content-between align-items-xl-end align-items-sm-start align-items-stretch ${styles["title"]}`}
        >
          {isLoading ? (
            <h1 className="w-100">
              <div className="w-75" style={{ height: "1em" }} />
              <div className="w-50" style={{ height: "1em" }} />
            </h1>
          ) : (
            <h1 className="me-3">{content.mainHomeSection.header}</h1>
          )}
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
        {isLoading ? (
          <div
            className={styles["banner-image"]}
            style={{ width: "100%", left: 0 }}
          />
        ) : (
          <Image
            className={styles["banner-image"]}
            src={content.mainHomeSection.image?.imageUrl}
          />
        )}
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
              <Suspense fallback={<h4>Загрузка...</h4>}>
                <About {...content.aboutSection} />
              </Suspense>
            </div>

            <div className="block" id={scrollspyAnchorsMap["examples"].id}>
              <Suspense fallback={<h4>Загрузка...</h4>}>
                <WorkExamples data={content.workExamplesSection} />
              </Suspense>
            </div>

            <div className="block">
              <Image
                fluid
                src="/assets/separator.png"
                width={1821}
                height={526}
              />
            </div>

            <div className="block" id={scrollspyAnchorsMap["benefits"].id}>
              <Suspense fallback={<h4>Загрузка...</h4>}>
                <Benefits {...content.companyBenefitsSection} />
              </Suspense>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-dark overflow-hidden g-0">
        <Container
          id="solutions"
          className={`g-0 content ${styles["solutions-block"]}`}
        >
          <Suspense fallback={<h4>Загрузка...</h4>}>
            <Solutions {...content.issueSolutionsSection} />
          </Suspense>
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
              <Suspense fallback={<h4>Загрузка...</h4>}>
                <Process {...content.workingProcessSection} />
              </Suspense>
            </div>

            <div className="block" id={scrollspyAnchorsMap["staff"].id}>
              <Suspense fallback={<h4>Загрузка...</h4>}>
                <Staff {...content.staff} />
              </Suspense>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="g-0">
        <Image
          fluid
          className="w-100"
          src="/assets/separator-big.png"
          width={1440}
          height={312}
        />
      </Container>

      <Container
        className="g-0 pb-5 content"
        id={scrollspyAnchorsMap["calc"].id}
      >
        <div data-marquiz-id="618984d8c8ea35003f260c76"></div>
      </Container>
    </Container>
  )
}

export { Home }
