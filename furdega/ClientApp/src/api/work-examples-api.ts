// import axios from 'axios'
import { WorkExampleType } from '../types/work-example'
import { workExamplesMock } from './mocks/work-examples'

const workExamplesApi = {
  async get(): Promise<WorkExampleType[]> {
    try {
      // TODO
      // const response = await axios.get<WorkExampleType[]>('/')
      return workExamplesMock
    } catch (error) {
      console.error(error)
      return []
    }
  },
}

export default workExamplesApi
