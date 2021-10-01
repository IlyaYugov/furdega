import { FC } from "react"
import { Tabs, Tab, Container } from "react-bootstrap"

import { Home } from "./home"

const Admin: FC = () => {
  return (
    <Container className="g-0 content overflow-hidden pb-4">
      <Tabs defaultActiveKey="home" className="mb-4">
        <Tab eventKey="home" title="Главная">
          <Home />
        </Tab>

        <Tab eventKey="portfolio" title="Портфолио"></Tab>

        <Tab eventKey="catalog" title="Каталог"></Tab>

        <Tab eventKey="contacts" title="Контакты"></Tab>
      </Tabs>
    </Container>
  )
}

export { Admin }
