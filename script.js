const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      //let x = x + 1
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
   
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'A miter saw is also known as :',
    answers: [
      { text: 'round saw', correct: false },
      { text: 'chop saw', correct: true },
      { text: 'angle saw', correct: false },
      { text: 'table saw', correct: false }
    ]
  },

  {
    question: 'miter saws can cut in __ degrees',
    answers: [
      { text: '50', correct: false },
      { text: '45', correct: false },
      { text: '90', correct: true },
      { text: '180', correct: false }
    ]
  },

  {
    question: 'the miter saw is the stationary version of what tool?',
    answers: [
      { text: 'circular saw', correct: true },
      { text: 'oscillating tool', correct: false },
      { text: 'jigsaw', correct: false },
      { text: '', correct: false }
    ]
  },

  {
    question: 'True or false : you should never put your hand in the red zone',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
    ]
  },

  {
    question: 'Tools arent dangerous when used in the right hands',
    answers: [
      { text: 'wrong', correct: false },
      { text: 'no way', correct: false },
      { text: 'nah', correct: false },
      { text: 'agreed', correct: true }
    ]
  },

  {
    question: 'a compound miter saw can also rotate horizontally :',
    answers: [
      { text: '10*', correct: false },
      { text: '25*', correct: false },
      { text: 'depends on the manufacturer', correct: true },
      { text: '180*', correct: false }
    ]
  },


  
  
]