import { FC } from "react"
import { Col, Image, Row } from "react-bootstrap"

import styles from "./preview-list.module.scss"

export type PreviewListItem = {
  imageSrc: string
  id?: number
  title?: string
}

type PreviewListProps = {
  items: PreviewListItem[]
  onItemClick?: (itemId: number) => unknown
}

const PreviewList: FC<PreviewListProps> = ({ items, onItemClick }) => {
  let prevStep = -3
  let prevNextStep = -2

  return (
    <Row className={`g-0 ${styles.container}`}>
      {items.map((item, index) => {
        let addGutter = false

        if (index === prevStep + 4) {
          prevStep = index
          addGutter = true
        }

        if (index === prevNextStep + 4) {
          prevNextStep = index
          addGutter = true
        }

        return (
          <>
            {addGutter ? (
              <Col className="d-none d-sm-block" xs={1}></Col>
            ) : null}

            <Col
              xs={6}
              sm={5}
              className={styles.item}
              onClick={() => {
                if (!onItemClick || !item.id) return
                onItemClick(item.id)
              }}
            >
              <Image fluid src={item.imageSrc} />

              {item.title ? (
                <span className={styles.title}>{item.title}</span>
              ) : null}
            </Col>

            {addGutter ? (
              <Col className="d-none d-sm-block" xs={1}></Col>
            ) : null}
          </>
        )
      })}
    </Row>
  )
}

export { PreviewList }
