import { describe, expect, test, beforeAll } from "bun:test"

beforeAll(() => {
  // setup tests
})

describe("math", () => {
  test("addition", () => {
    expect(2 + 2).toBe(4)
    expect(7 + 13).toMatchSnapshot()
  })
})
