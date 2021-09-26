import { FC } from "react"
import { Tabs, Tab, Container } from "react-bootstrap"
import { HomeTab } from "./tabs/home/home"

const Admin: FC = () => {
  return (
    <Container className="g-0 content overflow-hidden">
      <Tabs defaultActiveKey="home" className="mb-4">
        <Tab eventKey="home" title="Главная">
          <HomeTab />
        </Tab>

        <Tab eventKey="portfolio" title="Портфолио"></Tab>
        <Tab eventKey="catalog" title="Каталог"></Tab>
        <Tab eventKey="contacts" title="Контакты"></Tab>
      </Tabs>
    </Container>
  )
}

export { Admin }