import { chance } from '../mocks/chance'
import {
  randomByte,
  randomShort,
  randomInt,
  randomLong,
  randomGuid,
  randomString,
  randomName
} from '../src/random'

describe('>>>>> Random Generators Tests', () => {
  describe('.randomByte', () => {
    beforeEach(() => {
      chance.natural.mockClear()
    })

    it('calls the lib natural function with the correct max param', () => {
      randomByte({chance})

      expect(chance.natural).toBeCalledWith({max: 255})
    })

    it('returns a string', () => {
      const random = randomByte({chance})

      expect(typeof (random) === 'string').toBeTruthy()
    })
  })

  describe('.randomShort', () => {
    beforeEach(() => {
      chance.natural.mockClear()
    })

    it('calls the lib natural function with the correct max param', () => {
      randomShort({chance})

      expect(chance.natural).toBeCalledWith({max: 65535})
    })

    it('returns a string', () => {
      const random = randomShort({chance})

      expect(typeof (random) === 'string').toBeTruthy()
    })
  })

  describe('.randomInt', () => {
    beforeEach(() => {
      chance.natural.mockClear()
    })

    it('calls the lib natural function with the correct max param', () => {
      randomInt({chance})

      expect(chance.natural).toBeCalledWith({max: 4294967295})
    })

    it('returns a string', () => {
      const random = randomInt({chance})

      expect(typeof (random) === 'string').toBeTruthy()
    })
  })

  describe('.randomLong', () => {
    beforeEach(() => {
      chance.natural.mockClear()
    })

    it('calls the lib natural function with the correct max param', () => {
      randomLong({chance})

      expect(chance.natural).toBeCalledWith()
    })

    it('returns a string', () => {
      const random = randomLong({chance})

      expect(typeof (random) === 'string').toBeTruthy()
    })
  })

  describe('.randomGuid', () => {
    beforeEach(() => {
      chance.guid.mockClear()
    })

    it('calls the lib guid function', () => {
      randomGuid({chance})

      expect(chance.guid).toBeCalledWith()
    })
  })

  describe('.randomString', () => {
    beforeEach(() => {
      chance.word.mockClear()
    })

    it('calls the lib word function with the correct default length', () => {
      randomString({chance})

      expect(chance.word).toBeCalledWith({length: 10})
    })

    it('calls the lib word function with the correct length param', () => {
      randomString({chance, inputValue: 32})

      expect(chance.word).toBeCalledWith({length: 32})
    })
  })

  describe('.randomName', () => {
    beforeEach(() => {
      chance.name.mockClear()
    })

    it('calls the lib name function', () => {
      randomName({chance})

      expect(chance.name).toBeCalledWith()
    })
  })
})
