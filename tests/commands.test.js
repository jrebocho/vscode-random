import {
  extensionCommands,
  extensionCommandsWithInput,
  extensionExecCommands
} from '../src/commands'
import {
  resetSeed,
  randomByte,
  randomShort,
  randomInt,
  randomLong,
  randomIntCustomRange,
  randomGuid,
  randomString,
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
} from '../src/random'
import { isNumber, isValidIntRange } from '../src/validations'

describe('>>>>> Extension Commands Tests', () => {
  describe('Simple extension commands', () => {
    it('has the expected number of commands', () => {
      expect(extensionCommands).toHaveLength(17)
    })

    it('has the randomByte command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomByte', callback: randomByte })
    })

    it('has the randomShort command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomShort', callback: randomShort })
    })

    it('has the randomInt command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomInt', callback: randomInt })
    })

    it('has the randomLong command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomLong', callback: randomLong })
    })

    it('has the randomGuid command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomGuid', callback: randomGuid })
    })

    it('has the randomName command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomName', callback: randomName })
    })

    it('has the randomCity command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomCity', callback: randomCity })
    })

    it('has the randomCountryCode command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomCountryCode', callback: randomCountryCode })
    })

    it('has the randomCountryName command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomCountryName', callback: randomCountryName })
    })

    it('has the randomStreetAddress command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomStreetAddress', callback: randomStreetAddress })
    })

    it('has the randomPhoneNumber command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomPhoneNumber', callback: randomPhoneNumber })
    })

    it('has the randomEmail command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomEmail', callback: randomEmail })
    })

    it('has the randomIP command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomIP', callback: randomIP })
    })

    it('has the randomIPv6 command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomIPv6', callback: randomIPv6 })
    })

    it('has the randomUrl command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomUrl', callback: randomUrl })
    })

    it('has the randomHexColor command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomHexColor', callback: randomHexColor })
    })

    it('has the randomRgbColor command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomRgbColor', callback: randomRgbColor })
    })
  })

  describe('Extension commands with input', () => {
    it('has the expected number of commands', () => {
      expect(extensionCommandsWithInput).toHaveLength(2)
    })

    it('has the randomStringCustomLength command in the list', () => {
      expect(extensionCommandsWithInput).toContainEqual({
        key: 'extension.randomStringCustomLength',
        callback: randomString,
        prompt: 'Enter the length of the string',
        validation: isNumber,
        errorMsg: 'The input value must be a number'
      })
    })

    it('has the randomIntCustomRange command in the list', () => {
      expect(extensionCommandsWithInput).toContainEqual({
        key: 'extension.randomIntCustomRange',
        callback: randomIntCustomRange,
        prompt: 'Enter the integer range',
        placeHolder: 'MIN-MAX',
        validation: isValidIntRange,
        errorMsg: 'The input value must be a range with a min and max value separated by a hyphen'
      })
    })
  })

  describe('Extension commands with function execution', () => {
    it('has the expected number of commands', () => {
      expect(extensionExecCommands).toHaveLength(1)
    })

    it('has the resetSeed command in the list', () => {
      expect(extensionExecCommands).toContainEqual({
        key: 'extension.resetSeed',
        callback: resetSeed,
        prompt: 'Enter new random seed',
        placeHolder: 'Leave empty to use default options',
        errorMsg: 'Invalid random seed',
        infoMsg: 'Random seed was reset'
      })
    })
  })
})
