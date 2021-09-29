type Params = {
  object: Record<string, any>
  namespace?: string
  form?: FormData
}

const mapObjectToFormData = ({ form, object, namespace }: Params): FormData => {
  const formData = form || new FormData()

  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      let formKey

      if (object instanceof Array) {
        formKey = "[" + property + "]"
      } else {
        formKey = "." + property
      }

      if (namespace) {
        formKey = namespace + formKey
      } else {
        formKey = property
      }

      if (
        (typeof object[property] === "object" ||
          object[property] instanceof Array) &&
        !(object[property] instanceof File)
      ) {
        mapObjectToFormData({
          object: object[property],
          form,
          namespace: formKey,
        })
      } else {
        formData.append(formKey, object[property])
      }
    }
  }

  return formData
}

export { mapObjectToFormData }
