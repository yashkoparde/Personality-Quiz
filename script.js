const quizData = [
    {
        question: "Pick a weekend activity:",
        options: [
            { text: "Netflix and Chill", personality: "Chill Dreamer" },
            { text: "Partying with friends", personality: "Life of the Party" },
            { text: "Reading a book", personality: "Wise Thinker" },
            { text: "Outdoor adventure", personality: "Adventurous Explorer" }
        ]
    },
    {
        question: "Choose your favorite food:",
        options: [
            { text: "Pizza", personality: "Life of the Party" },
            { text: "Salad", personality: "Wise Thinker" },
            { text: "Burgers", personality: "Adventurous Explorer" },
            { text: "Ice Cream", personality: "Chill Dreamer" }
        ]
    },
    {
        question: "Pick a color:",
        options: [
            { text: "Blue", personality: "Chill Dreamer" },
            { text: "Red", personality: "Life of the Party" },
            { text: "Green", personality: "Wise Thinker" },
            { text: "Yellow", personality: "Adventurous Explorer" }
        ]
    },
    {
        question: "How do you usually handle stress?",
        options: [
            { text: "Meditate and take a walk", personality: "Chill Dreamer" },
            { text: "Hang out with friends", personality: "Life of the Party" },
            { text: "Overthink and reflect", personality: "Wise Thinker" },
            { text: "Go on an adventure", personality: "Adventurous Explorer" }
        ]
    },
    {
        question: "If you could have any superpower, what would it be?",
        options: [
            { text: "Time travel", personality: "Wise Thinker" },
            { text: "Super strength", personality: "Life of the Party" },
            { text: "Invisibility", personality: "Chill Dreamer" },
            { text: "Flying", personality: "Adventurous Explorer" }
        ]
    },
    {
        question: "What’s your ideal vacation?",
        options: [
            { text: "A quiet cabin in the mountains", personality: "Chill Dreamer" },
            { text: "Exploring a bustling city", personality: "Life of the Party" },
            { text: "A cultural trip to museums and historical sites", personality: "Wise Thinker" },
            { text: "Backpacking through nature", personality: "Adventurous Explorer" }
        ]
    },
    {
        question: "What’s your favorite kind of movie?",
        options: [
            { text: "Romantic comedy", personality: "Chill Dreamer" },
            { text: "Action-packed thriller", personality: "Life of the Party" },
            { text: "Documentary or drama", personality: "Wise Thinker" },
            { text: "Sci-fi or fantasy", personality: "Adventurous Explorer" }
        ]
    },
    {
        question: "How do you prefer to work?",
        options: [
            { text: "In a quiet, peaceful space", personality: "Chill Dreamer" },
            { text: "In a lively team environment", personality: "Life of the Party" },
            { text: "Alone, with deep focus", personality: "Wise Thinker" },
            { text: "On the go, with flexibility", personality: "Adventurous Explorer" }
        ]
    },
    {
        question: "What’s your favorite type of music?",
        options: [
            { text: "Lo-fi beats", personality: "Chill Dreamer" },
            { text: "Pop and chart hits", personality: "Life of the Party" },
            { text: "Classical or instrumental", personality: "Wise Thinker" },
            { text: "Indie or alternative", personality: "Adventurous Explorer" }
        ]
    },
    {
        question: "If you had a free day, what would you do?",
        options: [
            { text: "Relax with a book or a podcast", personality: "Chill Dreamer" },
            { text: "Hang out with friends at a cafe or mall", personality: "Life of the Party" },
            { text: "Reflect and plan for the future", personality: "Wise Thinker" },
            { text: "Go on a spontaneous road trip", personality: "Adventurous Explorer" }
        ]
    },
    {
        question: "What’s your biggest fear?",
        options: [
            { text: "Being misunderstood", personality: "Chill Dreamer" },
            { text: "Being alone", personality: "Life of the Party" },
            { text: "Failure", personality: "Wise Thinker" },
            { text: "Not living life to the fullest", personality: "Adventurous Explorer" }
        ]
    },
    {
        question: "How do you deal with difficult situations?",
        options: [
            { text: "Stay calm and think logically", personality: "Wise Thinker" },
            { text: "Distract myself with friends or fun", personality: "Life of the Party" },
            { text: "Try to relax and regain control", personality: "Chill Dreamer" },
            { text: "Take action and solve the problem immediately", personality: "Adventurous Explorer" }
        ]
    },
    {
        question: "How do you prefer to communicate?",
        options: [
            { text: "Through text or written messages", personality: "Chill Dreamer" },
            { text: "Face-to-face with lots of energy", personality: "Life of the Party" },
            { text: "Thoughtful, meaningful conversations", personality: "Wise Thinker" },
            { text: "Over calls or spontaneous chats", personality: "Adventurous Explorer" }
        ]
    }
];

const personalities = {
    "Chill Dreamer": 0,
    "Life of the Party": 0,
    "Wise Thinker": 0,
    "Adventurous Explorer": 0
};

let currentQuestionIndex = 0;

const quizContainer = document.getElementById("quiz-container");
const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startButton.style.display = "none";
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const questionData = quizData[currentQuestionIndex];
        quizContainer.innerHTML = `
            <h2 class="text-primary mb-4">${questionData.question}</h2>
            <div class="d-grid gap-3">
                ${questionData.options
                    .map(
                        (option, index) =>
                            `<button class="btn btn-outline-secondary rounded-pill py-3 px-4 fw-bold text-dark option-btn" data-personality="${option.personality}">
                                ${option.text}
                            </button>`
                    )
                    .join("")}
            </div>
        `;

        document.querySelectorAll(".option-btn").forEach((button) =>
            button.addEventListener("click", handleOptionClick)
        );
    } else {
        showResults();
    }
}

function handleOptionClick(e) {
    const selectedPersonality = e.target.dataset.personality;
    personalities[selectedPersonality]++;
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    const topPersonality = Object.keys(personalities).reduce((a, b) =>
        personalities[a] > personalities[b] ? a : b
    );

    quizContainer.innerHTML = `
        <h2 class="text-success mb-4">You're a ${topPersonality}! 🎉</h2>
        <p class="text-secondary fs-5">Your choices show that you're the ultimate ${topPersonality}. Embrace your unique vibe!</p>
        <button class="btn btn-primary rounded-pill mt-4" onclick="restartQuiz()">Take Quiz Again</button>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    Object.keys(personalities).forEach((key) => (personalities[key] = 0));
    loadQuestion();
}
