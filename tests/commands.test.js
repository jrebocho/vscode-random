import { extensionCommands, extensionCommandsWithInput } from '../src/commands'
import {
  randomByte,
  randomShort,
  randomString
} from '../src/random'
import { isNumber } from '../src/validations'

describe('>>>>> Extension Commands Tests', () => {
  describe('Simple extension commands', () => {
    it('has the expected number of commands', () => {
      expect(extensionCommands).toHaveLength(2)
    })

    it('has the randomByte command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomByte', callback: randomByte })
    })

    it('has the randomShort command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomShort', callback: randomShort })
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
