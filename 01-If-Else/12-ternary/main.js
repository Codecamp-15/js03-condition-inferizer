// let score = prompt ('your score?')

// if (score >= 0 && score <= 100);
// else if(score >= 80 && score <= 100) alert('A');
// else if(score >= 60 && score <= 79) alert('B');
// else if(score >= 60 && score <= 69) alert('C');
// else if(score >= 50 && score <= 59) alert('D');
// else alert('F');

let score = prompt ('your score?')
// (score >= 0 && score <= 100) ? alert('invalid score')
(score >= 80 && score <= 100) ? alert('A')
:(score >=70 && score <=79) ? alert('B')
:(score >=60 && score <=69) ? alert('C')
:(score >=50 && score <=59) ? alert('D') : alert('F');
