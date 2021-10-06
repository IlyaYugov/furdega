import { FC } from "react"
import { useParams } from "react-router"

const MaterialBrands: FC = () => {
  const { materialId } = useParams<{ materialId: string }>()

  console.log(materialId)

  return null
}

export { MaterialBrands }
