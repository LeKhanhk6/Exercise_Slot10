import { useReducer } from 'react';
import quizReducer from '../reducers/quizReducer';
import initialState from '../data/initialState';
import '../styles/QuestionBank.css';

function QuestionBank() {

  const [state, dispatch] = useReducer(quizReducer, initialState);

  const { questions, currentQuestion, selectedOption, score, showScore } = state;
  const question = questions[currentQuestion];

  function handleOptionSelect(option) {
    dispatch({ type: 'SELECT_OPTION', payload: option });
  }

  function handleNextQuestion() {
    dispatch({ type: 'NEXT_QUESTION' });
  }

  function handleRestartQuiz() {
    dispatch({ type: 'RESTART_QUIZ' });
  }

  return (
    <div className="quiz-page">
      <div className="quiz-card">
        <h2>Quiz App</h2>

        {showScore ? (
          <div className="score-box">
            <p>Your Score: {score}/{questions.length}</p>
            <button type="button" onClick={handleRestartQuiz} className="restart-button">
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <p className="question-label">Question {currentQuestion + 1}</p>
            <h3>{question.question}</h3>

            <div className="option-list">
              {question.options.map((option) => {
                const isSelected = selectedOption === option;

                return (
                  <button key={option} type="button"
                    onClick={() => handleOptionSelect(option)}
                    className={`option-button ${isSelected ? 'selected' : ''}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <button type="button" className="next-button"
              onClick={handleNextQuestion}
              disabled={!selectedOption}
            >
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default QuestionBank;
