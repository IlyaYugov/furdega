import { WorkExample } from "../types/home"
import { WorkExampleRequest } from "../types/home-api/work-example-request"

const getWorkExampleRequestFromWorkExample = (
  example: WorkExample
): WorkExampleRequest => {
  const { title, furnitureType, duration, workType, description } = example

  return {
    title,
    furnitureType,
    duration,
    workType,
    description,
    beforeImages: [],
    afterImages: [],
  }
}

export { getWorkExampleRequestFromWorkExample }
