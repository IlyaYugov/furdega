import { FC } from "react"

import styles from "./rounded-button.module.scss"

type RoundedButtonProps = {
  type?: "primary" | "secondary"
}

const RoundedButton: FC<RoundedButtonProps> = ({
  children,
  type = "primary",
}) => {
  return (
    <div
      className={`${styles[type]} d-flex flex-row align-items-center justify-content-center`}
    >
      {children}
    </div>
  )
}

export { RoundedButton }
