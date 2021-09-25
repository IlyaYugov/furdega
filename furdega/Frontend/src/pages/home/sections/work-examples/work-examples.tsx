import { FC } from "react"
import styles from "../../home.module.scss"
import { WorkExampleType } from "../../../../types/work-example"
import WorkExample from "./work-example"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"

type WorkExamplesProps = {
  workExamples: WorkExampleType[]
}

const WorkExamples: FC<WorkExamplesProps> = ({ workExamples }) => {
  return (
    <>
      <h2 className={styles["block-title"]}>
        Несколько историй из жизни реставрации мягкой мебели
      </h2>
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
