import { FC } from "react"
import { MaterialBrand } from "../../../types/material-brand"

type BrandViewProps = MaterialBrand

const BrandView: FC<BrandViewProps> = ({ title, mainImage, images }) => {
  return (
    <>
      {title}
      {mainImage.imageUrl}
      {images.length}
    </>
  )
}

export { BrandView }
