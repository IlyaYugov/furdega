import { FC, useEffect, useState } from "react"
import { Tab, Container, Row, Nav } from "react-bootstrap"
import { Redirect, Route, Switch, useLocation } from "react-router"
import { Link } from "react-router-dom"

import { Catalog } from "./catalog"
import { MaterialBrands } from "./material-brands"
import { Home } from "./home"
import { Portfolio } from "./portfolio"
import { accountApi } from "../../api/account-api"

const Admin: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { pathname } = useLocation()

  const checkAuth = async () => {
    const isAuthResponse = await accountApi.isAuthorize()
    setIsAuth(isAuthResponse)
    setIsLoading(false)
  }

  useEffect(() => {
    checkAuth()
  }, [])

  if (isLoading) return null

  if (!isAuth) return <Redirect to="/login" />

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

            <Nav.Item>
              <Nav.Link active={pathname === `/admin/portfolio`}>
                <Link to={`/admin/portfolio`}>Портфолио</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>

        <Switch>
          <Route path={`/admin/home`} component={Home} />
          <Route exact path={`/admin/catalog`} component={Catalog} />
          <Route exact path={`/admin/portfolio`} component={Portfolio} />
          <Route
            path={`/admin/catalog/:materialId/brands`}
            component={MaterialBrands}
          />
        </Switch>
      </Tab.Container>
    </Container>
  )
}

export { Admin }
