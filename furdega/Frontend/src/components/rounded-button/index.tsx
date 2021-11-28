import { FC } from "react"

import styles from "./rounded-button.module.scss"

type RoundedButtonProps = {
  type?: "primary" | "secondary"
  href: string
}

const RoundedButton: FC<RoundedButtonProps> = ({
  children,
  href,
  type = "primary",
}) => {
  return (
    <a
      href={href}
      className={`${styles[type]} d-flex flex-row align-items-center justify-content-center fw-demibold`}
    >
      {children}
    </a>
  )
}

export { RoundedButton }
