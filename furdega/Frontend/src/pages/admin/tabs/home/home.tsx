import { FC } from "react"
import {
  Tab,
  Row,
  Col,
  Nav,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap"
import { scrollspyAnchorsMap } from "../../../../const/home"

const HomeTab: FC = () => {
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
          </Nav>
        </Col>

        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="header">
              <InputGroup className="mb-3">
                <InputGroup.Text className="w-25 text-center text-wrap">
                  Текст заголовка
                </InputGroup.Text>
                <FormControl
                  as="textarea"
                  value="Подарите мягкой мебели вторую жизнь"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Применить
                </Button>
              </InputGroup>
            </Tab.Pane>

            <Tab.Pane eventKey="about">
              <Row className="flex-column">
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="w-25 text-center text-wrap">
                      Текст заголовка
                    </InputGroup.Text>
                    <FormControl
                      as="textarea"
                      value="С большой историей о нашей компании"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                      Применить
                    </Button>
                  </InputGroup>
                </Col>

                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="w-25">
                      Текст секции
                    </InputGroup.Text>
                    <FormControl
                      as="textarea"
                      value="«Фабрика восстановления мебели» является одной из крупнейших фабрик в России по перетяжке и реставрации мебели. Образовалась фабрика в 2008 году и до сих пор является лидером в своей отрасли, за счет надежной репутации и индивидуального подхода к клиентам."
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                      Применить
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="examples">
              <InputGroup className="mb-3">
                <InputGroup.Text>Текст заголовка</InputGroup.Text>
                <FormControl
                  as="textarea"
                  value="Несколько историй из жизни реставрации мягкой мебели"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Применить
                </Button>
              </InputGroup>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export { HomeTab }
