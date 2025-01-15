function operate (num1, num2, operator) {
    var out = "invalid"
    switch(operator) {
        case "+":
            out = num1 + num2
            break
        case "-":
            out = num1 - num2
            break
        case "*":
            out = num1 * num2
            break
        case "/":
            out = num1 / num2
            break
    }
    return Math.round(out*100)/100
}

let firstNum = 0
let operation = ""
let secondNum = 0

function whatToDo (event) {
    switch(event.target.className) {
        case "":
            if (operation == "") {
                firstNum = parseInt(firstNum += event.target.innerText)
                document.querySelector(".screen").innerHTML = firstNum
            }
            else {
                secondNum = parseInt(secondNum += event.target.innerText)
                document.querySelector(".screen").innerHTML = secondNum
            }
            break;
        default:
        if (secondNum == 0) {
            operation = event.target.innerText 
        }
        else {
            firstNum = operate(firstNum, secondNum, operation)
            secondNum = 0
            operation = event.target.innerText
            document.querySelector(".screen").innerHTML = firstNum
        }
    }
}

function clear () {
    firstNum = 0
    secondNum = 0
    operation = ""
    screen.innerHTML = ""
}

function equal () {
    if (secondNum == "" && operation != "") {
        secondNum = firstNum
    }
    else if (operation == "") {
        return
    }

    firstNum = operate(firstNum, secondNum, operation)
    operation = ""
    secondNum = 0
    document.querySelector(".screen").innerHTML = firstNum
    
}

const screen = document.querySelector(".screen")



document.querySelectorAll("button").forEach((but) => {
    if (but.className != "eq" && but.className != "clear") {
    but.addEventListener("click", ((event) => whatToDo(event)))
}})

document.querySelector(".clear").addEventListener("click", (() => clear()));
document.querySelector(".eq").addEventListener("click", (() => equal()));


