let score = prompt('your score?');

(score < 0 || score > 100) || score == null || score.trim() == '' || isNaN(score) ?
    alert('please enter your score again (0-100).')
:(score >= 80) ? alert('A')
    :(score >= 70) ? alert('B')
        :(score >= 60) ? alert('C')
            :(score >= 50) ? alert('D') : alert('F');

