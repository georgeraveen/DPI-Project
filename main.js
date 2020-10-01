const typingArea = document.querySelector("#typing-area");
const clearButton = document.querySelector("#clear-btn");

function clear(){

    typingArea.value = "";
    typingArea.style.fontSize="80px";
    typingArea.style.fontWeight = "bolder";
}

function isOperator(val){

    switch(val){
        case "+":
        case "-":
        case "*":
        case "/":
        case ".":
            return true;
        default:
            return false;
    }
}

function evaluate(){

    let operators = typingArea.value.replace(/\d/g,'');
    operators = operators.replace(/\./g,"");
    operators = operators.split("");
    let operands = typingArea.value.replace(/\+|\*|\-|\//g," ");
    operands= operands.split(" ");
    operands = operands.map(Number);

    if(operators.length>=operands.length){
        alert("Invalid expression !");
        return;
    }

    while(operators.length != 0){

        while(operators.includes("*")){
            let index = operators.indexOf("*");
            let result = operands[index] * operands[index+1];
            operands.splice(index,2,result);
            operators.splice(index,1);
        }

        while(operators.includes("/")){
            let index = operators.indexOf("/");
            let result = operands[index] / operands[index+1];
            operands.splice(index,2,result);
            operators.splice(index,1);
        }

        while(operators.includes("+")){
            let index = operators.indexOf("+");
            let result = operands[index] + operands[index+1];
            operands.splice(index,2,result);
            operators.splice(index,1);
        }

        while(operators.includes("-")){
            let index = operators.indexOf("-");
            let result = operands[index] - operands[index+1];
            operands.splice(index,2,result);
            operators.splice(index,1);
        }

    }

    typingArea.style.fontSize = "60px";
    typingArea.style.fontWeight = "normal";
    typingArea.value += "=\n"+operands[0];

}

function digitClick(val){

    let textEntered = typingArea.value;
    let prevOperators = typingArea.value.replace(/\d/g,'');
    prevOperators = prevOperators.split("");

    if(val === "C"){
        clear();
    }else if(!isNaN(val)){
        textEntered += val;
    }else if(val == "="){
        evaluate();
        return;
    }else if(isOperator(val)){
        
        if(textEntered.length == 0){
            alert("Please enter a valid expression !");
        }else if(prevOperators[prevOperators.length-1] == "." && val == "."){
            //Do nothing
        }else if(isOperator(textEntered[textEntered.length-1])){
            
            let tempOperator = textEntered[textEntered.length-1];
            textEntered = textEntered.substring(0,textEntered.length-1);
            prevOperators = textEntered.replace(/\d/g,'');
            
            if(prevOperators[prevOperators.length-1] == "." && val == "."){
                val = tempOperator;
            }

            textEntered += val;

        }else if(!isNaN(typingArea.value[typingArea.value.length-1])){
            textEntered += val;
        }
    }else{
        alert("Please enter a valid expression !");
    }
    typingArea.value=textEntered;
}

function keyboardPress(event,val){

    let textEntered = typingArea.value;
    let prevOperators = typingArea.value.replace(/\d/g,'');

    if(isOperator(val)){

        if(prevOperators[prevOperators.length-1] == "." && val == "."){
            event.preventDefault();
        }else if(textEntered.length == 0){
            alert("Please enter a valid expression !");
        }else if(isOperator(textEntered[textEntered.length-1])){
            
            let tempOperator = textEntered[textEntered.length-1];
            textEntered = textEntered.substring(0,textEntered.length-1);
            prevOperators = textEntered.replace(/\d/g,'');

            if(prevOperators[prevOperators.length-1] == "." && val == "."){
                event.preventDefault();
                typingArea.value = textEntered + tempOperator;
                return;
            }

            typingArea.value = textEntered;

        }
    }else if(isNaN(val)){
        alert("Please enter a valid expression !");
        event.preventDefault();
    }
}

document.addEventListener("click",function(event){

    typingArea.focus();
    digitClick(event.target.innerHTML);

});

document.addEventListener("keyup",function(e){

    if(e.key == "Escape"){
        e.preventDefault();
        clear();
    }

});

document.addEventListener("keypress",function(e){

    if(e.code == "Enter"){
        e.preventDefault();
        evaluate();
    }else if(e.code == "Space"){
        e.preventDefault();   
    }else{
        keyboardPress(e,e.key);
    }

});

clearButton.addEventListener("click",clear);
