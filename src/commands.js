import {
  randomByte,
  randomString
} from './random'
import { isNumber } from './validations'

export const extensionCommands = [
  { key: 'extension.randomByte', callback: randomByte }
]

export const extensionCommandsWithInput = [
  {
    key: 'extension.randomStringCustomLength',
    callback: randomString,
    prompt: 'Enter the length of the string',
    validation: isNumber,
    errorMsg: 'The input value must be a number'
  }
]
