const { somar } = require("./script")

describe("Função somar", () => {

  test("Deve somar 2 + 2 corretamente", () => {

    expect(somar(2, 2)).toBe(4)

  })

  test("Deve somar números negativos", () => {

    expect(somar(-2, -2)).toBe(-4)

  })

  test("Deve somar valores com zero", () => {

    expect(somar(0, 5)).toBe(5)

  })

})