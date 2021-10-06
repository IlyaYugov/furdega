import { FC } from "react"
import { Tab, Container, Row, Nav } from "react-bootstrap"
import { Route, Switch, useLocation, useRouteMatch } from "react-router"
import { Link } from "react-router-dom"
import { Catalog } from "./catalog"
import { MaterialBrands } from "./material-brands"

import { Home } from "./home"

const Admin: FC = () => {
  const { pathname } = useLocation()

  return (
    <Container className="g-0 content overflow-hidden pb-5">
      <Tab.Container>
        <Row className="mb-4">
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link active={pathname === `/admin/home`}>
                <Link to={`/admin/home`}>Главная</Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link active={pathname === `/admin/catalog`}>
                <Link to={`/admin/catalog`}>Каталог</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>

        <Switch>
          <Route path={`/admin/home`}>
            <Home />
          </Route>

          <Route exact path={`/admin/catalog`}>
            <Catalog />
          </Route>

          <Route path={`/admin/catalog/:materialId/brands`}>
            <MaterialBrands />
          </Route>
        </Switch>
      </Tab.Container>
    </Container>
  )
}

export { Admin }
