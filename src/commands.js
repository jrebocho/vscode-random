import {
  randomByte,
  randomShort,
  randomInt,
  randomString
} from './random'
import { isNumber } from './validations'
import * as constants from './constants'

export const extensionCommands = [
  { key: constants.CMD_KEY_RANDOM_BYTE, callback: randomByte },
  { key: constants.CMD_KEY_RANDOM_SHORT, callback: randomShort },
  { key: constants.CMD_KEY_RANDOM_INT, callback: randomInt }
]

export const extensionCommandsWithInput = [
  {
    key: constants.CMD_KEY_RANDOM_STRING_CUSTOM_LENGTH,
    callback: randomString,
    prompt: constants.MSG_ENTER_STRING_LENGTH,
    validation: isNumber,
    errorMsg: constants.MSG_INPUT_VALUE_MUST_BE_NUMBER
  }
]
