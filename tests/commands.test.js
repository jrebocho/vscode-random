import { extensionCommands } from '../src/commands'
import { randomByte } from '../src/random'

describe('>>>>> Extension Commands Tests', () => {
  it('has the expected number of commands§', () => {
    expect(extensionCommands).toHaveLength(1)
  })

  it('has the randomByte command in the list', () => {
    expect(extensionCommands).toContainEqual({ key: 'extension.randomByte', callback: randomByte })
  })
})
