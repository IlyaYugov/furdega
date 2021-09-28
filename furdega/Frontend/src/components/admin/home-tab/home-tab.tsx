import { FC, useEffect, useState } from "react"
import {
  Tab,
  Row,
  Col,
  Nav,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap"

import { homeApi } from "../../../api/home-api"
import { scrollspyAnchorsMap } from "../../../const/home"
import {
  AboutSection as AboutSectionType,
  CompanyBenefitsSection,
  HomePageContent,
  IssueSolutionsSection,
  WorkExamplesSection as WorkExamplesSectionType,
} from "../../../types/home"
import { AboutSection } from "./about-section"
import { BenefitsSection } from "./benefits-section"
import { SolutionsSection } from "./solutions-section"
import { WorkExamplesSection } from "./work-examples-section"

const HomeTab: FC = () => {
  const [content, setContent] = useState<HomePageContent | null>(null)

  const [header, setHeader] = useState<string>("")

  const fetchContent = async () => {
    const data = await homeApi.getContent()
    setContent(data)
    setHeader(data.header)
  }

  useEffect(() => {
    fetchContent()
  }, [])

  const onAboutSectionContentChange = (section: AboutSectionType) => {
    homeApi.createOrUpdateAboutSection(section)
  }

  const onWorkExamplesSectionContentChange = (
    section: WorkExamplesSectionType
  ) => {
    homeApi.createOrUpdateWorkExamplesSection(section)
  }

  const onCompanyBenefitsSectionContentChange = (
    section: CompanyBenefitsSection
  ) => {
    homeApi.createOrUpdateCompanyBenefitsSection(section)
  }

  const onIssueSolutionsSectionContentChange = (
    section: IssueSolutionsSection
  ) => {
    homeApi.createOrUpdateIssueSolutionsSection(section)
  }

  // TODO add skeleton or default content
  if (!content) return null

  return (
    <Tab.Container defaultActiveKey="header">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="header">Заголовок</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="about">
                {scrollspyAnchorsMap["about"].name}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="examples">
                {scrollspyAnchorsMap["examples"].name}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="benefits">
                {scrollspyAnchorsMap["benefits"].name}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="solutions">
                {scrollspyAnchorsMap["solutions"].name}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="header">
              <Row className="flex-column">
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="w-25 text-center text-wrap">
                      Текст заголовка
                    </InputGroup.Text>
                    <FormControl
                      as="textarea"
                      value={header}
                      onChange={(event) => {
                        setHeader(event.target.value)
                      }}
                    />
                  </InputGroup>
                </Col>

                <Col>
                  <Button size="lg">Применить</Button>
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="about">
              <AboutSection
                {...content.aboutSection}
                onChange={onAboutSectionContentChange}
              />
            </Tab.Pane>

            <Tab.Pane eventKey="examples">
              <WorkExamplesSection
                {...content.workExamplesSection}
                onChange={onWorkExamplesSectionContentChange}
              />
            </Tab.Pane>

            <Tab.Pane eventKey="benefits">
              <BenefitsSection
                {...content.companyBenefitsSection}
                onChange={onCompanyBenefitsSectionContentChange}
              />
            </Tab.Pane>

            <Tab.Pane eventKey="solutions">
              <SolutionsSection
                {...content.issueSolutionsSection}
                onChange={onIssueSolutionsSectionContentChange}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export { HomeTab }
