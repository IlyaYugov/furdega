import { MainHomeSectionResponse } from "../types/main-home-section"
import { ScrollspyAnchor } from "../types/scrollspy-anchor"
import {
  WorkExampleResponse,
  WorkExamplesSectionResponse,
} from "../types/work-examples-section"
import {
  IssueSolutionResponse,
  IssueSolutionsSectionResponse,
} from "../types/issue-solutions-section"
import {
  CompanyBenefitResponse,
  CompanyBenefitsSectionResponse,
} from "../types/company-benefits-section"
import { AboutSectionResponse } from "../types/about-section"
import { WorkingProcessSectionResponse } from "../types/working-process-section"
import { EmployeeResponse, StaffSectionResponse } from "../types/staff-section"
import { HomePageContent } from "../types/home-page-content"

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
    name: "Решения",
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

const defaultMainHomeSection: MainHomeSectionResponse = {
  header: "",
  imageUrl: "",
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
  imageUrl: "",
}

const defaultIssueSolutionsSection: IssueSolutionsSectionResponse = {
  header: "",
  issueSolution1: defaultIssueSolution,
  issueSolution2: defaultIssueSolution,
  issueSolution3: defaultIssueSolution,
  issueSolution4: defaultIssueSolution,
}

const defaultEmployee: EmployeeResponse = {
  title: "",
  imageUrl: "",
  description: "",
}

const defaultStaffSection: StaffSectionResponse = {
  header: "",
  employees: [],
}

const defaultCompanyBenefit: CompanyBenefitResponse = {
  title: "",
  description: "",
  imageUrl: "",
}

const defaultCompanyBenefitsSection: CompanyBenefitsSectionResponse = {
  header: "",
  companyBenefit1: defaultCompanyBenefit,
  companyBenefit2: defaultCompanyBenefit,
  companyBenefit3: defaultCompanyBenefit,
  companyBenefit4: defaultCompanyBenefit,
}

const defaultHomePageContent: HomePageContent = {
  mainHomeSection: defaultMainHomeSection,
  aboutSection: defaultAboutSection,
  workExamplesSection: defaultWorkExamplesSection,
  workingProcessSection: defaultWorkingProcessSection,
  issueSolutionsSection: defaultIssueSolutionsSection,
  companyBenefitsSection: defaultCompanyBenefitsSection,
  staffSection: defaultStaffSection,
}

export { scrollspyAnchorsMap, scrollspyAnchors, defaultHomePageContent }
