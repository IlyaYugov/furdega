import { FC, useContext, useRef, useState } from "react"
import { Button } from "react-bootstrap"
import { ReactComponent as DotsIcon } from "../../../assets/svg/dots.svg"
import { useOnClickOutside } from "../../../utils/use-on-click-outside"
import styles from "../../../components/scrollspy/scrollspy.module.scss"
import { FurnitureType } from "../../../types/furniture"
import { defaultFurType } from ".."
import { AppContext } from "../../../app"
import { Social } from "../../../components/social"

type NavProps = {
  items: FurnitureType[]
  onItemClick: (item: FurnitureType) => void
  activeItem: FurnitureType
}

const Nav: FC<NavProps> = ({ items, onItemClick, activeItem }) => {
  const [smallShown, setSmallShown] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { setShowRegModal } = useContext(AppContext)

  useOnClickOutside(wrapperRef, () => {
    setSmallShown(false)
  })

  const renderNavItem = (
    item: FurnitureType,
    index: number,
    isActive: boolean
  ) => {
    return (
      <li key={`scrollspy-li-${index}`} className={styles["scrollspy-li"]}>
        <div
          style={{ cursor: "pointer" }}
          className={`d-flex text-body ${
            isActive
              ? styles["scrollspy-link-active"]
              : styles["scrollspy-link"]
          }`}
          onClick={() => {
            onItemClick(item)
            setSmallShown(false)
          }}
        >
          <span>{index + 2}</span>
          <span
            className={
              isActive
                ? styles["scrollspy-link-active-name"]
                : styles["scrollspy-link-name"]
            }
          >
            {item.title}
          </span>
        </div>
      </li>
    )
  }

  return (
    <>
      <div
        ref={wrapperRef}
        className={`${
          smallShown ? styles["wrapper-shown"] : styles["wrapper"]
        }`}
      >
        <div className="d-flex flex-column" style={{ position: "relative" }}>
          <div className={styles.scrollspy}>
            {renderNavItem(
              defaultFurType,
              -1,
              activeItem.id === defaultFurType.id
            )}

            {items.map((item, index) =>
              renderNavItem(item, index, activeItem.id === item.id)
            )}
          </div>

          <Button
            size="lg"
            className={`fw-demibold my-4 px-2 d-sm-block d-none ${styles.button}`}
            onClick={() => {
              setShowRegModal(true)
            }}
          >
            бесплатная консультация
          </Button>

          <Social />

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

export { Nav }
