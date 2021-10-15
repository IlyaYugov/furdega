import { FC } from "react"

import { WorkExample } from "./work-example"
import { ReactComponent as YellowSnakeIcon } from "../../../assets/svg/yellow-snake.svg"
import { WorkExamplesSectionResponse } from "../../../types/home/examples"

type WorkExamplesProps = { data: WorkExamplesSectionResponse }

const WorkExamples: FC<WorkExamplesProps> = ({ data }) => {
  const { header, workExample1, workExample2, workExample3 } = data

  return (
    <>
      <h2 className="block-title">{header}</h2>

      <div className="block-content">
        <div className="mb-5">
          <WorkExample data={workExample1} />
          <YellowSnakeIcon className="mt-5" />
        </div>

        <div className="mb-5">
          <WorkExample data={workExample2} />
          <YellowSnakeIcon className="mt-5" />
        </div>

        <div className="mb-5">
          <WorkExample data={workExample3} />
          <YellowSnakeIcon className="mt-5" />
        </div>
      </div>
    </>
  )
}

export { WorkExamples as default }
