let questionArray = [];
let askedQuestions = [];
let answerHistory = [];
let answerIsTrue = false;
let correctAnswer = 0;
let answerCount = -1;
let isCorrect = 0;
let answerButtonIsClicked = false;
const maxTime = 30;
let timer = maxTime;
let timerInterval = null;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const quizContainer = document.querySelector(".quiz-container");
const solutionButton = document.querySelector(".solution-btn");
const nextButton = document.querySelector(".next-btn");
const scoreCount = document.querySelector(".score-count");
const countDownTimer = document.querySelector(".countdown-timer");

async function loadQuestions() {
  try {
    const response = await fetch("./questions.json");
    questionArray = await response.json();
  } catch (error) {
    console.error("Fehler beim Laden der Fragen:", error);
  }
}

function nextQuestion() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timer = maxTime;
  answerButtonIsClicked = false;
  countDownTimer.classList.remove("warning");

  if (askedQuestions.length >= questionArray.length) {
    alert("Alle Fragen wurden gestellt! Quiz beendet.");
    return;
  }

  let randomIndex;
  let randomQuestion;

  do {
    randomIndex = Math.floor(Math.random() * questionArray.length);
    randomQuestion = questionArray[randomIndex];
  } while (askedQuestions.includes(randomQuestion.id));

  const category = document.createElement("p");
  const question = document.createElement("p");
  const answerContainer = document.createElement("div");
  question.classList.add("question-text");

  const categoryText = document.createTextNode(randomQuestion.category);
  const questionText = document.createTextNode(randomQuestion.question);

  const answers = randomQuestion.answers;
  isCorrect = randomQuestion.correct;

  askedQuestions.push(randomQuestion.id);

  timerInterval = setInterval(() => {
    countDownTimer.innerText = `Zeit: ${timer}s`;

    if (timer <= 7) {
      countDownTimer.classList.add("warning");
    }

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
      answerIsTrue = true;
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

  answerIsTrue = false;
  category.appendChild(categoryText);
  question.appendChild(questionText);

  question.classList.add("question");
  answerContainer.classList.add("answer-container");

  quizContainer.innerHTML = "";
  quizContainer.appendChild(category);
  quizContainer.appendChild(question);
  quizContainer.appendChild(answerContainer);
}

function showSolution() {
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
});
