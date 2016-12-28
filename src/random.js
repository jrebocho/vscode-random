import Chance from 'chance'
const chance = new Chance()

const DEFAULT_STRING_LENGTH = 10

export const randomByte = () => {
  return chance.integer({min: 0, max: 255}).toString()
}

export const randomString = (length = DEFAULT_STRING_LENGTH) => {
  return chance.word({length})
}
