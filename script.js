const p1 = {
    score: 0,
    button: document.querySelector('#p1Scored'),
    display: document.querySelector('#p1Total')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Scored'),
    display: document.querySelector('#p2Total')
}

const resetBtn = document.querySelector('#reset');
const select = document.querySelector('#game-amount');

let winningScore = 5;
let isGameOver = false;

p1.button.addEventListener('click', () => {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
})

resetBtn.addEventListener('click', reset);

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.style.color = 'lightgreen';
            opponent.display.style.color = 'tomato';

            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

function reset() {
    isGameOver = false;

    for (let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.style.color = 'white';
        p.button = false;
    }
}

select.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})
