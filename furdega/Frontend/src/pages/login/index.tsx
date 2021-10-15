import { FC, useState } from "react"
import { Row, Col, Button, Form, Container } from "react-bootstrap"
import { Redirect } from "react-router"
import { accountApi } from "../../api/account-api"

const Login: FC = () => {
  const [login, setLogin] = useState<string>("")
  const [pwd, setPwd] = useState<string>("")
  const [changeMode, setChangeMode] = useState<boolean>(false)
  const [newPwd, setNewPwd] = useState<string>("")
  const [returnPath, setReturnPath] = useState<string | null>(null)

  const goToAdmin = () => {
    setReturnPath("/admin/home")
  }

  const onLogin = async () => {
    if (!(login && pwd)) return

    const token = await accountApi.token({ login, password: pwd })

    if (token) {
      alert("Вы успешно залогинились")
      localStorage.setItem("accessToken", token)
    } else {
      localStorage.removeItem("accessToken")
    }
  }

  const onChangePwd = async () => {
    if (!(login && pwd && newPwd)) return

    const token = await accountApi.changePassword({
      login,
      oldPassword: pwd,
      newPassword: newPwd,
    })

    if (token) {
      alert("Пароль успешно изменен")
      localStorage.setItem("accessToken", token)
      setChangeMode(false)
    } else {
      localStorage.removeItem("accessToken")
    }
  }

  const onModeChange = () => {
    if (!changeMode && !localStorage.getItem("accessToken")) {
      alert("Сначала залогиньтесь")
      return
    }

    setChangeMode(!changeMode)
  }

  if (returnPath) return <Redirect to={returnPath} />

  return (
    <Container fluid>
      <Container className="justify-content-center">
        <Row className="p-5 flex-column gy-5 w-50">
          <Col>
            <Button onClick={goToAdmin}>На страницу CMS</Button>
          </Col>

          <Col>
            <Form.Label>Логин</Form.Label>
            <Form.Control
              as="input"
              value={login}
              onChange={(e) => {
                setLogin(e.target.value.trim())
              }}
            />
          </Col>

          <Col>
            <Form.Label>{changeMode ? "Старый пароль" : "Пароль"}</Form.Label>
            <Form.Control
              as="input"
              type="password"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value.trim())
              }}
            />
          </Col>

          {changeMode && (
            <Col>
              <Form.Label>Новый пароль</Form.Label>
              <Form.Control
                as="input"
                type="password"
                value={newPwd}
                onChange={(e) => {
                  setNewPwd(e.target.value.trim())
                }}
              />
            </Col>
          )}

          <Col>
            <Row xs="auto">
              <Col>
                <Button
                  onClick={() => {
                    if (changeMode) {
                      onChangePwd()
                    } else {
                      onLogin()
                    }
                  }}
                >
                  {changeMode ? "Сменить пароль" : "Войти"}
                </Button>
              </Col>

              <Col>
                <Button variant="secondary" onClick={onModeChange}>
                  {changeMode ? "Отмена" : "Сменить пароль"}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export { Login }
