class Calculator {
    constructor(secondLineTextElement, firstLineTextElement) {
      this.secondLineTextElement = secondLineTextElement
      this.firstLineTextElement = firstLineTextElement
      this.clear()
    }
  
    clear() {
      this.firstLine = ''
      this.secondLine = ''
      this.operation = undefined
    }
  
    delete() {
      this.firstLine = this.firstLine.toString().slice(0, -1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.firstLine.includes('.')) return
      this.firstLine = this.firstLine.toString() + number.toString()
    }
  
    chooseOperation(operation) {
      if (this.firstLine === '') return
      if (this.secondLine !== '') {
        this.compute()
      }
      this.operation = operation
      this.secondLine = this.firstLine
      this.firstLine = ''
    }
  
    compute() {
      let computation
      const prev = parseFloat(this.secondLine)
      const current = parseFloat(this.firstLine)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '/':
          computation = prev / current
          break
        default:
          return
      }
      this.firstLine = computation
      this.operation = undefined
      this.secondLine = ''
    }
  
    displayNumber(number) {
      const string = number.toString()
      const integer = parseFloat(string.split('.')[0])
      const decimal = string.split('.')[1]
      let integerDisplay
      if (isNaN(integer)) {
        integerDisplay = ''
      } else {
        integerDisplay = integer.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimal != null) {
        return `${integerDisplay}.${decimal}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.firstLineTextElement.innerText =
        this.displayNumber(this.firstLine)
      if (this.operation != null) {
        this.secondLineTextElement.innerText =
          `${this.displayNumber(this.secondLine)} ${this.operation}`
      } else {
        this.secondLineTextElement.innerText = ''
      }
    }
  }
  
  const on = document.getElementById('on')
  const numberButtons = document.querySelectorAll('[num]')
  const operationButtons = document.querySelectorAll('[op]')
  const equalsButton = document.querySelector('[equ]')
  const cButton = document.querySelector('[c]')
  const ceButton = document.querySelector('[ce]')
  const secondLineTextElement = document.querySelector('[first]')
  const firstLineTextElement = document.querySelector('[second]')
  
  const calculator = new Calculator(secondLineTextElement, firstLineTextElement)
  
  

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  cButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  ceButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })