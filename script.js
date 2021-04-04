let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const screen = document.querySelector('.calculator-screen')

const updateScreen = (number)=>{
	screen.value = number
}

const inputNumber = (number)=>{
	if (currentNumber == '0'){
		currentNumber = number
	}else{
		currentNumber += number
	}
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number)=>{
	number.addEventListener("click", ()=>{
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

const inputOperator = (operator)=>{
	if(calculationOperator == ''){
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber = '0'
}

const operators = document.querySelectorAll(".operator")
operators.forEach((operator)=>{
	operator.addEventListener("click", ()=>{
		inputOperator(event.target.value)
	})
})

const calculate = ()=>{
	let result = ''
	switch(calculationOperator){
		case "+":
		result = parseFloat(prevNumber) + parseFloat(currentNumber)
		break
		case '-':
		result = prevNumber - currentNumber
		break
		case '*':
		result = prevNumber * currentNumber
		break
		case '/':
		result = prevNumber / currentNumber
		break
		case '%':
		result = prevNumber % currentNumber
		break
		default:
		result = currentNumber
		break
	}
	currentNumber = result
	calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', ()=>{
	calculate()
	updateScreen(currentNumber)
})

const clearAll = ()=>{
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', ()=>{
	clearAll()
	updateScreen(currentNumber)
})

const inputDecimal = (dot)=>{
	if (currentNumber.includes('.')){
	}else{
		currentNumber += dot
	}
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', ()=>{
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})