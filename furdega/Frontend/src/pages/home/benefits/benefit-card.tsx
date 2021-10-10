import { FC } from "react"
import LazyLoad from "react-lazyload"

import { CompanyBenefitResponse } from "../../../types/home/benefits"

type BenefitCardProps = {
  data: CompanyBenefitResponse | null
}

const BenefitCard: FC<BenefitCardProps> = ({ data }) => {
  return (
    <>
      <LazyLoad height={512}>
        <img className="img-fluid w-100" src={data?.image?.imageUrl} alt="" />
      </LazyLoad>

      <div className="mt-2 mt-md-5">
        <h4 className="fw-bold">{data?.title || ""}</h4>
        <small className="mt-3">{data?.description || ""}</small>
      </div>
    </>
  )
}

export { BenefitCard }
