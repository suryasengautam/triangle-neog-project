const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn  = document.querySelector("#submit-answer-btn");
const outputE1 = document.querySelector("#output");
const correctAnswer = ["90","right angle"]
function calculateScore() {
    let index = 0;
    let score = 0;
    const formResult = new FormData(quizForm);
    for (let value of formResult.values()) {
        if (value === correctAnswer[index]) {
            score = score + 1
        }
        index = index + 1
    }
    outputE1.innerText = "your score is  " + score;

}
submitAnswerBtn.addEventListener("click",calculateScore)