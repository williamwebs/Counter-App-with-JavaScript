let display, display2, score, activePlayer, sum, sum2, roundScore
display = document.querySelector('.score-0')
display2 = document.querySelector('.score-1')

const reset = () =>{
    score = [0,0]
    activePlayer = 0
    roundScore = 0

    display.textContent = 0
    display2.textContent = 0

    document.querySelector('.player-0').classList.remove('.winner')
    document.querySelector('.player-1').classList.remove('.winner')
    document.querySelector('.player-0').classList.add('active')

    document.querySelector('.name-0').textContent = 'Home'
    document.querySelector('.name-1').textContent = 'Guest'
}
reset()


function calc (value) {
    // update the value of the button to the UI
    roundScore += value
    score[activePlayer] += roundScore
    document.querySelector('.score-' + activePlayer).textContent = score[activePlayer];
    

    if (score[activePlayer] >= 20) {
        document.querySelector('.player-' + activePlayer).classList.add('winner')
        document.querySelector('.player-' + activePlayer).classList.remove('active')
        document.querySelector('.name-' + activePlayer).textContent = 'WINNER'
    } else {
        // toggle the active class
    nextPlayer()
    }
}

function calcu(value) {
    // update the value of the button to the UI
    roundScore += value
    score[activePlayer] += roundScore
    document.querySelector('.score-' + activePlayer).textContent = score[activePlayer];
 
    if (score[activePlayer] >= 20) {
        document.querySelector('.player-' + activePlayer).classList.add('winner')
        document.querySelector('.player-' + activePlayer).classList.remove('active')
        document.querySelector('.name-' + activePlayer).textContent = 'WINNER'

    } else {
        // toggle the active class
    nextPlayer()
    }
}

const nextPlayer = ()=> {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0

    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
}











// let sum, sum2
// sum = 0
// sum2 = 0

// function calc(e) {
//     sum += e
//     display.textContent = sum
//     if (display.textContent === 20) {
//         init()
//     }
// }

// function calcu(e) {
//     sum2 += e
//     display2.textContent = sum2
// }


