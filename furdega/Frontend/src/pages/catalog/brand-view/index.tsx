import { FC } from "react"
import { Image, Row } from "react-bootstrap"

import { MaterialBrand } from "../../../types/material-brand"
import { PreviewList, PreviewListItem } from "../preview-list"

type BrandViewProps = MaterialBrand

const BrandView: FC<BrandViewProps> = ({ mainImage, images }) => {
  const previewListItems: PreviewListItem[] = images.map((image) => ({
    imageSrc: image.imageUrl,
  }))

  return (
    <>
      <Row className="mb-5">
        <Image fluid src={mainImage.imageUrl} />
      </Row>

      <PreviewList items={previewListItems} />
    </>
  )
}

export { BrandView }
