let randomNum = 0
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button')
let chances = 5
let gameOver = false
let chanceArea = document.getElementById('chance-area')
let history = []

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset)
userInput.addEventListener('focus', function () {
    userInput.value = ''
})

function pickRandomNumber() {
    randomNum = Math.floor(Math.random() * 100) + 1 // random 함수는 0 ~ 1 사이의 랜덤한 숫자를 뽑는 함수
    // randomNum은 1~100사이의 수

}

function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = '1과 100사이 값을 입력하세요.'
        return
    }

    if (history.includes(userValue)) {
        resultArea.textContent = '이미 입력한 숫자입니다. 다른 숫자를 입력하세요.'
        return
    }

    chances--;
    chanceArea.textContent = `남은기회: ${chances}번` // 동적인 값을 주기 위해서는 backtick(`) 키를 사용

    if (userValue < randomNum) {
        resultArea.textContent = '숫자가 작습니다. UP!'
    }
    else if (userValue > randomNum) {
        resultArea.textContent = '숫자가 큽니다. DOWN!'
    }
    else {
        resultArea.textContent = '정답입니다!'
        gameOver = true
    }

    history.push(userValue)

    if (chances < 1) {
        gameOver = true
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }
}

function reset() {
    userInput.value = ''
    pickRandomNumber()
    resultArea.textContent = '숫자를 입력하세요.'
}

pickRandomNumber();