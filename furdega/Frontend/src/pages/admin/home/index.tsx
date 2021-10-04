import { FC, useState } from "react"
import { Tab, Row, Col, Nav } from "react-bootstrap"

import { scrollspyAnchorsMap } from "../../../const/home"
import { AboutSection } from "./about-section"
import { BenefitsSection } from "./benefits-section"
import { MainHomeSection } from "./main-home-section"
import { ProcessSection } from "./process-section"
import { SolutionsSection } from "./solutions-section"
import { StaffSection } from "./staff-section"
import { WorkExamplesSection } from "./work-examples-section"

const Home: FC = () => {
  const [activeKey, setActiveKey] = useState<string>("main")

  return (
    <Tab.Container>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link
                active={activeKey === "main"}
                onClick={() => {
                  setActiveKey("main")
                }}
              >
                Баннер
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                active={activeKey === "about"}
                onClick={() => {
                  setActiveKey("about")
                }}
              >
                {scrollspyAnchorsMap["about"].name}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                active={activeKey === "examples"}
                onClick={() => {
                  setActiveKey("examples")
                }}
              >
                {scrollspyAnchorsMap["examples"].name}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                active={activeKey === "benefits"}
                onClick={() => {
                  setActiveKey("benefits")
                }}
              >
                {scrollspyAnchorsMap["benefits"].name}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                active={activeKey === "solutions"}
                onClick={() => {
                  setActiveKey("solutions")
                }}
              >
                {scrollspyAnchorsMap["solutions"].name}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                active={activeKey === "process"}
                onClick={() => {
                  setActiveKey("process")
                }}
              >
                {scrollspyAnchorsMap["process"].name}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                active={activeKey === "staff"}
                onClick={() => {
                  setActiveKey("staff")
                }}
              >
                {scrollspyAnchorsMap["staff"].name}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          {activeKey === "main" && (
            <Tab.Pane>
              <MainHomeSection />
            </Tab.Pane>
          )}

          {activeKey === "about" && (
            <Tab.Pane>
              <AboutSection />
            </Tab.Pane>
          )}

          {activeKey === "examples" && (
            <Tab.Pane>
              <WorkExamplesSection />
            </Tab.Pane>
          )}

          {activeKey === "benefits" && (
            <Tab.Pane>
              <BenefitsSection />
            </Tab.Pane>
          )}

          {activeKey === "solutions" && (
            <Tab.Pane>
              <SolutionsSection />
            </Tab.Pane>
          )}

          {activeKey === "process" && (
            <Tab.Pane>
              <ProcessSection />
            </Tab.Pane>
          )}

          {activeKey === "staff" && (
            <Tab.Pane>
              <StaffSection />
            </Tab.Pane>
          )}
        </Col>
      </Row>
    </Tab.Container>
  )
}

export { Home }
