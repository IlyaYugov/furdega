import { FC } from "react"

import { WorkExample } from "./work-example"
import { ReactComponent as YellowSnakeIcon } from "../../../assets/svg/yellow-snake.svg"
import { WorkExamplesSectionResponse } from "../../../types/work-examples-section"

type WorkExamplesProps = { data: WorkExamplesSectionResponse }

const WorkExamples: FC<WorkExamplesProps> = ({ data }) => {
  if (!data) return null

  const { header, workExample1, workExample2, workExample3 } = data

  return (
    <>
      <h2 className="block-title">{header}</h2>

      <div className="block-content">
        <div className="mb-5">
          <WorkExample {...workExample1} />
          <YellowSnakeIcon className="mt-5" />
        </div>

        <div className="mb-5">
          <WorkExample {...workExample2} />
          <YellowSnakeIcon className="mt-5" />
        </div>

        <div className="mb-5">
          <WorkExample {...workExample3} />
          <YellowSnakeIcon className="mt-5" />
        </div>
      </div>
    </>
  )
}

export { WorkExamples }
