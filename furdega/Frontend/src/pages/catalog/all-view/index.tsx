import { FC } from "react"

import { MaterialSimple } from "../../../types/material"
import { PreviewList, PreviewListItem } from "../preview-list"

type AllViewProps = {
  materials: MaterialSimple[]
  onMaterialClick: (materialId: number) => void
}

const AllView: FC<AllViewProps> = ({ materials, onMaterialClick }) => {
  const previewListItems: PreviewListItem[] = materials.map((material) => ({
    id: material.id,
    imageSrc: material.previewImage.imageUrl,
    title: material.title,
  }))

  return <PreviewList items={previewListItems} onItemClick={onMaterialClick} />
}

export { AllView }
