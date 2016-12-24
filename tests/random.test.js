import { randomByte } from '../src/random'

describe('>>>>> Random Generators Tests', () => {
  it('generates a number between 0 and 255', () => {
    const random = parseInt(randomByte())

    expect(random).toBeGreaterThan(0)
    expect(random).toBeLessThan(256)
  })
})
