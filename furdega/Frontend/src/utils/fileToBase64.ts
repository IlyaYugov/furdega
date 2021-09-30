export const fileToBase64Raw = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

const fileToBase64 = async (file: File): Promise<string> => {
  const raw64 = await fileToBase64Raw(file)
  return raw64.replace("data:", "").replace(/^.+,/, "")
}

export { fileToBase64 }
