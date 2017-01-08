import {
  resetSeed,
  randomByte,
  randomShort,
  randomInt,
  randomLong,
  randomGuid,
  randomString,
  randomName,
  randomCity,
  randomCountryCode,
  randomCountryName,
  randomStreetAddress,
  randomPhoneNumber,
  randomEmail
} from './random'
import { isNumber } from './validations'
import * as constants from './constants'

export const extensionCommands = [
  { key: constants.CMD_KEY_RANDOM_BYTE, callback: randomByte },
  { key: constants.CMD_KEY_RANDOM_SHORT, callback: randomShort },
  { key: constants.CMD_KEY_RANDOM_INT, callback: randomInt },
  { key: constants.CMD_KEY_RANDOM_LONG, callback: randomLong },
  { key: constants.CMD_KEY_RANDOM_GUID, callback: randomGuid },
  { key: constants.CMD_KEY_RANDOM_NAME, callback: randomName },
  { key: constants.CMD_KEY_RANDOM_CITY, callback: randomCity },
  { key: constants.CMD_KEY_RANDOM_COUNTRY_CODE, callback: randomCountryCode },
  { key: constants.CMD_KEY_RANDOM_COUNTRY_NAME, callback: randomCountryName },
  { key: constants.CMD_KEY_RANDOM_STREET_ADDRESS, callback: randomStreetAddress },
  { key: constants.CMD_KEY_RANDOM_PHONE_NUMBER, callback: randomPhoneNumber },
  { key: constants.CMD_KEY_RANDOM_EMAIL, callback: randomEmail }
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

export const extensionExecCommands = [
  {
    key: constants.CMD_KEY_RESET_SEED,
    callback: resetSeed,
    prompt: constants.MSG_ENTER_SEED,
    placeHolder: constants.MSG_LEAVE_EMPTY_FOR_DEFAULT,
    errorMsg: constants.MSG_SEED_RESET_ERROR,
    infoMsg: constants.MSG_SEED_RESET
  }
]
