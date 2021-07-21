const quizData = [
  {
    question: 'What is the capital of INDIA?',
    a: 'Chennai',
    b: 'Mumbai',
    c: 'Delhi',
    d: 'Rajasthan',
    correct: 'c',
  },
  {
    question: 'What is the most popular  programming language currently?',
    a: 'Java',
    b: 'c++',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'Who is the best cricketor in the world',
    a: 'Steve Smith',
    b: 'VIRAT KOHLI',
    c: 'Kane Williamson',
    d: 'Joe Root',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Languange',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Application programming Languange',
    correct: 'a',
  },
  {
    question: 'What Year was Javascript launched?',
    a: '1994',
    b: '1993',
    c: '1999',
    d: '1995',
    correct: 'd',
  },
];

let currentQuestion = 0;

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuiz();

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  console.log(answer);

  if (answer === quizData[currentQuiz].correct) {
    score++;
  }

  if (answer) {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
      <button onclick ="location.reload()">Attempt Again</button>`;
    }
  }
});
