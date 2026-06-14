const gkQuestions = [
    {
        question: "1. কোনো বস্তুর অবস্থান সময়ের সাথে পরিবর্তিত হলে তাকে কী বলে?",
        options: ["স্থিতি", "গতি", "বল", "জড়তা"],
        correctAnswer: 1
    },
    {
        question: "2. অবস্থান নির্ণয়ের জন্য যে বিন্দুকে ভিত্তি ধরা হয় তাকে কী বলে?",
        options: ["উৎসবিন্দু", "কেন্দ্র", "ফোকাস", "শীর্ষবিন্দু"],
        correctAnswer: 0
    },
    {
        question: "3. সরণের SI একক কী?",
        options: ["মিটার", "মিটার/সেকেন্ড", "নিউটন", "জুল"],
        correctAnswer: 0
    },
    {
        question: "4. দূরত্ব একটি—",
        options: ["ভেক্টর রাশি", "স্কেলার রাশি", "উৎপন্ন রাশি", "মৌলিক একক"],
        correctAnswer: 1
    },
    {
        question: "5. সরণ একটি—",
        options: ["স্কেলার রাশি", "ভেক্টর রাশি", "মাত্রাহীন রাশি", "ধ্রুবক"],
        correctAnswer: 1
    },
    {
        question: "6. বৃত্তাকার পথে একবার ঘুরে এলে সরণ কত হবে?",
        options: ["ব্যাসার্ধ", "পরিধি", "শূন্য", "ব্যাস"],
        correctAnswer: 2
    },
    {
        question: "7. গড় বেগ =",
        options: ["মোট দূরত্ব/মোট সময়", "সরণ/সময়", "বেগ×সময়", "ত্বরণ×সময়"],
        correctAnswer: 0
    },
    {
        question: "8. গড় বেগ (Velocity) =",
        options: ["সরণ/মোট সময়", "দূরত্ব/সময়", "ত্বরণ×সময়", "বল/ভর"],
        correctAnswer: 0
    },
    {
        question: "9. বেগের SI একক কী?",
        options: ["m/s", "m/s²", "N", "J"],
        correctAnswer: 0
    },
    {
        question: "10. ত্বরণের SI একক কী?",
        options: ["m/s", "m²/s", "m/s²", "N/s"],
        correctAnswer: 2
    },
    {
        question: "11. সমত্বরণ গতি বলতে বোঝায়—",
        options: ["ধ্রুব বেগ", "ধ্রুব ত্বরণ", "ধ্রুব দূরত্ব", "ধ্রুব সরণ"],
        correctAnswer: 1
    },
    {
        question: "12. ঋণাত্মক ত্বরণকে কী বলা হয়?",
        options: ["মন্দন", "সরণ", "বেগ", "জড়তা"],
        correctAnswer: 0
    },
    {
        question: "13. সমবেগে গতিশীল বস্তুর ত্বরণ কত?",
        options: ["1", "9.8", "0", "অসীম"],
        correctAnswer: 2
    },
    {
        question: "14. প্রথম গতিসূত্র কোনটি?",
        options: ["v=u+at", "s=ut+½at²", "v²=u²+2as", "F=ma"],
        correctAnswer: 0
    },
    {
        question: "15. দ্বিতীয় গতিসূত্র কোনটি?",
        options: ["v=u+at", "s=ut+½at²", "v²=u²+2as", "P=mv"],
        correctAnswer: 1
    },
    {
        question: "16. তৃতীয় গতিসূত্র কোনটি?",
        options: ["v=u+at", "s=ut+½at²", "v²=u²+2as", "F=ma"],
        correctAnswer: 2
    },
    {
        question: "17. বেগ-সময় লেখচিত্রের ঢাল নির্দেশ করে—",
        options: ["দূরত্ব", "ত্বরণ", "সরণ", "বল"],
        correctAnswer: 1
    },
    {
        question: "18. সরণ-সময় লেখচিত্রের ঢাল নির্দেশ করে—",
        options: ["বেগ", "ত্বরণ", "ভর", "বল"],
        correctAnswer: 0
    },
    {
        question: "19. বেগ-সময় লেখচিত্রের নিচের ক্ষেত্রফল নির্দেশ করে—",
        options: ["ত্বরণ", "সরণ", "বল", "ভর"],
        correctAnswer: 1
    },
    {
        question: "20. মুক্তপতনে অভিকর্ষজ ত্বরণ g এর মান কত?",
        options: ["10 m/s²", "9.8 m/s²", "8.9 m/s²", "9 m/s²"],
        correctAnswer: 1
    },
    {
        question: "21. মুক্তপতনে ঊর্ধ্বমুখী নিক্ষেপে ত্বরণের দিক—",
        options: ["উপরে", "নিচে", "শূন্য", "পরিবর্তনশীল"],
        correctAnswer: 1
    },
    {
        question: "22. ভেক্টর রাশির উদাহরণ—",
        options: ["দূরত্ব", "সময়", "সরণ", "ভর"],
        correctAnswer: 2
    },
    {
        question: "23. স্কেলার রাশির উদাহরণ—",
        options: ["সরণ", "বেগ", "ত্বরণ", "দূরত্ব"],
        correctAnswer: 3
    },
    {
        question: "24. দুটি ভেক্টরের যোগফল নির্ণয়ে ব্যবহৃত হয়—",
        options: ["ত্রিভুজ সূত্র", "বয়েলের সূত্র", "ওহমের সূত্র", "চার্লসের সূত্র"],
        correctAnswer: 0
    },
    {
        question: "25. দুটি ভেক্টরের অন্তর্গুণফল একটি—",
        options: ["ভেক্টর", "স্কেলার", "টেনসর", "মাত্রাহীন"],
        correctAnswer: 1
    },
    {
        question: "26. দুটি ভেক্টরের বহির্গুণফল একটি—",
        options: ["স্কেলার", "ভেক্টর", "ধ্রুবক", "মাত্রাহীন"],
        correctAnswer: 1
    },
    {
        question: "27. cos90° এর মান কত?",
        options: ["1", "0", "-1", "½"],
        correctAnswer: 1
    },
    {
        question: "28. দুটি লম্ব ভেক্টরের ডট প্রোডাক্ট কত?",
        options: ["1", "-1", "0", "2"],
        correctAnswer: 2
    },
    {
        question: "29. আপেক্ষিক বেগ =",
        options: ["বেগের যোগ", "বেগের পার্থক্য", "ত্বরণ", "সরণ"],
        correctAnswer: 1
    },
    {
        question: "30. নদীতে নৌকার গতির সমস্যায় কোন ধারণা ব্যবহৃত হয়?",
        options: ["আপেক্ষিক বেগ", "জড়তা", "মহাকর্ষ", "ক্ষমতা"],
        correctAnswer: 0
    },
    {
        question: "31. স্রোতের অনুকূলে নৌকার বেগ =",
        options: ["b-c", "b+c", "c-b", "b×c"],
        correctAnswer: 1
    },
    {
        question: "32. স্রোতের প্রতিকূলে নৌকার বেগ =",
        options: ["b+c", "b-c", "c-b", "bc"],
        correctAnswer: 1
    },
    {
        question: "33. সমতলে গতির ক্ষেত্রে ব্যবহৃত প্রধান রাশি—",
        options: ["একমাত্রিক ভেক্টর", "দ্বিমাত্রিক ভেক্টর", "স্কেলার", "টেনসর"],
        correctAnswer: 1
    },
    {
        question: "34. প্রক্ষেপ গতিতে অনুভূমিক ত্বরণ কত?",
        options: ["g", "g/2", "0", "2g"],
        correctAnswer: 2
    },
    {
        question: "35. প্রক্ষেপ গতিতে উল্লম্ব ত্বরণ কত?",
        options: ["0", "g", "g/2", "2g"],
        correctAnswer: 1
    },
    {
        question: "36. প্রক্ষেপ গতিপথ কেমন?",
        options: ["সরলরেখা", "বৃত্ত", "পরাবৃত্ত", "উপবৃত্ত"],
        correctAnswer: 2
    },
    {
        question: "37. 45° কোণে নিক্ষেপে পাল্লা হয়—",
        options: ["সর্বনিম্ন", "সর্বাধিক", "শূন্য", "অপরিবর্তিত"],
        correctAnswer: 1
    },
    {
        question: "38. দুটি সমান ভেক্টরের মধ্যবর্তী কোণ 0° হলে লব্ধি হবে—",
        options: ["0", "A", "2A", "A/2"],
        correctAnswer: 2
    },
    {
        question: "39. দুটি সমান ভেক্টরের মধ্যবর্তী কোণ 180° হলে লব্ধি হবে—",
        options: ["0", "A", "2A", "A/2"],
        correctAnswer: 0
    },
    {
        question: "40. cos0° এর মান কত?",
        options: ["0", "1", "-1", "½"],
        correctAnswer: 1
    },
    {
        question: "41. sin90° এর মান কত?",
        options: ["0", "1", "½", "-1"],
        correctAnswer: 1
    },
    {
        question: "42. একমাত্রিক গতির উদাহরণ—",
        options: ["বৃত্তীয় গতি", "সরলরেখায় গতি", "প্রক্ষেপ গতি", "ঘূর্ণন গতি"],
        correctAnswer: 1
    },
    {
        question: "43. সমবেগে বৃত্তীয় গতিতে বেগের কোনটি পরিবর্তিত হয়?",
        options: ["মান", "দিক", "উভয়ই নয়", "ভর"],
        correctAnswer: 1
    },
    {
        question: "44. সমবেগে বৃত্তীয় গতিতে ত্বরণ থাকে—",
        options: ["শূন্য", "কেন্দ্রের দিকে", "বাইরের দিকে", "স্পর্শকের দিকে"],
        correctAnswer: 1
    },
    {
        question: "45. ভেক্টরের মানকে কী বলা হয়?",
        options: ["দিক", "লব্ধি", "ম্যাগনিটিউড", "কোণ"],
        correctAnswer: 2
    },
    {
        question: "46. সমান মান ও বিপরীত দিকের দুটি ভেক্টরের যোগফল—",
        options: ["2A", "A", "0", "A/2"],
        correctAnswer: 2
    },
    {
        question: "47. ভেক্টর বিশ্লেষণে ব্যবহৃত ত্রিকোণমিতিক ফাংশন—",
        options: ["sin ও cos", "log", "tan⁻¹", "ln"],
        correctAnswer: 0
    },
    {
        question: "48. গতির সমীকরণগুলি প্রযোজ্য—",
        options: ["অসমত্বরণে", "সমত্বরণে", "বৃত্তীয় গতিতে", "দোলনে"],
        correctAnswer: 1
    },
    {
        question: "49. v²=u²+2as সমীকরণে সময়ের উপস্থিতি—",
        options: ["আছে", "নেই", "দুইবার আছে", "অসীমবার আছে"],
        correctAnswer: 1
    },
    {
        question: "50. উচ্চমাধ্যমিক স্তরে গতিবিদ্যার সবচেয়ে গুরুত্বপূর্ণ ভিত্তি হলো—",
        options: ["গতি সমীকরণ", "আলোকবিজ্ঞান", "তাপগতিবিদ্যা", "বিদ্যুৎ"],
        correctAnswer: 0
    }
];































