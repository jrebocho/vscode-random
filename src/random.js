import Chance from 'chance'
import { VALUE_DEFAULT_STRING_LENGTH } from './constants'

const chance = new Chance()

export const randomByte = () => {
  return chance.natural({max: 255}).toString()
}

export const randomShort = () => {
  return chance.natural({max: 65535}).toString()
}

export const randomInt = () => {
  return chance.natural({max: 4294967295}).toString()
}

export const randomLong = () => {
  return chance.natural().toString()
}

export const randomGuid = () => {
  return chance.guid()
}

export const randomString = (length = VALUE_DEFAULT_STRING_LENGTH) => {
  return chance.word({length})
}
