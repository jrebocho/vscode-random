import Chance from 'chance'
import { VALUE_DEFAULT_STRING_LENGTH } from './constants'

const chance = new Chance()

export const randomByte = () => {
  return chance.integer({min: 0, max: 255}).toString()
}

export const randomShort = () => {
  return chance.integer({min: 0, max: 65535}).toString()
}

export const randomInt = () => {
  return chance.integer({min: 0, max: 4294967295}).toString()
}

export const randomLong = () => {
  return chance.integer({min: 0, max: 9007199254740992}).toString()
}

export const randomString = (length = VALUE_DEFAULT_STRING_LENGTH) => {
  return chance.word({length})
}
