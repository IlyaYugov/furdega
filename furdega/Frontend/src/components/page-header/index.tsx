import { FC } from "react"
import { Container, Image, Row } from "react-bootstrap"
import LazyLoad from "react-lazyload"

import styles from "./page-header.module.scss"

type PageHeaderProps = {
  imageSrc: string
  title: string
}

const PageHeader: FC<PageHeaderProps> = ({ title, imageSrc }) => {
  return (
    <Container className="g-0 position-relative overflow-hidden">
      <LazyLoad height={460}>
        <Image fluid src={imageSrc} width={1440} height={460} />
      </LazyLoad>

      <Row className={`text-center text-sm-start ${styles.wrapper}`}>
        <h1 className={`text-white ${styles.title}`}>{title}</h1>
      </Row>
    </Container>
  )
}

export { PageHeader }
