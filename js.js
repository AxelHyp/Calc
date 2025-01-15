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

let firstNum = ""
let operation = ""
let secondNum = ""
let firstNumLock = false

function whatToDo (event) {
    switch(event.target.className) {
        case "":
            if (operation == "" ) {
                if (firstNumLock) {
                    firstNum = ""
                    firstNumLock = false
                }
                firstNum = parseInt(firstNum += event.target.innerText)
                document.querySelector(".screen").innerHTML = firstNum
            }
            else {
                secondNum = parseInt(secondNum += event.target.innerText)
                document.querySelector(".screen").innerHTML = secondNum
            }
            break;
        default:
        if (secondNum === "") {
            operation = event.target.innerText
            firstNumLock = true
        }
        else {
            firstNum = operate(firstNum, secondNum, operation)
            secondNum = ""
            operation = event.target.innerText
            document.querySelector(".screen").innerHTML = firstNum
        }
    }
}

function clear () {
    firstNum = ""
    firstNumLock = false
    secondNum = ""
    operation = ""
    screen.innerHTML = ""
}

function equal () {
    if (secondNum === "" && operation != "") {
        secondNum = firstNum
    }
    else if (operation == "") {
        return
    }

    firstNum = operate(firstNum, secondNum, operation)
    operation = ""
    secondNum = ""
    document.querySelector(".screen").innerHTML = firstNum
    
}

const screen = document.querySelector(".screen")



document.querySelectorAll("button").forEach((but) => {
    if (but.className != "eq" && but.className != "clear") {
    but.addEventListener("click", ((event) => whatToDo(event)))
}})

document.querySelector(".clear").addEventListener("click", (() => clear()));
document.querySelector(".eq").addEventListener("click", (() => equal()));


