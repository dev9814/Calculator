var buttons = document.getElementsByClassName("button");
var display = document.getElementById("screen");

var operand1 = 0;
var operand2 = null;
var operator = null;
var ans = 0;

var calculator = function(){

    var value = this.getAttribute('data-value');

    if(value == '+'){
        operator = '+';

        if(operand1==0){
            operand1 = parseFloat(display.textContent);
        }
        else{
            operand1 = ans;
        }

        display.innerText = "";
        
    }
    else if(value == '-'){
        operator = '-';

        if(operand1==0){
            operand1 = parseFloat(display.textContent);
        }
        else{
            operand1 = ans;
        }

        display.innerText = "";
        
    }
    else if(value == '*'){
        operator = '*';

        if(operand1==0){
            operand1 = parseFloat(display.textContent);
        }
        else{
            operand1 = ans;
        }

        display.innerText = "";
        
    }
    else if(value == '/'){
        operator = '/';

        if(operand1==0){
            operand1 = parseFloat(display.textContent);
        }
        else{
            operand1 = ans;
        }

        display.innerText = "";
        
    }
    else if(value == '%'){
        operator = '%';

        if(operand1==0){
            operand1 = parseFloat(display.textContent);
        }
        else{
            operand1 = ans;
        }

        display.innerText = "";
        
    }
    else if(value == 'ac'){
        operator = 'ac';

        operand1 = 0;
        operand2 = 0;
       

        display.innerText = "";
        
    }
    else if(value == '='){
        operand2 = parseFloat(display.textContent);
        if(operator == '/'){

            ans = operand1/operand2;
            display.innerText = ans;
            console.log(ans);

        }
        else if(operator == '+'){

            ans = operand1+operand2;
            display.innerText = ans;
            console.log(ans);

        }
        else if(operator == '-'){

            ans = operand1-operand2;
            display.innerText = ans;
            console.log(ans);

        }
        else if(operator == '*'){

            ans = operand1*operand2;
            display.innerText = ans;
            console.log(ans);

        }
        else if(operator == '%'){

            ans = (operand1/100)*operand2;
            display.innerText = ans;
            console.log(ans);

        }
    }
    else{
        display.innerText += value;
    }
}

for(var i=0;i<buttons.length;i++){

    buttons[i].addEventListener('click', calculator);
}





