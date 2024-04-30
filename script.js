alert('Informe dois números para realizar os cálculos:')

let firstNumber = prompt('Informe o primeiro número:')
let secondNumber = prompt('Informe o segundo número:')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sum = firstNumber + secondNumber
let subtraction = firstNumber - secondNumber
let multiplication = firstNumber * secondNumber
let division = firstNumber / secondNumber
division = division.toFixed(2)
let remainder = firstNumber % secondNumber

let isSumEven = sum % 2 === 0
let isNumbersEquals = firstNumber === secondNumber

alert(`A soma dos números é: ${sum}`)
alert(`A subtração dos números é: ${subtraction}`)
alert(`A multiplicação dos números é: ${multiplication}`)
alert(`A divisão dos números é: ${division}`)
alert(`O resto da divisão dos números é: ${remainder}`)
alert(`A soma dos números é ${isSumEven ? 'par' : 'ímpar'}: ${sum}`)
alert(`Os números inseridos são ${isNumbersEquals ? 'iguais' : 'diferentes'}`)