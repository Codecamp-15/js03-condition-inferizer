let num1 = prompt('Number1?');
let num2 = prompt('Number2?');
let num3 = prompt('Number3?');

if (num1 > num2 && num1 > num3){
    if(num2 > num3) {
        alert(num1 + "," + num2 + "," + num3)
    }
    else{
        alert(num1 + "," + num3 + "," + num2)
    }
}
if (num2 > num1 && num2 > num3){
    if(num1 > num3) {
        alert(num2 + "," + num1 + "," + num3)
    }
    else{
        alert(num2 + "," + num3 + "," + num1)
    }
}
if (num3 > num1 && num3 > num2){
    if(num1 > num2) {
        alert(num3 + "," + num1 + "," + num2)
    }
    else{
        alert(num3 + "," + num2 + "," + num1)
    }
}
