export enum ImageUploadRuleType {
  ratio,
  size,
}

export type RatioImageUploadRules = {
  type: ImageUploadRuleType.ratio
  ratio: number
}

export type SizeImageUploadRules = {
  type: ImageUploadRuleType.size
  width: number
  height: number
}

export type ImageUploadRules = RatioImageUploadRules | SizeImageUploadRules