// gk.js - General Knowledge Quiz Logic

document.addEventListener('DOMContentLoaded', function() {

    // Quiz state variables
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];
    let quizTimer;
    let questionTimer;
    let quizStartTime;
    let quizCompleted = false;
    let autoAdvanceInterval;
    let advanceProgressInterval;

    // DOM elements
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestionElement = document.getElementById('current-question');
    const scoreElement = document.getElementById('score');
    const totalTimeElement = document.getElementById('total-time');
    const timerElement = document.getElementById('timer');
    const feedbackElement = document.getElementById('feedback');
    const resultContainer = document.getElementById('result-container');
    const finalScoreElement = document.getElementById('final-score');
    const resultMessageElement = document.getElementById('result-message');
    const correctCountElement = document.getElementById('correct-count');
    const incorrectCountElement = document.getElementById('incorrect-count');
    const timeTakenElement = document.getElementById('time-taken');
    const percentageElement = document.getElementById('percentage');
    const restartBtn = document.getElementById('restart-btn');
    const homeBtn = document.getElementById('home-btn');

    // Initialize the quiz
    function initQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizCompleted = false;
        quizStartTime = Date.now();
        
        // Hide result container
        resultContainer.style.display = 'none';
        
        // Show quiz elements
        document.querySelector('.question-container').style.display = 'block';
        document.querySelector('.timer-container').style.display = 'block';
        
        // Update UI
        updateScore();
        updateQuestionCounter();
        updateTotalTime();
        
        // Load first question
        loadQuestion(currentQuestionIndex);
        
        // Start quiz timer
        startQuizTimer();
    }

    // Load a question
    function loadQuestion(index) {
        if (index >= gkQuestions.length) {
            endQuiz();
            return;
        }
        
        const question = gkQuestions[index];
        
        // Update question text
        questionText.textContent = question.question;
        
        // Clear options container
        optionsContainer.innerHTML = '';
        
        // Create option elements
        const optionLetters = ['A', 'B', 'C', 'D'];
        
        question.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.index = i;
            
            // Check if user has already answered this question
            if (userAnswers[index] !== undefined) {
                if (userAnswers[index] === i) {
                    optionElement.classList.add('selected');
                }
                if (i === question.correctAnswer) {
                    optionElement.classList.add('correct');
                } else if (userAnswers[index] === i && userAnswers[index] !== question.correctAnswer) {
                    optionElement.classList.add('incorrect');
                }
            }
            
            optionElement.innerHTML = `
                <div class="option-letter">${optionLetters[i]}</div>
                <div class="option-text">${option}</div>
            `;
            
            // Add click event if not already answered
            if (userAnswers[index] === undefined) {
                optionElement.addEventListener('click', () => selectOption(i));
            }
            
            optionsContainer.appendChild(optionElement);
        });
        
        // Update UI
        updateQuestionCounter();
        updateProgressBar(index + 1, gkQuestions.length);
        
        // Reset feedback
        feedbackElement.className = 'feedback';
        feedbackElement.textContent = '';
        
        // Start question timer
        startQuestionTimer();
    }

    // Select an option
    function selectOption(optionIndex) {
        // Prevent multiple selections
        if (userAnswers[currentQuestionIndex] !== undefined) return;
        
        // Mark the selected option
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.classList.remove('selected');
            option.style.pointerEvents = 'none'; // Disable further clicks
        });
        
        options[optionIndex].classList.add('selected');
        
        // Check answer
        const isCorrect = optionIndex === gkQuestions[currentQuestionIndex].correctAnswer;
        userAnswers[currentQuestionIndex] = optionIndex;
        
        if (isCorrect) {
            score++;
            updateScore();
            showFeedback(true);
            
            // Highlight correct answer
            options[gkQuestions[currentQuestionIndex].correctAnswer].classList.add('correct');
        } else {
            showFeedback(false, gkQuestions[currentQuestionIndex].options[gkQuestions[currentQuestionIndex].correctAnswer]);
            
            // Highlight correct and incorrect answers
            options[gkQuestions[currentQuestionIndex].correctAnswer].classList.add('correct');
            options[optionIndex].classList.add('incorrect');
        }
        
        // Stop question timer
        if (questionTimer && questionTimer.stopTimer) {
            questionTimer.stopTimer();
        }
        
        // Auto advance to next question after 2 seconds
        startAutoAdvance(2000); // 2 seconds
    }

    // Auto advance to next question
    function startAutoAdvance(duration) {
        // Create or show auto-advance progress bar
        let progressBar = document.querySelector('.auto-advance-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'auto-advance-progress';
            progressBar.innerHTML = '<div class="advance-progress"></div>';
            feedbackElement.parentNode.insertBefore(progressBar, feedbackElement.nextSibling);
        }
        
        const progressFill = progressBar.querySelector('.advance-progress');
        progressBar.classList.add('active');
        progressFill.style.width = '0%';
        
        // Clear any existing intervals
        if (autoAdvanceInterval) clearTimeout(autoAdvanceInterval);
        if (advanceProgressInterval) clearInterval(advanceProgressInterval);
        
        // Start progress bar animation
        let progress = 0;
        const increment = 100 / (duration / 50); // Update every 50ms
        
        advanceProgressInterval = setInterval(() => {
            progress += increment;
            progressFill.style.width = `${Math.min(progress, 100)}%`;
        }, 50);
        
        // Auto advance after duration
        autoAdvanceInterval = setTimeout(() => {
            progressBar.classList.remove('active');
            clearInterval(advanceProgressInterval);
            goToNextQuestion();
        }, duration);
    }

    // Go to next question
    function goToNextQuestion() {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < gkQuestions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            endQuiz();
        }
    }

    // Start question timer (30 seconds)
    function startQuestionTimer() {
        // Stop previous timer if exists
        if (questionTimer && questionTimer.stopTimer) {
            questionTimer.stopTimer();
        }
        
        questionTimer = initTimer(60, onTimeUp);
        if (questionTimer) {
            questionTimer.startTimer();
        }
    }

    // Handle time up for a question
    function onTimeUp() {
        // Disable all options
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Mark the correct answer
        const correctIndex = gkQuestions[currentQuestionIndex].correctAnswer;
        options[correctIndex].classList.add('correct');
        
        // Show feedback
        showFeedback(false, gkQuestions[currentQuestionIndex].options[correctIndex]);
        
        // Auto advance to next question after 2 seconds
        startAutoAdvance(2000);
    }

    // Show feedback
    function showFeedback(isCorrect, correctAnswer = null) {
        // Update feedback message
        if (isCorrect) {
            feedbackElement.textContent = "Correct! 🎉";
            feedbackElement.className = 'feedback correct show';
            playSound('correct');
            createConfetti();
        } else {
            feedbackElement.textContent = correctAnswer ? 
                `Incorrect. Correct answer: ${correctAnswer}` : 
                "Time's up!";
            feedbackElement.className = 'feedback incorrect show';
            playSound('incorrect');
        }
    }

    // Start quiz timer (5 minutes total)
    function startQuizTimer() {
        let totalSeconds =3000; // 5 minutes
        
        const updateTimerDisplay = () => {
            totalTimeElement.textContent = formatTime(totalSeconds);
        };
        
        updateTimerDisplay();
        
        const timerInterval = setInterval(() => {
            if (quizCompleted) {
                clearInterval(timerInterval);
                return;
            }
            
            totalSeconds--;
            updateTimerDisplay();
            
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                endQuiz();
            }
        }, 1000);
    }

    // Update question counter
    function updateQuestionCounter() {
        currentQuestionElement.textContent = `${currentQuestionIndex + 1}/${gkQuestions.length}`;
    }

    // Update score display
    function updateScore() {
        scoreElement.textContent = score;
    }

    // Update total time display
    function updateTotalTime() {
        totalTimeElement.textContent = "05:00";
    }

    // Update progress bar
    function updateProgressBar(current, total) {
        const progressBar = document.querySelector('.progress');
        if (progressBar) {
            const percentage = (current / total) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    }

    // End the quiz
    function endQuiz() {
        quizCompleted = true;
        
        // Stop timers
        if (questionTimer && questionTimer.stopTimer) {
            questionTimer.stopTimer();
        }
        
        // Stop auto-advance
        if (autoAdvanceInterval) clearTimeout(autoAdvanceInterval);
        if (advanceProgressInterval) clearInterval(advanceProgressInterval);
        
        // Calculate quiz duration
        const quizDuration = Math.floor((Date.now() - quizStartTime) / 1000);
        
        // Calculate results
        const correctCount = score;
        const incorrectCount = gkQuestions.length - score;
        const percentage = Math.round((score / gkQuestions.length) * 100);
        
        // Update result display
        finalScoreElement.textContent = `${score}/${gkQuestions.length}`;
        correctCountElement.textContent = correctCount;
        incorrectCountElement.textContent = incorrectCount;
        timeTakenElement.textContent = formatTime(quizDuration);
        percentageElement.textContent = `${percentage}%`;
        
        // Set result message based on performance
        let message = "";
        if (percentage >= 90) {
            message = "Outstanding! You're a General Knowledge genius! 🎉";
        } else if (percentage >= 70) {
            message = "Excellent work! You have great knowledge! 👍";
        } else if (percentage >= 50) {
            message = "Good job! You know quite a bit! 👏";
        } else {
            message = "Keep learning! You'll do better next time! 💪";
        }
        resultMessageElement.textContent = message;
        
        // Show result container with animation
        document.querySelector('.question-container').style.display = 'none';
        document.querySelector('.timer-container').style.display = 'none';
        resultContainer.style.display = 'block';
        
        // Create confetti for good scores
        if (percentage >= 70) {
            createConfetti();
        }
    }

    // Event Listeners for result buttons
    restartBtn.addEventListener('click', function() {
        initQuiz();
    });

    homeBtn.addEventListener('click', function() {
        window.location.href = "index.html";
    });

    // Initialize the quiz when page loads
    initQuiz();

});
