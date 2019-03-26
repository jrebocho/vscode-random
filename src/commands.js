import {
  resetSeed,
  randomByte,
  randomShort,
  randomInt,
  randomLong,
  randomIntCustomRange,
  randomGuid,
  randomString,
  randomHash,
  randomSample,
  randomName,
  randomCity,
  randomCountryCode,
  randomCountryName,
  randomStreetAddress,
  randomPhoneNumber,
  randomEmail,
  randomIP,
  randomIPv6,
  randomUrl,
  randomHexColor,
  randomRgbColor
} from './random'
import { isNumber, isValidIntRange, isStringWithComma } from './validations'
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
  { key: constants.CMD_KEY_RANDOM_EMAIL, callback: randomEmail },
  { key: constants.CMD_KEY_RANDOM_IP, callback: randomIP },
  { key: constants.CMD_KEY_RANDOM_IP_V6, callback: randomIPv6 },
  { key: constants.CMD_KEY_RANDOM_URL, callback: randomUrl },
  { key: constants.CMD_KEY_RANDOM_HEX_COLOR, callback: randomHexColor },
  { key: constants.CMD_KEY_RANDOM_RGB_COLOR, callback: randomRgbColor }
]

export const extensionCommandsWithInput = [
  {
    key: constants.CMD_KEY_RANDOM_STRING_CUSTOM_LENGTH,
    callback: randomString,
    prompt: constants.MSG_ENTER_STRING_LENGTH,
    validation: isNumber,
    errorMsg: constants.MSG_INPUT_VALUE_MUST_BE_NUMBER
  },
  {
    key: constants.CMD_KEY_RANDOM_HASH_CUSTOM_LENGTH,
    callback: randomHash,
    prompt: constants.MSG_ENTER_HASH_LENGTH,
    placeHolder: constants.VALUE_DEFAULT_HASH_LENGTH,
    validation: isNumber,
    errorMsg: constants.MSG_INPUT_VALUE_MUST_BE_NUMBER
  },
  {
    key: constants.CMD_KEY_RANDOM_INTEGER_CUSTOM_RANGE,
    callback: randomIntCustomRange,
    prompt: constants.MSG_ENTER_INTEGER_RANGE,
    placeHolder: constants.MSG_INTEGER_RANGE_FORMAT,
    validation: isValidIntRange,
    errorMsg: constants.MSG_INPUT_VALUE_MUST_BE_VALID_RANGE
  },
  {
    key: constants.CMD_KEY_RANDOM_SAMPLE_FROM_INPUT,
    callback: randomSample,
    prompt: constants.MSG_ENTER_SAMPLE_INPUT,
    validation: isStringWithComma,
    errorMsg: constants.MSG_INPUT_VALUE_MUST_CONTAIN_COMMA
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
