import { FC, useRef, useState } from "react"

import { ReactComponent as DotsIcon } from "../../../assets/svg/dots.svg"
import { useOnClickOutside } from "../../../utils/use-on-click-outside"
import styles from "./nav.module.scss"
import { MaterialSimple } from "../../../types/material"
import { MaterialBrandSimple } from "../../../types/material-brand"

type NavProps = {
  activeMaterialId: number
  activeBrandId: number
  materials: MaterialSimple[]
  brands: MaterialBrandSimple[]
  onMaterialClick: (materialId: number) => Promise<void>
  onBrandClick: (brandId: number) => Promise<void>
}

const Nav: FC<NavProps> = ({
  activeMaterialId,
  activeBrandId,
  materials,
  brands,
  onMaterialClick,
  onBrandClick,
}) => {
  const [smallShown, setSmallShown] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(wrapperRef, () => {
    setSmallShown(false)
  })

  const renderMaterilNavItem = (
    material: MaterialSimple | null,
    index: number,
    isActive: boolean
  ) => {
    return (
      <li key={`nav-li-${index}`} className={styles["nav-li"]}>
        <span
          className={`d-flex text-body ${
            isActive ? styles["nav-link-active"] : styles["nav-link"]
          }`}
          onClick={() => {
            onMaterialClick(material?.id || -1)
            setSmallShown(false)
          }}
        >
          <span style={{ position: "absolute", left: 0 }}>{index + 2}</span>
          <span
            className={
              isActive
                ? styles["nav-link-active-name"]
                : styles["nav-link-name"]
            }
          >
            {material?.title || "Все материалы"}
          </span>
        </span>
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
          <div className={styles.nav}>
            {renderMaterilNavItem(null, -1, activeMaterialId === -1)}

            {materials.map((material, index) => {
              const isActive = activeMaterialId === material.id

              return (
                <>
                  {renderMaterilNavItem(material, index, isActive)}

                  {isActive && brands.length ? (
                    <div className={`${styles["brands-container"]} border p-3`}>
                      {brands.map((brand) => (
                        <div
                          className={`d-flex text-body ${
                            brand.id === activeBrandId
                              ? styles["brand-link-active"]
                              : styles["brand-link"]
                          }`}
                          onClick={() => {
                            onBrandClick(brand.id)
                            setSmallShown(false)
                          }}
                        >
                          {brand.title}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </>
              )
            })}
          </div>

          <div
            className={styles["small-toggle"]}
            onClick={() => {
              setSmallShown(!smallShown)
            }}
          >
            <div>
              <DotsIcon />
            </div>
            <div className="opacity-50">каталог</div>
          </div>
        </div>
      </div>

      {smallShown ? <div className={styles.backdrop}></div> : null}
    </>
  )
}

export { Nav }
