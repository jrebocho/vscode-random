import Chance from 'chance'
const chance = new Chance()

export const randomByte = () => {
  return chance.integer({min: 0, max: 255}).toString()
}
