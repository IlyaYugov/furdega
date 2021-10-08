import { FC } from "react"
import { Image, Row } from "react-bootstrap"

import { MaterialData } from ".."
import { PreviewList, PreviewListItem } from "../preview-list"

type MaterialViewProps = MaterialData & {
  onBrandClick: (brandId: number) => Promise<void>
}

const MaterialView: FC<MaterialViewProps> = ({
  mainImage,
  description,
  brands,
  onBrandClick,
}) => {
  const previewListItems: PreviewListItem[] = brands.map((brand) => ({
    id: brand.id,
    imageSrc: brand.previewImage.imageUrl,
    title: brand.title,
  }))

  return (
    <>
      <Row className="mb-5">
        <Image fluid src={mainImage.imageUrl} />
      </Row>

      <Row className="mb-5">{description}</Row>

      <PreviewList items={previewListItems} onItemClick={onBrandClick} />
    </>
  )
}

export { MaterialView }
