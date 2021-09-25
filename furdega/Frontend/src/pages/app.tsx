import { FC } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Footer } from "../components/footer/footer"
import { Header } from "../components/header/header"
import { Catalog } from "./catalog/catalog"
import { Contacts } from "./contacts/contacts"
import { Home } from "./home/home"
import { Portfolio } from "./portfolio/portfolio"

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
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export { App }
