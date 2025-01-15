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
