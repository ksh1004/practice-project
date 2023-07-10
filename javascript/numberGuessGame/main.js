let randomNum = 0
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');

playButton.addEventListener('click', play);

function pickRandomNumber() {
    randomNum = Math.floor(Math.random() * 100) + 1 // random 함수는 0 ~ 1 사이의 랜덤한 숫자를 뽑는 함수
    // randomNum은 1~100사이의 수

}

function play() {
    let userValue = userInput.value;
    if (userValue < randomNum) {
        resultArea.textContent = '숫자가 작습니다. UP!'
    }
    else if (userValue > randomNum) {
        resultArea.textContent = '숫자가 큽니다. DOWN!'
    }
    else {
        resultArea.textContent = '정답입니다!'
    }
}
pickRandomNumber();