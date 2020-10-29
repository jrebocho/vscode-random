import Chance from 'chance'
import RandExp from 'randexp'
import { VALUE_DEFAULT_SAMPLE_OPTIONS, VALUE_DEFAULT_STRING_LENGTH } from './constants'
import { isValid } from './validations'

let chanceInstance = new Chance()

export const resetSeed = (seed) => {
  chanceInstance = isValid(seed) ? new Chance(seed) : new Chance()
}

export const randomByte = ({ chance = chanceInstance }) => {
  return chance.natural({ max: 255 }).toString()
}

export const randomShort = ({ chance = chanceInstance }) => {
  return chance.natural({ max: 65535 }).toString()
}

export const randomInt = ({ chance = chanceInstance }) => {
  return chance.natural({ max: 4294967295 }).toString()
}

export const randomLong = ({ chance = chanceInstance }) => {
  return chance.natural().toString()
}

export const randomIntCustomRange = ({ chance = chanceInstance, inputValue }) => {
  const rangeLimits = inputValue.split('-')

  return chance.natural({ min: +rangeLimits[0], max: +rangeLimits[1] }).toString()
}

export const randomGuid = ({ chance = chanceInstance }) => {
  return chance.guid()
}

export const randomLetters = ({
  chance = chanceInstance,
  inputValue = VALUE_DEFAULT_STRING_LENGTH,
}) => {
  return chance.string({ length: inputValue, alpha: true })
}

export const randomDigits = ({
  chance = chanceInstance,
  inputValue = VALUE_DEFAULT_STRING_LENGTH,
}) => {
  return chance.string({ length: inputValue, numeric: true })
}

export const randomLettersDigits = ({
  chance = chanceInstance,
  inputValue = VALUE_DEFAULT_STRING_LENGTH,
}) => {
  return chance.string({ length: inputValue, alpha: true, numeric: true })
}

export const randomLowercaseLetters = ({
  chance = chanceInstance,
  inputValue = VALUE_DEFAULT_STRING_LENGTH,
}) => {
  return chance.string({ length: inputValue, alpha: true, casing: 'lower' })
}

export const randomLowercaseLettersDigits = ({
  chance = chanceInstance,
  inputValue = VALUE_DEFAULT_STRING_LENGTH,
}) => {
  return chance.string({ length: inputValue, alpha: true, numeric: true, casing: 'lower' })
}

export const randomUppercaseLetters = ({
  chance = chanceInstance,
  inputValue = VALUE_DEFAULT_STRING_LENGTH,
}) => {
  return chance.string({ length: inputValue, alpha: true, casing: 'upper' })
}

export const randomUppercaseLettersDigits = ({
  chance = chanceInstance,
  inputValue = VALUE_DEFAULT_STRING_LENGTH,
}) => {
  return chance.string({ length: inputValue, alpha: true, numeric: true, casing: 'upper' })
}

export const randomSample = ({
  chance = chanceInstance,
  inputValue = VALUE_DEFAULT_SAMPLE_OPTIONS,
}) => {
  const sampleSet = inputValue.split(',')
  return sampleSet[chance.natural({ max: sampleSet.length - 1 })]
}

export const randomName = ({ chance = chanceInstance }) => {
  return chance.name()
}

export const randomStreetAddress = ({ chance = chanceInstance }) => {
  return chance.address()
}

export const randomCity = ({ chance = chanceInstance }) => {
  return chance.city()
}

export const randomCountryCode = ({ chance = chanceInstance }) => {
  return chance.country()
}

export const randomCountryName = ({ chance = chanceInstance }) => {
  return chance.country({ full: true })
}

export const randomPhoneNumber = ({ chance = chanceInstance }) => {
  return chance.phone()
}

export const randomEmail = ({ chance = chanceInstance }) => {
  return chance.email()
}

export const randomIP = ({ chance = chanceInstance }) => {
  return chance.ip()
}

export const randomIPv6 = ({ chance = chanceInstance }) => {
  return chance.ipv6()
}

export const randomUrl = ({ chance = chanceInstance }) => {
  return chance.url()
}

export const randomHexColor = ({ chance = chanceInstance }) => {
  return chance.color({ format: 'hex', casing: 'upper' })
}

export const randomRgbColor = ({ chance = chanceInstance }) => {
  return chance.color({ format: 'rgb' })
}

export const randomIban = ({ chance = chanceInstance }) => {
  return chance.iban()
}

export const randomRegEx = ({ inputValue }) => {
  return new RandExp(inputValue).gen()
}
