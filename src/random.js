import Chance from 'chance'
import { VALUE_DEFAULT_STRING_LENGTH } from './constants'

const chance = new Chance()

export const randomByte = () => {
  return chance.integer({min: 0, max: 255}).toString()
}

export const randomString = (length = VALUE_DEFAULT_STRING_LENGTH) => {
  return chance.word({length})
}
