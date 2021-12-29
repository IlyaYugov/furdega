import { FC, ReactElement } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link, Switch, Route, useRouteMatch } from "react-router-dom"
import { ReactComponent as ArrowIcon } from "../../assets/svg/arrow-long-right.svg"
import { tags, blogArticlesPreviews } from "../../const/blog"
import { useParams } from "react-router"
import { blogArticles } from "../../const/blog"

const BlogHome: FC = () => {
  const lastArticlePreview =
    blogArticlesPreviews[blogArticlesPreviews.length - 1]

  return (
    <Container fluid className="g-0 my-5 py-4">
      <Container className="g-0 content">
        <Row className="flex-column-reverse flex-md-row">
          <Col xs={12} md={5} lg={4} className="pe-5">
            <Row className="flex-column gy-4">
              <Col>
                <Row
                  xs="auto"
                  className="justify-content-between border-bottom py-4"
                >
                  <Col>
                    <ArrowIcon />
                  </Col>
                  <Col className="fw-bold">Фильтр</Col>
                </Row>
              </Col>

              <Col>
                <div className="fw-bold">Теги:</div>
              </Col>

              <Col>
                <Row xs="auto" className="g-2">
                  {tags.map((t) => (
                    <Col>
                      <div className="border py-2 px-3 opacity-75">{t}</div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={7} lg={8} className="ps-5">
            <h6 className="opacity-75 mt-4">ГЛАВНОЕ ЗА НЕДЕЛЮ</h6>

            <h1 className="my-5">
              <Link to={`/blog/${lastArticlePreview.id}`}>
                {lastArticlePreview.title}
              </Link>
            </h1>

            <Row xs="auto" className="gx-5 mb-5">
              <Col className="fw-demibold">
                <Link to={`/blog/${lastArticlePreview.id}`}>читать</Link>
              </Col>
              <Col>
                <ArrowIcon style={{ transform: "rotate(180deg)" }} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

const BlogArticle: FC = () => {
  const { id } = useParams<{ id: string }>()
  return blogArticles[id] as ReactElement
}

const Blog: FC = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path}>
        <BlogHome />
      </Route>
      <Route path={`${path}/:id`}>
        <BlogArticle />
      </Route>
    </Switch>
  )
}

export { Blog }
