export const isNumber = (value) => {
  return Number.isInteger(+value)
}

export const isValid = (value, maxLength = null) => {
  return !!value &&
    (!maxLength || value.length <= maxLength)
}
