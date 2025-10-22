let questionArray = [];
let answerIsTreu = false;
let correctAnswer = 0;
let answerCount = -1;
let isCorrect = 0;
let answerButtonIsClicked = false;
let timer = 30;
let timerInterval = null;

const quizContainer = document.createElement("div");
const controlsContainer = document.createElement("div");
const controlLeftContainer = document.createElement("div");
const controlRightContainer = document.createElement("div");
const solutionButton = document.createElement("button");
const nextButton = document.createElement("button");
const scoreCount = document.createElement("p");
const countDownTimer = document.createElement("p");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

quizContainer.classList.add("quiz-container");
controlsContainer.classList.add("controls");
controlLeftContainer.classList.add("control-left");
controlRightContainer.classList.add("control-right");
scoreCount.classList.add("score-count");
solutionButton.classList.add("solution-btn");
nextButton.classList.add("next-btn");
countDownTimer.classList.add("countdown-timer");

solutionButton.innerText = "Lösung";
nextButton.innerText = "Weiter";
countDownTimer.innerText = `Zeit: ${timer}s`;

controlLeftContainer.appendChild(solutionButton);
controlLeftContainer.appendChild(nextButton);
controlRightContainer.appendChild(scoreCount);
controlRightContainer.appendChild(countDownTimer);

controlsContainer.appendChild(controlLeftContainer);
controlsContainer.appendChild(controlRightContainer);

async function loadQuestions() {
  try {
    const response = await fetch("./questions.json");
    questionArray = await response.json();
    console.log("Kérdések betöltve:", questionArray.length);
  } catch (error) {
    console.error("Hiba a kérdések betöltésénél:", error);
  }
}

function nextQuestion() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timer = 30;
  answerButtonIsClicked = false;

  const randomIndex = Math.floor(Math.random() * questionArray.length);
  const category = document.createElement("p");
  const question = document.createElement("p");
  const answerContainer = document.createElement("div");
  question.classList.add("question-text");

  const categoryText = document.createTextNode(
    questionArray[Math.floor(randomIndex)].category
  );
  const questionText = document.createTextNode(
    questionArray[Math.floor(randomIndex)].question
  );
  const answers = questionArray[Math.floor(randomIndex)].answers;
  isCorrect = questionArray[Math.floor(randomIndex)].correct;

  timerInterval = setInterval(() => {
    countDownTimer.innerText = `Zeit: ${timer}s`;
    if (timer <= 0 && !answerButtonIsClicked) {
      showSolution(isCorrect);
      clearInterval(timerInterval);
      setTimeout(() => {
        nextQuestion();
      }, 2000);
    }
    timer -= 1;
  }, 1000);

  for (let i = 0; i < answers.length; i++) {
    const answerOptionText = document.createTextNode(answers[i]);
    const answerButton = document.createElement("button");
    answerButton.appendChild(answerOptionText);
    answerButton.classList.add("answer-btn");
    answerContainer.appendChild(answerButton);

    if (i === isCorrect) {
      console.log("correctAnswer", correctAnswer);
      answerIsTreu = true;
      answerButton.addEventListener("click", () => {
        if (!answerButtonIsClicked) {
          answerButtonIsClicked = true;
          clearInterval(timerInterval);
          answerButton.classList.add("correct");
          correctAnswer += 1;

          showSolution(isCorrect);
          delay(2000).then(() => {
            console.log("nächste Frage");
            nextQuestion();
          });
        }
      });
    } else {
      console.log("Falsch");
      answerButton.addEventListener("click", () => {
        if (!answerButtonIsClicked) {
          answerButtonIsClicked = true;
          clearInterval(timerInterval);
          answerButton.classList.add("wrong");

          showSolution(isCorrect);
          delay(2000).then(() => {
            nextQuestion();
          });
        }
      });
    }
  }

  answerCount++;
  scoreCount.innerText = `Korrekte Antworten: ${correctAnswer} von ${answerCount}`;
  answerIsTreu = false;
  category.appendChild(categoryText);
  question.appendChild(questionText);

  question.classList.add("question");
  answerContainer.classList.add("answer-container");

  quizContainer.innerHTML = "";
  quizContainer.appendChild(category);
  quizContainer.appendChild(question);

  quizContainer.appendChild(answerContainer);
  quizContainer.appendChild(controlsContainer);
  console.log(answerContainer);
}

function showSolution() {
  console.log("korrekte Antwort anzeigen");
  const answerButtons = document.querySelectorAll(".answer-btn");
  answerButtons.forEach((button, index) => {
    if (index === isCorrect) {
      button.classList.add("solution");
    }
  });
}

nextButton.addEventListener("click", () => {
  nextQuestion();
});

solutionButton.addEventListener("click", () => {
  showSolution();
});

document.addEventListener("DOMContentLoaded", async () => {
  await loadQuestions();
  nextQuestion();
  document.getElementById("quiz-container").appendChild(quizContainer);
});
