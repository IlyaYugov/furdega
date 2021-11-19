import { AboutSectionResponse } from "../types/home/about"
import {
  CompanyBenefitResponse,
  CompanyBenefitsSectionResponse,
} from "../types/home/benefits"
import { SectionsResponse } from "../types/home/content"
import {
  WorkExampleResponse,
  WorkExamplesSectionResponse,
} from "../types/home/examples"
import { MainHomeSectionResponse } from "../types/home/main"
import { WorkingProcessSectionResponse } from "../types/home/process"
import {
  IssueSolutionResponse,
  IssueSolutionsSectionResponse,
} from "../types/home/solutions"
import { StaffSectionResponse } from "../types/home/staff"
import { ImageResponse } from "../types/image"
import { ScrollspyAnchor } from "../types/scrollspy-anchor"

const scrollspyAnchorsMap: Record<string, ScrollspyAnchor> = {
  about: {
    id: "about",
    name: "О фабрике",
  },
  examples: {
    id: "examples",
    name: "Работы",
  },
  benefits: {
    id: "benefits",
    name: "Преимущества",
  },
  solutions: {
    id: "solutions",
    name: "Услуги",
  },
  process: {
    id: "process",
    name: "Процесс",
  },
  staff: {
    id: "staff",
    name: "Персонал",
  },
}

const scrollspyAnchors: ScrollspyAnchor[] = Object.values(scrollspyAnchorsMap)

const defaultImageResponse: ImageResponse = {
  id: "",
  imageUrl: "",
}

const defaultMainHomeSection: MainHomeSectionResponse = {
  header: "",
  image: defaultImageResponse,
}

const defaultAboutSection: AboutSectionResponse = {
  header: "",
  text: "",
}

const defaultWorkExample: WorkExampleResponse = {
  title: "",
  workType: "",
  furnitureType: "",
  duration: "",
  description: "",
  beforeImage1: {
    id: "",
    imageUrl: "",
  },
  beforeImage2: {
    id: "",
    imageUrl: "",
  },
  beforeImage3: {
    id: "",
    imageUrl: "",
  },
  afterImage1: {
    id: "",
    imageUrl: "",
  },
  afterImage2: {
    id: "",
    imageUrl: "",
  },
  afterImage3: {
    id: "",
    imageUrl: "",
  },
}

const defaultWorkExamplesSection: WorkExamplesSectionResponse = {
  header: "",
  workExample1: defaultWorkExample,
  workExample2: defaultWorkExample,
  workExample3: defaultWorkExample,
}

const defaultWorkingProcessSection: WorkingProcessSectionResponse = {
  header: "",
  firstStage: "",
  secondStage: "",
  thirdStage: "",
  finalStage: "",
}

const defaultIssueSolution: IssueSolutionResponse = {
  title: "",
  description: "",
  image: defaultImageResponse,
}

const defaultIssueSolutionsSection: IssueSolutionsSectionResponse = {
  header: "",
  issueSolution1: defaultIssueSolution,
  issueSolution2: defaultIssueSolution,
  issueSolution3: defaultIssueSolution,
  issueSolution4: defaultIssueSolution,
}

const defaultStaffSection: StaffSectionResponse = {
  header: "",
}

const defaultCompanyBenefit: CompanyBenefitResponse = {
  title: "",
  description: "",
  image: defaultImageResponse,
}

const defaultCompanyBenefitsSection: CompanyBenefitsSectionResponse = {
  header: "",
  companyBenefit1: defaultCompanyBenefit,
  companyBenefit2: defaultCompanyBenefit,
  companyBenefit3: defaultCompanyBenefit,
  companyBenefit4: defaultCompanyBenefit,
}

const defaultSectionsResponse: SectionsResponse = {
  mainHomeSection: defaultMainHomeSection,
  aboutSection: defaultAboutSection,
  workExamplesSection: defaultWorkExamplesSection,
  workingProcessSection: defaultWorkingProcessSection,
  issueSolutionsSection: defaultIssueSolutionsSection,
  companyBenefitsSection: defaultCompanyBenefitsSection,
  staff: defaultStaffSection,
}

export {
  scrollspyAnchorsMap,
  scrollspyAnchors,
  defaultAboutSection,
  defaultWorkingProcessSection,
  defaultSectionsResponse,
}
