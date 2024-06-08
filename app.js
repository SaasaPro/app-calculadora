const calculator = document.getElementById('calculator');
const result = document.getElementById('result');
let calcs = [];

calculator.addEventListener('click', readButton);

function readButton(e) {
    if((e.target.getAttribute('type') === 'button') && (e.target.className !== ('operacion'))) {
        if(result.value === '0') {
            result.value = e.target.innerText;
        }else{
            result.value += e.target.innerText;
        }   
    }

    switch(e.target.id){
        case 'sumar':
            calcs.push(result.value);
            calcs.push('+');
            result.value = "";
            console.log(calcs);
            break;

        case 'restar':
            calcs.push(result.value);
            calcs.push('-');
            result.value = "";
            console.log(calcs);
            break;  

        case 'multiplicar':
            calcs.push(result.value);
            calcs.push('*');
            result.value = "";
            console.log(calcs);
            break;

        case 'dividir':
            calcs.push(result.value);
            calcs.push('/');
            result.value = "";
            break;

        case 'igual':
           
            calcs.push(result.value);
            console.log(calcs);
            result.value = eval(calcs.join(''));
            calcs = [];
            break;

        case 'clear':
            result.value = "0";
            calcs = [];
            break;
    }
}