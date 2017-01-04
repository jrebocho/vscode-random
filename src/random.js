import Chance from 'chance'
import { VALUE_DEFAULT_STRING_LENGTH } from './constants'

const chanceInstance = new Chance()

export const randomByte = ({chance = chanceInstance}) => {
  return chance.natural({max: 255}).toString()
}

export const randomShort = ({chance = chanceInstance}) => {
  return chance.natural({max: 65535}).toString()
}

export const randomInt = ({chance = chanceInstance}) => {
  return chance.natural({max: 4294967295}).toString()
}

export const randomLong = ({chance = chanceInstance}) => {
  return chance.natural().toString()
}

export const randomGuid = ({chance = chanceInstance}) => {
  return chance.guid()
}

export const randomString = ({chance = chanceInstance, inputValue = VALUE_DEFAULT_STRING_LENGTH}) => {
  return chance.word({length: inputValue})
}

export const randomName = ({chance = chanceInstance}) => {
  return chance.name()
}

export const randomStreetAddress = ({chance = chanceInstance}) => {
  return chance.address()
}

export const randomCity = ({chance = chanceInstance}) => {
  return chance.city()
}

export const randomPhoneNumber = ({chance = chanceInstance}) => {
  return chance.phone()
}

export const randomEmail = ({chance = chanceInstance}) => {
  return chance.email()
}
