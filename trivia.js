
var myQues = ['What is the first letter of the alphabet?', 'How many days are in 1 year?', '2+2 is?'];
var myAns = ['a', '365', '4'];

function myQuiz() {
    var points = 0;

    for (var i = 0; i <myQues.length; i++) {
        var attempts = 3;
        var correct = false;

        while (attempts > 0 && !correct) {
            var ans = prompt("What is " + myQues[i]);
            if (ans === myAns[i]) {
                points += 1; // correct ans
                alert("Correct!");
                correct = true; // true
            } else {
                alert("Incorrect. Attempts left: " + (attempts - 1));
                attempts--;
            } 
        } 
    }

    return points; 
}

function displayScore(userScore) {
    const totalPoints = myQues.length; // points

    document.getElementById('score').textContent = `Your score: ${userScore}/${totalPoints}`;

    const percentage = (userScore / totalPoints) * 100;
    const roundedPercentage = Math.round(percentage * 100) / 100;

    document.getElementById('percentage').textContent = `Your percentage: ${roundedPercentage}%`;
}
