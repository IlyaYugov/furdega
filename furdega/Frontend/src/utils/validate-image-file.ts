import { ImageUploadRules, ImageUploadRuleType } from "../types/image-upload"

export const validateImageFile = (
  file: File,
  rules: ImageUploadRules
): Promise<boolean> => {
  return new Promise((resolve) => {
    const reader = new FileReader()

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const img = new Image()

      if (!e.target) return

      img.src = e.target.result as string
      img.onload = () => {
        const w = img.width
        const h = img.height

        switch (rules.type) {
          case ImageUploadRuleType.ratio: {
            const isValid = rules.ratio === w / h
            if (!isValid) {
              alert(
                `Изображение должно удовлетворять следующим правилам: ширина / высота = ${rules.ratio}`
              )
            }
            resolve(isValid)
            break
          }
          case ImageUploadRuleType.size: {
            const isValid = rules.height === h && rules.width === w
            if (!isValid) {
              alert(
                `Изображение должно удовлетворять следующим правилам: ширина = ${rules.width}px, высота = ${rules.height}px`
              )
            }
            resolve(isValid)
            break
          }
          default: {
            resolve(true)
          }
        }
      }
    }

    reader.readAsDataURL(file)
  })
}
