import { FC, useEffect, useState } from "react"
import { Tab, Row, Col, Nav } from "react-bootstrap"

import { homeApi } from "../../../api/home-api"
import { scrollspyAnchorsMap } from "../../../const/home"
import {
  AboutSection as AboutSectionType,
  CompanyBenefitsSection,
  HomePageContent,
  IssueSolutionsSection,
  StaffSection as StaffSectionType,
  WorkExamplesSection as WorkExamplesSectionType,
  WorkingProcessSection,
} from "../../../types/home"
import { MainHomeSectionRequest } from "../../../types/home-api/main-home-section-request"
import { WorkExamplesSectionRequest } from "../../../types/home-api/work-examples-section-request"
import { AboutSection } from "./about-section"
import { BenefitsSection } from "./benefits-section"
import { MainSection } from "./main-section"
import { ProcessSection } from "./process-section"
import { SolutionsSection } from "./solutions-section"
import { StaffSection } from "./staff-section"
import { WorkExamplesSection } from "./work-examples-section"

const HomeTab: FC = () => {
  const [content, setContent] = useState<HomePageContent | null>(null)

  const fetchContent = async () => {
    const data = await homeApi.getContent()
    setContent(data)
  }

  useEffect(() => {
    fetchContent()
  }, [])

  const onAboutSectionContentChange = (section: AboutSectionType) => {
    homeApi.createOrUpdateAboutSection(section)
  }

  const onWorkExamplesSectionContentChange = (
    request: WorkExamplesSectionRequest
  ) => {
    homeApi.createOrUpdateWorkExamplesSection(request)
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

  const onWorkingProcessSectionContentChange = (
    section: WorkingProcessSection
  ) => {
    homeApi.createOrUpdateWorkingProcessSection(section)
  }

  const onStaffSectionContentChange = (section: StaffSectionType) => {
    homeApi.createOrUpdateStaffSection(section)
  }

  const onMainHomeSectionContentChange = (request: MainHomeSectionRequest) => {
    homeApi.createOrUpdateMainHomeSection(request)
  }

  // TODO add skeleton or default content
  if (!content) return null

  return (
    <Tab.Container defaultActiveKey="main">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="main">Баннер</Nav.Link>
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

            <Nav.Item>
              <Nav.Link eventKey="process">
                {scrollspyAnchorsMap["process"].name}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="staff">
                {scrollspyAnchorsMap["staff"].name}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="main">
              <MainSection
                {...content.mainHomeSection}
                onChange={onMainHomeSectionContentChange}
              />
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

            <Tab.Pane eventKey="process">
              <ProcessSection
                {...content.workingProcessSection}
                onChange={onWorkingProcessSectionContentChange}
              />
            </Tab.Pane>

            <Tab.Pane eventKey="staff">
              <StaffSection
                {...content.staffSection}
                onChange={onStaffSectionContentChange}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export { HomeTab }
