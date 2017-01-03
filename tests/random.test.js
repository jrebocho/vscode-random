import {
  randomByte,
  randomShort,
  randomInt,
  randomLong,
  randomString
} from '../src/random'

describe('>>>>> Random Generators Tests', () => {
  describe('.randomByte', () => {
    it('generates a number between 0 and 255', () => {
      const random = randomByte()

      expect(+random).toBeGreaterThan(0)
      expect(+random).toBeLessThan(256)
    })
  })

  describe('.randomShort', () => {
    it('generates a number between 0 and 65535', () => {
      const random = randomShort()

      expect(+random).toBeGreaterThan(0)
      expect(+random).toBeLessThan(65535)
    })
  })

  describe('.randomInt', () => {
    it('generates a number between 0 and 4294967295', () => {
      const random = randomInt()

      expect(+random).toBeGreaterThan(0)
      expect(+random).toBeLessThan(4294967295)
    })
  })

  describe('.randomLong', () => {
    it('generates a number between 0 and 9007199254740992', () => {
      const random = randomLong()

      expect(+random).toBeGreaterThan(0)
      expect(+random).toBeLessThan(9007199254740992)
    })
  })

  describe('.randomString', () => {
    it('generates a string with random characters of the expected length', () => {
      const expectedLength = 32
      const random = randomString(expectedLength)

      expect(random.length).toEqual(expectedLength)
    })

    it('generates a string without blank spaces', () => {
      const random = randomString(50)

      expect(random).not.toContain(' ')
    })

    describe('when no length is passed as argument', () => {
      it('generates a string with random characters with length equal to 10', () => {      
        const random = randomString()

        expect(random.length).toEqual(10)
      })
    })
  })
})
