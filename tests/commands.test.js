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
  randomGuid,
  randomString,
  randomName,
  randomCity,
  randomStreetAddress,
  randomPhoneNumber,
  randomEmail
} from '../src/random'
import { isNumber } from '../src/validations'

describe('>>>>> Extension Commands Tests', () => {
  describe('Simple extension commands', () => {
    it('has the expected number of commands', () => {
      expect(extensionCommands).toHaveLength(10)
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

    it('has the randomStreetAddress command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomStreetAddress', callback: randomStreetAddress })
    })

    it('has the randomPhoneNumber command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomPhoneNumber', callback: randomPhoneNumber })
    })

    it('has the randomEmail command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomEmail', callback: randomEmail })
    })
  })

  describe('Extension commands with input', () => {
    it('has the expected number of commands', () => {
      expect(extensionCommandsWithInput).toHaveLength(1)
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
