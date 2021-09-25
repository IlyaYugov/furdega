import { FC } from "react"
import { ReactComponent as BurgerIcon } from "../../assets/svg/burger.svg"
import { ReactComponent as CrossIcon } from "../../assets/svg/cross.svg"
import styles from "./burger-button.module.scss"

type BurgerButtonProps = {
  open?: boolean
}

const BurgerButton: FC<BurgerButtonProps> = ({ open = false }) => {
  return (
    <div
      className={`rounded-circle border d-flex align-items-center justify-content-center ${styles["burger-button"]}`}
    >
      {open ? <CrossIcon /> : <BurgerIcon />}
    </div>
  )
}

export { BurgerButton }
