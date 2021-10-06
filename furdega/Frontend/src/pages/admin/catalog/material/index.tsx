import { FC, useState } from "react"
import { Row, Col } from "react-bootstrap"

import { Edit } from "./edit"
import { View } from "./view"
import { AdminSectionMode } from "../../../../const/admin"
import { MaterialData } from ".."

type MaterialProps =
  | {
      create: true
    }
  | {
      create?: false
      data: MaterialData
    }

const Material: FC<MaterialProps> = (props) => {
  const [mode, setMode] = useState<AdminSectionMode>(AdminSectionMode.view)

  if (props.create) return <Edit create setMode={setMode} />

  const renderContent = () => {
    switch (mode) {
      case AdminSectionMode.view:
        return <View data={props.data} setMode={setMode} />
      case AdminSectionMode.edit:
        return <Edit data={props.data} setMode={setMode} />
      default:
        return null
    }
  }

  return (
    <Row className="flex-column gy-3">
      <Col>{renderContent()}</Col>
    </Row>
  )
}

export { Material }
