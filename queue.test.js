const Queue = require('./queue')

describe('Queue', () => {

  let queue

  beforeEach(()=> {
    queue = new Queue()
  })
  it('Deve criar uma fila', () => {

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {

    queue.add("item1")
    queue.add("item2")
    expect(queue.size()).toEqual(2)


  })

  it('Deve ser capaz de adicionar um item na fila', () => {
   
    queue.add("paulo")
    expect(queue.elements).toContain("paulo")
  })

  it('Deve escolher o primeiro item da fila', () => {

    queue.add("rosa", "amarelo", "roxo", "azul")
    
    expect(queue.peek()).toContain("rosa")
    
  })

  it('Deve remover o primeiro item da fila', () => {
   
    queue.add("uva", "maçã", "limão", "pinha")

    expect(queue.dequeue()).toBe("uva")
  })

})