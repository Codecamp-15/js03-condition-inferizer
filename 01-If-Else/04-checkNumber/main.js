// let num = prompt('which number?');
// if (num>0) alert('Positive number');
// else if (num == 0) alert('Zero');
// else if (num < 0) alert('Negative number');
// else alert('Invalid number');


let num2 = prompt('which number?');
//Guard-Clause
if (num2 === null || num2.trim() === '' || isNaN(num2)){
    alert('Invalid number')
}