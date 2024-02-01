
// in button function start with empty num string
// then when button is pressed concatinate to num string
// when operation function is pressed append to num list and empty num string and use operation on last number entered

let total = 0;
let currentNum = 0;
let operationChange = false;
let lastOperation = '';
let currentOperation = '';
let start = true;

const numberScreen = document.querySelector('.number')
let numberRepresentation = ''
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");

//operations
const addBtn = document.querySelector(".plus");
const subtractBtn = document.querySelector(".minus");
const multiplyBtn = document.querySelector(".multiply")
const divideBtn = document.querySelector(".divide")
const clearBtn = document.querySelector(".C")
const plusMinus = document.querySelector(".plusMinus")

oneBtn.addEventListener('click', () => {
    console.log("one button clicked")
    numberRepresentation = numberRepresentation + '1'
    numberScreen.textContent = numberRepresentation

})

twoBtn.addEventListener('click', () => {
    console.log("two button clicked")
    numberRepresentation = numberRepresentation + '2'
    numberScreen.textContent = numberRepresentation
})
threeBtn.addEventListener('click', () => {
    console.log("one button clicked")
    numberRepresentation = numberRepresentation + '3'
    numberScreen.textContent = numberRepresentation
})
fourBtn.addEventListener('click', () => {
    console.log("one button clicked")
    numberRepresentation = numberRepresentation + '4'
    numberScreen.textContent = numberRepresentation
})
fiveBtn.addEventListener('click', () => {
    console.log("one button clicked")
    numberRepresentation = numberRepresentation + '5'
    numberScreen.textContent = numberRepresentation
})
sixBtn.addEventListener('click', () => {
    console.log("one button clicked")
    numberRepresentation = numberRepresentation + '6'
    numberScreen.textContent = numberRepresentation
})
sevenBtn.addEventListener('click', () => {
    console.log("one button clicked")
    numberRepresentation = numberRepresentation + '7'
    numberScreen.textContent = numberRepresentation
})
eightBtn.addEventListener('click', () => {
    console.log("one button clicked")
    numberRepresentation = numberRepresentation + '8'
    numberScreen.textContent = numberRepresentation
})
nineBtn.addEventListener('click', () => {
    console.log("one button clicked")
    numberRepresentation = numberRepresentation + '9'
    numberScreen.textContent = numberRepresentation
})

function operate(num1, num2, op) {
     if (op == '+') {
        return num1 + num2;
     }
     else if (op == '-') {
        return num1 - num2;
     }
     else if (op == '*') {

        return num1 * num2;
     }
     else if (op == '/') {
        return num1 / num2;
     }
}


//operation events
addBtn.addEventListener('click', () => {
     currentOperation == '+'

     if (lastOperation != currentOperation) {
        total = operate(total, Number(numberRepresentation), lastOperation)
     }
     else {
        let currNumber = Number(numberRepresentation)

        //add current number to overall total
        total = total + currNumber
     }

    // set num representation to empty for new input by user
    numberRepresentation = ''

    //set screen number to current total
    numberScreen.textContent = total.toString();
    lastOperation = '+'




})

subtractBtn.addEventListener('click', () => {
    currentOperation == '-'
    if (lastOperation != currentOperation) {
        total = operate(total, Number(numberRepresentation), lastOperation)
     }
     else {
        if (total == 0) {
            total = Number(numberRepresentation)
        }
        else {
            total = total - Number(numberRepresentation)
        }
     }

   numberRepresentation = ''
   numberScreen.textContent = total.toString();
   lastOperation = '-'



})

divideBtn.addEventListener('click', () => {
    currentOperation == '/'
    if (lastOperation == '/') {
        let currNumber = Number(numberRepresentation)

        //divide current number to overall total
        total = total / currNumber
    }
    else {
        total = operate(total, Number(numberRepresentation), lastOperation)
        lastOperation = '/'
    }

   numberRepresentation = ''
   numberScreen.textContent = total.toString();



})

multiplyBtn.addEventListener('click', () => {
    currentOperation == '*'
     if (lastOperation != currentOperation) {
        total = operate(total, Number(numberRepresentation), lastOperation)
        console.log('here')
     }
     else {
        let currNumber = Number(numberRepresentation)

        //add current number to overall total
        total = total * currNumber
     }

    // set num representation to empty for new input by user
    numberRepresentation = ''

    //set screen number to current total
    numberScreen.textContent = total.toString();
    lastOperation = '*'



})

clearBtn.addEventListener('click', () => {
    numberRepresentation = ''
    numberScreen.textContent = '0';
    total = 0
    lastOperation = ''
    start = true;
    currentOperation == ''

})

plusMinus.addEventListener('click', () => {
    let currNumber = Number(numberRepresentation)
    currNumber = currNumber * -1
    numberScreen.textContent = currNumber.toString();
    numberRepresentation = currNumber.toString()
    console.log(numberRepresentation)

})
