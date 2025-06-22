import React, { useState, useEffect } from 'react';
import '../App.css'
const quizData = {
  General: {
    Easy: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
        explanation: "Paris has been the capital of France since the 5th century."
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        explanation: "Basic arithmetic shows that 2 plus 2 equals 4."
      }
    ],
    Medium: [
      {
        question: "HTML stands for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markdown Language"],
        answer: "Hyper Text Markup Language",
        explanation: "HTML is the standard markup language for creating web pages."
      }
    ],
    Hard: [
      {
        question: "Which year was JavaScript first released?",
        options: ["1990", "1995", "2000", "2005"],
        answer: "1995",
        explanation: "JavaScript was created by Brendan Eich in 1995 while he was at Netscape."
      }
    ]
  },
  Science: {
    Easy: [
      {
        question: "What is the chemical formula for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O",
        explanation: "Water is composed of two hydrogen atoms and one oxygen atom."
      }
    ],
    Medium: [
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
        explanation: "Mars appears red due to iron oxide (rust) on its surface."
      }
    ]
  },
  History: {
    Easy: [
      {
        question: "Who was the first president of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
        answer: "George Washington",
        explanation: "George Washington served from 1789 to 1797."
      }
    ],
    Hard: [
      {
        question: "In which year did World War II end?",
        options: ["1943", "1945", "1947", "1950"],
        answer: "1945",
        explanation: "World War II ended with Japan's surrender on September 2, 1945."
      },
      {
        question: "In which year did World War II end?",
        options: ["1943", "1945", "1947", "1950"],
        answer: "1945",
        explanation: "World War II ended with Japan's surrender on September 2, 1945."
      },
      {
        question: "In which year did World War II end?",
        options: ["1943", "1945", "1947", "1950"],
        answer: "1945",
        explanation: "World War II ended with Japan's surrender on September 2, 1945."
      }
    ]
  }
};


const QuizApp = () => {
  const [step, setStep] = useState('subject'); // 'subject', 'level', 'quiz', 'result'
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [review, setReview] = useState([]);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (step === 'quiz' && questions.length > 0) {
      setTimer(10); // Reset timer for each question
      setAnswered(false);
      setSelected('');
    }
  }, [current, step, questions]);

  useEffect(() => {
    let interval;
    if (step === 'quiz' && timer > 0 && !answered) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0 && !answered) {
      handleAnswer('')
     setTimeout(() => {
       if(current + 1 < questions.length){
         setCurrent(current + 1)
       }
      
     }, 3000)
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSubjectSelect = (sub) => {
    setSubject(sub);
    setStep('level');
  };

  const handleLevelSelect = (lvl) => {
    setLevel(lvl);
    setQuestions(quizData[subject][lvl]);
    setStep('quiz');
    setCurrent(0);
    setScore(0);
    setReview([]);
  };

  const handleAnswer = (opt) => {
    setSelected(opt);
    setAnswered(true);
    const isCorrect = opt === questions[current].answer;
    if (isCorrect) setScore(prev => prev + 1);

    setReview(prev => [...prev, {
      ...questions[current],
      selected: opt,
      correct: isCorrect,
      timeLeft: timer
    }]);
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setStep('result');
    }
  };

  const restartQuiz = () => {
    setStep('subject');
    setSubject('');
    setLevel('');
  };

  const progress = ((current) / questions.length) * 100;
  const timeCritical = timer <= 5;

  if (step === 'subject') {
    return (
      <div className="container">
        <h1 className="title">Select a Quiz Subject</h1>
        <div className="card">
          <div className="subject-grid">
            {Object.keys(quizData).map((sub) => (
              <div
                key={sub}
                className={`subject-card ${subject === sub ? 'selected' : ''}`}
                onClick={() => handleSubjectSelect(sub)}
              >
                <h3>{sub}</h3>
                <p>{Object.keys(quizData[sub]).length} difficulty levels</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (step === 'level') {
    return (
      <div className="container">
        <h1 className="title">Select Difficulty for {subject}</h1>
        <div className="card">
          <div className="subject-grid">
            {Object.keys(quizData[subject]).map((lvl) => (
              <div
                key={lvl}
                className={`subject-card ${level === lvl ? 'selected' : ''}`}
                onClick={() => handleLevelSelect(lvl)}
              >
                <h3>{lvl}</h3>
                <p>{quizData[subject][lvl].length} questions</p>
              </div>
            ))}
          </div>
          <button className="button" onClick={() => setStep('subject')}>Back to Subjects</button>
        </div>
      </div>
    );
  }

  if (step === 'quiz' && questions.length > 0) {
    const currentQuestion = questions[current];

    return (
      <div className="container">
        <h1 className="title">{subject} Quiz ({level})</h1>
        <div className="card">
          <div className="quiz-header">
            <div>Question {current + 1} of {questions.length}</div>
            <div className={`timer ${timeCritical > 0 ? 'time-critical' : ''}`}>Time: {timer}s</div>
          </div>

          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>

          <h2 className="question-text">{currentQuestion.question}</h2>

          <div className="options-container">
            {currentQuestion.options.map((opt, i) => (
              <button
                key={i}
                className={`option-button ${answered
                    ? opt === currentQuestion.answer
                      ? 'correct'
                      : selected === opt
                        ? 'incorrect'
                        : ''
                    : ''
                  }`}
                onClick={() => !answered && handleAnswer(opt)}
                disabled={answered}
              >
                {opt}
              </button>
            ))}
          </div>

          {answered && (
            <div className="explanation-box">
              <p><strong>Explanation:</strong> {currentQuestion.explanation}</p>
              <button className="button" onClick={nextQuestion}>
                {current + 1 === questions.length ? 'See Results' : 'Next Question'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (step === 'result') {
    return (
      <div className="container">
        <h1 className="title">Quiz Results</h1>
        <div className="card">
          <div className="score-display">
            Your Score: {score} / {questions.length}
            ({Math.round((score / questions.length) * 100)}%)
          </div>

          <h3 className="review-title">Review your answers:</h3>

          {review.map((item, i) => (
            <div key={i} className={`result-item ${item.correct ? 'correct' : 'incorrect'}`}>
              <p><strong>Question {i + 1}:</strong> {item.question}</p>
              <p>Your answer: <span className={item.correct ? 'correct-text' : 'incorrect-text'}>
                {item.selected || 'No answer'}
              </span></p>
              <p>Correct answer: <span className="correct-text">{item.answer}</span></p>
              <p><em>{item.explanation}</em></p>
              <p>Time left: {item.timeLeft}s</p>
            </div>
          ))}

          <div className="button-group">
            <button className="button" onClick={restartQuiz}>Try Another Quiz</button>
            <button className="button" onClick={() => {
              setCurrent(0);
              setScore(0);
              setReview([]);
              setStep('quiz');
            }}>Retry This Quiz</button>
          </div>
        </div>
      </div>
    );
  }

  return <div className="container">Loading...</div>;
};

export default QuizApp;