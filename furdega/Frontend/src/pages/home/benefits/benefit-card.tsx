import { FC } from "react"
import { Image } from "react-bootstrap"
import LazyLoad from "react-lazyload"

import { CompanyBenefitResponse } from "../../../types/home/benefits"

type BenefitCardProps = {
  data: CompanyBenefitResponse | null
}

const BenefitCard: FC<BenefitCardProps> = ({ data }) => {
  return (
    <>
      <LazyLoad height={512}>
        <Image fluid src={data?.image?.imageUrl} />
      </LazyLoad>

      <div className="mt-2 mt-md-5">
        <h4 className="fw-bold">{data?.title || ""}</h4>
        <small className="mt-3">{data?.description || ""}</small>
      </div>
    </>
  )
}

export { BenefitCard }
