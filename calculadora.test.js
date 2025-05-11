const Calculadora = require('./calculadora')

describe('Calculadora', () => {

  let calculadora 

  beforeEach(()=> {
    calculadora = new Calculadora()
  })

  it('Deverá retornar a soma de dois números', () => {
    expect(calculadora.soma(5, 25)).toBe(30)
  })

  it('Deverá retornar a subtração de dois números', () => {
    expect(calculadora.subtrair(10, 2)).toBe(8)

  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    expect(calculadora.multiplicar(3, 3)).toBe(9)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    expect(calculadora.dividir(8, 4)).toBe(2)
  })
})