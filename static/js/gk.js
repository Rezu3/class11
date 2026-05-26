const gkQuestions = [
    {
        question: "1. ভৌত রাশি কাকে বলে?",
        options: ["যা দেখা যায়", "যা পরিমাপ করা যায়", "যা অনুভব করা যায়", "যা লেখা যায়"],
        correctAnswer: 1
    },
    {
        question: "2. SI পদ্ধতিতে দৈর্ঘ্যের একক কী?",
        options: ["সেন্টিমিটার", "মিটার", "কিলোমিটার", "মিলিমিটার"],
        correctAnswer: 1
    },
    {
        question: "3. SI পদ্ধতিতে ভরের একক কী?",
        options: ["গ্রাম", "কিলোগ্রাম", "টন", "মিলিগ্রাম"],
        correctAnswer: 1
    },
    {
        question: "4. SI পদ্ধতিতে সময়ের একক কী?",
        options: ["মিনিট", "ঘণ্টা", "সেকেন্ড", "দিন"],
        correctAnswer: 2
    },
    {
        question: "5. নিচের কোনটি মৌলিক রাশি?",
        options: ["বল", "শক্তি", "দৈর্ঘ্য", "ক্ষমতা"],
        correctAnswer: 2
    },
    {
        question: "6. নিচের কোনটি উৎপন্ন রাশি?",
        options: ["ভর", "সময়", "বেগ", "দৈর্ঘ্য"],
        correctAnswer: 2
    },
    {
        question: "7. ভেক্টর রাশির উদাহরণ কোনটি?",
        options: ["ভর", "সময়", "বেগ", "উষ্ণতা"],
        correctAnswer: 2
    },
    {
        question: "8. স্কেলার রাশির উদাহরণ কোনটি?",
        options: ["বল", "বেগ", "দ্রুতি", "ত্বরণ"],
        correctAnswer: 2
    },
    {
        question: "9. বলের SI একক কী?",
        options: ["জুল", "ওয়াট", "নিউটন", "পাসকেল"],
        correctAnswer: 2
    },
    {
        question: "10. কাজের SI একক কী?",
        options: ["নিউটন", "জুল", "ওয়াট", "পাসকেল"],
        correctAnswer: 1
    },
    {
        question: "11. ক্ষমতার SI একক কী?",
        options: ["জুল", "ওয়াট", "নিউটন", "অ্যাম্পিয়ার"],
        correctAnswer: 1
    },
    {
        question: "12. চাপের SI একক কী?",
        options: ["ওয়াট", "নিউটন", "জুল", "পাসকেল"],
        correctAnswer: 3
    },
    {
        question: "13. মাত্রাহীন রাশি কোনটি?",
        options: ["বল", "বেগ", "প্রতিসরণাঙ্ক", "ঘনত্ব"],
        correctAnswer: 2
    },
    {
        question: "14. দৈর্ঘ্যের CGS একক কী?",
        options: ["মিটার", "সেন্টিমিটার", "মিলিমিটার", "কিলোমিটার"],
        correctAnswer: 1
    },
    {
        question: "15. ভরের CGS একক কী?",
        options: ["গ্রাম", "কিলোগ্রাম", "টন", "মিলিগ্রাম"],
        correctAnswer: 0
    },
    {
        question: "16. মাত্রা বিশ্লেষণ কোন কাজে ব্যবহৃত হয়?",
        options: ["গল্প লেখা", "সমীকরণ যাচাই", "চিত্র আঁকা", "রান্না"],
        correctAnswer: 1
    },
    {
        question: "17. বেগের মাত্রা কী?",
        options: ["LT⁻¹", "LT⁻²", "MLT⁻²", "ML²T⁻²"],
        correctAnswer: 0
    },
    {
        question: "18. ত্বরণের মাত্রা কী?",
        options: ["LT⁻¹", "LT⁻²", "MLT⁻²", "ML²T⁻³"],
        correctAnswer: 1
    },
    {
        question: "19. বলের মাত্রা কী?",
        options: ["MLT⁻²", "ML²T⁻²", "LT⁻¹", "ML²T⁻³"],
        correctAnswer: 0
    },
    {
        question: "20. কাজের মাত্রা কী?",
        options: ["ML²T⁻²", "MLT⁻²", "LT⁻¹", "ML²T⁻³"],
        correctAnswer: 0
    },
    {
        question: "21. ক্ষমতার মাত্রা কী?",
        options: ["ML²T⁻³", "ML²T⁻²", "MLT⁻²", "LT⁻¹"],
        correctAnswer: 0
    },
    {
        question: "22. ঘনত্বের মাত্রা কী?",
        options: ["ML⁻³", "ML³", "LT⁻¹", "MLT⁻²"],
        correctAnswer: 0
    },
    {
        question: "23. স্কেলার রাশির ক্ষেত্রে কোনটি থাকে না?",
        options: ["মান", "দিক", "একক", "পরিমাণ"],
        correctAnswer: 1
    },
    {
        question: "24. ভেক্টর রাশির ক্ষেত্রে কোনটি থাকে?",
        options: ["শুধু মান", "শুধু দিক", "মান ও দিক", "কিছুই না"],
        correctAnswer: 2
    },
    {
        question: "25. নিউটন কোন রাশির একক?",
        options: ["শক্তি", "বল", "ক্ষমতা", "চাপ"],
        correctAnswer: 1
    },
    {
        question: "26. জুল কোন রাশির একক?",
        options: ["বল", "কাজ", "ক্ষমতা", "চাপ"],
        correctAnswer: 1
    },
    {
        question: "27. ওয়াট কোন রাশির একক?",
        options: ["কাজ", "ক্ষমতা", "বল", "ঘনত্ব"],
        correctAnswer: 1
    },
    {
        question: "28. পাসকেল কোন রাশির একক?",
        options: ["চাপ", "বল", "কাজ", "ক্ষমতা"],
        correctAnswer: 0
    },
    {
        question: "29. আন্তর্জাতিক একক পদ্ধতির নাম কী?",
        options: ["CGS", "FPS", "SI", "MKS"],
        correctAnswer: 2
    },
    {
        question: "30. মিটার কিসের একক?",
        options: ["সময়", "দৈর্ঘ্য", "ভর", "বল"],
        correctAnswer: 1
    },
    {
        question: "31. কিলোগ্রাম কিসের একক?",
        options: ["ভর", "দৈর্ঘ্য", "সময়", "তাপ"],
        correctAnswer: 0
    },
    {
        question: "32. সেকেন্ড কিসের একক?",
        options: ["দৈর্ঘ্য", "ভর", "সময়", "বল"],
        correctAnswer: 2
    },
    {
        question: "33. নিচের কোনটি মৌলিক একক নয়?",
        options: ["মিটার", "সেকেন্ড", "নিউটন", "কিলোগ্রাম"],
        correctAnswer: 2
    },
    {
        question: "34. নিচের কোনটি উৎপন্ন একক?",
        options: ["মিটার", "সেকেন্ড", "নিউটন", "কিলোগ্রাম"],
        correctAnswer: 2
    },
    {
        question: "35. ত্রুটি যত কম হবে পরিমাপ তত কী হবে?",
        options: ["ভুল", "অসঠিক", "নির্ভুল", "ধীর"],
        correctAnswer: 2
    },
    {
        question: "36. পরম ত্রুটি কী?",
        options: ["গড় মান", "প্রকৃত ও পরিমাপিত মানের পার্থক্য", "এককের মান", "মাত্রা"],
        correctAnswer: 1
    },
    {
        question: "37. শতকরা ত্রুটির একক কী?",
        options: ["মিটার", "কিলোগ্রাম", "নেই", "সেকেন্ড"],
        correctAnswer: 2
    },
    {
        question: "38. একাধিকবার পরিমাপের গড় মানকে কী বলা হয়?",
        options: ["পরম ত্রুটি", "সম্ভাব্য মান", "গড় মান", "আপেক্ষিক ত্রুটি"],
        correctAnswer: 2
    },
    {
        question: "39. মাত্রার সূত্রে M কী বোঝায়?",
        options: ["মিটার", "ভর", "মোল", "মাত্রা"],
        correctAnswer: 1
    },
    {
        question: "40. মাত্রার সূত্রে L কী বোঝায়?",
        options: ["দৈর্ঘ্য", "আলোক", "লোড", "লিটার"],
        correctAnswer: 0
    },
    {
        question: "41. মাত্রার সূত্রে T কী বোঝায়?",
        options: ["তাপ", "সময়", "টর্ক", "টন"],
        correctAnswer: 1
    },
    {
        question: "42. নিচের কোনটি ভেক্টর রাশি নয়?",
        options: ["বেগ", "ত্বরণ", "বল", "দ্রুতি"],
        correctAnswer: 3
    },
    {
        question: "43. মাত্রা বিশ্লেষণে কী যাচাই করা যায়?",
        options: ["ব্যাকরণ", "রাসায়নিক বিক্রিয়া", "সমীকরণের সঠিকতা", "চিত্র"],
        correctAnswer: 2
    },
    {
        question: "44. একক ছাড়া কোন রাশি প্রকাশ করা যায় না?",
        options: ["ভৌত রাশি", "গল্প", "ছবি", "নাম"],
        correctAnswer: 0
    },
    {
        question: "45. SI পদ্ধতিতে তাপমাত্রার একক কী?",
        options: ["সেলসিয়াস", "ফারেনহাইট", "কেলভিন", "জুল"],
        correctAnswer: 2
    },
    {
        question: "46. আলোর তীব্রতার SI একক কী?",
        options: ["ক্যান্ডেলা", "লুমেন", "ওয়াট", "জুল"],
        correctAnswer: 0
    },
    {
        question: "47. পদার্থের পরিমাণের SI একক কী?",
        options: ["গ্রাম", "মোল", "লিটার", "ক্যান্ডেলা"],
        correctAnswer: 1
    },
    {
        question: "48. তড়িৎ প্রবাহের SI একক কী?",
        options: ["ভোল্ট", "ওহম", "অ্যাম্পিয়ার", "ওয়াট"],
        correctAnswer: 2
    },
    {
        question: "49. নিচের কোনটি স্কেলার রাশি?",
        options: ["বল", "ত্বরণ", "দ্রুতি", "বেগ"],
        correctAnswer: 2
    },
    {
        question: "50. নিচের কোনটি ভেক্টর রাশি?",
        options: ["কাজ", "ভর", "বল", "সময়"],
        correctAnswer: 2
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
