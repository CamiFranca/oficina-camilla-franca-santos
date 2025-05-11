const soma = require('./soma')

describe('Soma', () => {
  it('deverá somar dois números inteiros', () => {


    expect(soma(5,25)).toBe(30)
   
  })
})