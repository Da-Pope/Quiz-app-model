const quizData = [
    {
        question: "How many elements are in the periodic table?",
        a: "120",
        b: "154",
        c: "204",
        d: "118",
        correct: "d",
    },
    {
        question: "How many minutes are in a full week?",
        a: "10,000",
        b: "10,080",
        c: "9,050",
        d: "11,240",
        correct: "b",
    },
    {
        question: "How many faces does a Dodecahedron have?",
        a: "12",
        b: "15",
        c: "14",
        d: "20",
        correct: "a",
    },
    {
        question: "What planet has the most moons?",
        a: "Jupiter",
        b: "Mars",
        c: "Saturn",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "What country has a shipwreck on its National Flag?",
        a: "Djibouti",
        b: "Liechtenstein",
        c: "Oman",
        d: "Bermuda",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})