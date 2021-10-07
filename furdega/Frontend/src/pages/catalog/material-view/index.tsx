import { FC } from "react"
import { MaterialData } from ".."

type MaterialViewProps = MaterialData

const MaterialView: FC<MaterialViewProps> = ({
  title,
  mainImage,
  description,
  brands,
}) => {
  return (
    <>
      {title}
      {mainImage.imageUrl}
      {description}
      {brands.length}
    </>
  )
}

export { MaterialView }
