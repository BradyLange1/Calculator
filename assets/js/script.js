var buttonNumEl = $(".button-number")
var buttonResetEl = $(".button-reset")
var buttonSymbolEl = $(".button-symbol")
var buttonEqualsEl = $(".button-equals")
var screenEl = $(".screen")

var equation = "0"
var symbol = ""
var firstNum = ""
var secondNum = ""

var operators = {
    '+' : function(a, b) { return a + b; },
    '-' : function(a, b) { return a - b; },
    '*' : function(a, b) { return a * b; },
    '/' : function(a, b) { return a / b; },
};

function updateScreen(){
    screenEl.text(equation)
}

buttonSymbolEl.on('click', function(e){
    firstNum = Number(equation)
    symbol = this.id
    equation = 0
})

buttonNumEl.on('click', function(e){
    buttonClicked = this.id
    if (equation == 0){
        equation = buttonClicked
    }else {
        equation += buttonClicked
    }
    if (buttonClicked == AC){
        resetScreen()
    }
    updateScreen()
})

buttonEqualsEl.on('click', function(e){
    secondNum = Number(equation)
    op = operators[symbol]
    equation = op(firstNum, secondNum)
    updateScreen()
})

buttonResetEl.on('click', function(e){
    equation = "0"
    updateScreen()
})