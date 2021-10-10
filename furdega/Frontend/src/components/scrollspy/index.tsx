import { FC, useRef, useState } from "react"
import { Col, Row, Button } from "react-bootstrap"
import ReactScrollspy from "react-scrollspy"

import { ReactComponent as WhatsappIcon } from "../../assets/svg/whatsapp.svg"
import { ReactComponent as ViberIcon } from "../../assets/svg/viber.svg"
import { ReactComponent as TelegramIcon } from "../../assets/svg/telegram.svg"
import { ReactComponent as DotsIcon } from "../../assets/svg/dots.svg"
import { useOnClickOutside } from "../../utils/use-on-click-outside"
import { ScrollspyAnchor } from "../../types/scrollspy-anchor"
import styles from "./scrollspy.module.scss"

type ScrollspyProps = {
  shown: boolean
  anchors: ScrollspyAnchor[]
  onRegClick: () => void
}

const Scrollspy: FC<ScrollspyProps> = ({ shown, anchors, onRegClick }) => {
  const [activeId, setActiveId] = useState("")
  const [smallShown, setSmallShown] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(wrapperRef, () => {
    setSmallShown(false)
  })

  if (!shown) return null

  return (
    <>
      <div
        ref={wrapperRef}
        className={`${
          smallShown ? styles["wrapper-shown"] : styles["wrapper"]
        }`}
      >
        <div className="d-flex flex-column" style={{ position: "relative" }}>
          <ReactScrollspy
            items={anchors.map((anchor) => anchor.id)}
            className={`${styles["scrollspy"]}`}
            currentClassName="active"
            onUpdate={(item) => {
              setActiveId(item?.id || "")
            }}
          >
            {anchors.map((anchor, index) => {
              const isActive = activeId === anchor.id

              return (
                <li
                  key={`scrollspy-li-${index}`}
                  className={styles["scrollspy-li"]}
                >
                  <a
                    href={`#${anchor.id}`}
                    className={`d-flex text-body ${
                      isActive
                        ? styles["scrollspy-link-active"]
                        : styles["scrollspy-link"]
                    }`}
                    onClick={() => {
                      setSmallShown(false)
                    }}
                  >
                    <span>{index + 1}</span>
                    <span
                      className={
                        isActive
                          ? styles["scrollspy-link-active-name"]
                          : styles["scrollspy-link-name"]
                      }
                    >
                      {anchor.name}
                    </span>
                  </a>
                </li>
              )
            })}
          </ReactScrollspy>

          <Button
            size="lg"
            className={`fw-demibold mt-4 px-2 d-sm-block d-none ${styles.button}`}
            onClick={onRegClick}
          >
            бесплатная консультация
          </Button>

          <Row className="mt-2 gy-3 flex-column align-items-center d-sm-flex d-none">
            <Col md={8} className="opacity-50 text-center">
              написать нам
            </Col>
            <Col md={8}>
              <Row
                xs="auto"
                className="gx-4 flex-nowrap justify-content-center"
              >
                <Col>
                  <WhatsappIcon />
                </Col>
                <Col>
                  <ViberIcon />
                </Col>
                <Col>
                  <TelegramIcon />
                </Col>
              </Row>
            </Col>
          </Row>

          <div
            className={styles["small-toggle"]}
            onClick={() => {
              setSmallShown(!smallShown)
            }}
          >
            <div>
              <DotsIcon />
            </div>
            <div className="opacity-50">меню</div>
          </div>
        </div>
      </div>

      {smallShown ? <div className={styles.backdrop}></div> : null}
    </>
  )
}

export { Scrollspy }
