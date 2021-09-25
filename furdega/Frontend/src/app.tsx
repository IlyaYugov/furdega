import { FC } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { Admin } from "./pages/admin/admin"
import { Catalog } from "./pages/catalog/catalog"
import { Contacts } from "./pages/contacts/contacts"
import { Home } from "./pages/home/home"
import { Portfolio } from "./pages/portfolio/portfolio"

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  )
}

export { App }
