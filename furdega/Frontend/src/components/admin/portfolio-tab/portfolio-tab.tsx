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

import { portfolioApi } from "../../../api/portfolio-api"
import { ProtfolioPageContent } from "../../../types/portfolio-page-content"

const PortfolioTab: FC = () => {
  const [content, setContent] = useState<ProtfolioPageContent | null>(null)

  const [header, setHeader] = useState<string>("")

  const fetchContent = async () => {
    const data = await portfolioApi.getContent()
    setContent(data)
  }

  useEffect(() => {
    fetchContent()
  }, [])

  useEffect(() => {
    if (!content) return
    setHeader(content.header)
  }, [content])

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
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export { PortfolioTab }
