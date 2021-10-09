import { FC } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Admin } from "./pages/admin"
import { Catalog } from "./pages/catalog"
import { Contacts } from "./pages/contacts"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Portfolio } from "./pages/portfolio"

import "./styles/index.scss"

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
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
