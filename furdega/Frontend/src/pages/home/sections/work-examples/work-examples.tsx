import { FC } from "react"

import WorkExample from "./work-example"

import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"
import { WorkExamplesSection } from "../../../../types/home/work-examples-section"

import styles from "../../home.module.scss"

const WorkExamples: FC<WorkExamplesSection> = ({ header, workExamples }) => {
  return (
    <>
      <h2 className={styles["block-title"]}>{header}</h2>

      <div className={styles["block-content"]}>
        {workExamples.map((workExample, index) => (
          <div key={`work-example-${index}`} className="mb-5">
            <WorkExample {...workExample} />
            {index !== workExamples.length - 1 ? (
              <YellowSnakeIcon className="mt-5" />
            ) : null}
          </div>
        ))}
      </div>
    </>
  )
}

export default WorkExamples
