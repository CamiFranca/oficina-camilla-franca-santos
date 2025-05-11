class Queue {
  elements

  constructor(){
    this.elements = []
  }
  
  size(){
    
    let queueSize = this.elements.length
    
    return queueSize
  }
  
  add(...item){

    this.elements.push(...item)
    return this.elements
  }

  peek(){
    let firstOne = []
    firstOne = this.elements.slice(0,1)
    console.log(this.elements)
    return firstOne
  }

  dequeue(){

    const itemRemovido = this.elements.shift()
    return itemRemovido
  }
}


module.exports = Queue