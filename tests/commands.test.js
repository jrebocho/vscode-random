import { extensionCommands, extensionCommandsWithInput } from '../src/commands'
import {
  randomByte,
  randomShort,
  randomInt,
  randomLong,
  randomGuid,
  randomString
} from '../src/random'
import { isNumber } from '../src/validations'

describe('>>>>> Extension Commands Tests', () => {
  describe('Simple extension commands', () => {
    it('has the expected number of commands', () => {
      expect(extensionCommands).toHaveLength(5)
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
})
