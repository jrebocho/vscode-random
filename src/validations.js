export const isNumber = (value) => {
  return value && Number.isInteger(+value)
}

export const isValid = (value, maxLength = null) => {
  return !!value && (!maxLength || value.length <= maxLength)
}

export const isValidIntRange = (value) => {
  if (!value) {
    return false
  }

  const integerValues = value.split('-')
  if (integerValues.length !== 2) {
    return false
  }

  return (
    isNumber(integerValues[0]) &&
    isNumber(integerValues[1]) &&
    +integerValues[0] <= +integerValues[1]
  )
}

export const isStringWithComma = (value) => {
  if (!value || typeof value !== 'string') {
    return false
  }

  return value.indexOf(',') > -1
}

export const isValidRegEx = (value) => {
  try {
    new RegExp(value)
    return true
  } catch (e) {
    return false
  }
}

export const isValidYear = (value) => {
  if (value === '') {
    return true
  }

  if (!value) {
    return false
  }

  return isNumber(value) && +value <= 2999 && +value >= 1970
}
