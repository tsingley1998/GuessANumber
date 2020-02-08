console.log(47);

function guessNum() {
    let num = document.getElementById('number').value;
    let result = document.getElementById('result');

    if (num == 47 ) {
        result.innerText = "You guessed correctly!";
        document.body.style.backgroundColor = 'lightBLue';
        result.style.fontSize = "200%";
        result.style.fontFamily = "Lemonada, cursive";
    }

    if (num < 1 || num > 100) {
        result.innerText = "That number is not between 1 and 100, try again!";
    }

    if (num < 47 && num >= 1) {
        result.innerText = "Your guess was too low, try again!";
    }

    if (num > 47 && num <= 100) {
        result.innerText = "Your guess was too high, try again!";
    }

    if (isNaN(num)) {
        result.innerText = "That is not a number, try again!";
    }
}