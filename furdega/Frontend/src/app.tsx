import { createContext, Dispatch, FC, SetStateAction, useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { RegModal } from "./components/reg-modal"
import { Admin } from "./pages/admin"
import { Blog } from "./pages/blog"
import { Catalog } from "./pages/catalog"
import { Contacts } from "./pages/contacts"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Portfolio } from "./pages/portfolio"

import "./styles/index.scss"

type AppContextState = {
  showRegModal: boolean
  setShowRegModal: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext<AppContextState>({
  showRegModal: false,
  setShowRegModal: () => {},
})

const App: FC = () => {
  const [showRegModal, setShowRegModal] = useState<boolean>(false)

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ showRegModal, setShowRegModal }}>
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
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>

        <Footer />

        <RegModal
          show={showRegModal}
          onClose={() => {
            setShowRegModal(false)
          }}
        />
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export { App, AppContext }
