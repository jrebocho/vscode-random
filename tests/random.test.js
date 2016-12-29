import {
  randomByte,
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
