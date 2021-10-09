import { FC, useState } from "react"
import { Row, Col, Button, Form, Container } from "react-bootstrap"
import { useLocation } from "react-router"
import { accountApi } from "../../api/account-api"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Login: FC = () => {
  const query = useQuery()

  const [login, setLogin] = useState<string>("")
  const [pwd, setPwd] = useState<string>("")

  const onLogin = async () => {
    if (!(login && pwd)) return
    const token = await accountApi.token({ login, password: pwd })

    if (token) {
      localStorage.setItem("accessToken", token)
    } else {
      localStorage.removeItem("accessToken")
      alert("Неверные логин / пароль")
    }
  }

  return (
    <Container fluid>
      <Container className="justify-content-center">
        <Row className="p-5 flex-column gy-5 w-50">
          <Col>
            <Form.Label>Логин</Form.Label>
            <Form.Control
              as="input"
              value={login}
              onChange={(e) => {
                setLogin(e.target.value)
              }}
            />
          </Col>

          <Col>
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              as="input"
              type="password"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value)
              }}
            />
          </Col>

          <Col>
            <Button onClick={onLogin}>Войти</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export { Login }
