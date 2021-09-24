import { FC } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Footer } from "../components/footer/footer"
import { Header } from "../components/header/header"
import { Home } from "../pages/home/home"

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export { App }
