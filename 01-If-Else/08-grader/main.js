let score = prompt('your score?');

if((score < 0 || score > 100) || score == null || score.trim() == '' || isNaN(score)){
    alert('please enter your score again (0-100).')
}
    else if(score >= 80){
        alert('A');
    }
    else if(score >= 70){
        alert('B');
    }
    else if(score >= 60){
        alert('C');
    }
    else if(score >= 50){
        alert('D');
    }
    else {
        alert('F');
    }
 


    