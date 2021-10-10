import { FC } from "react"

import styles from "./rounded-button.module.scss"

type RoundedButtonProps = {
  onClick?: () => unknown
  type?: "primary" | "secondary"
}

const RoundedButton: FC<RoundedButtonProps> = ({
  children,
  onClick,
  type = "primary",
}) => {
  return (
    <div
      className={`${styles[type]} d-flex flex-row align-items-center justify-content-center fw-demibold`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export { RoundedButton }
