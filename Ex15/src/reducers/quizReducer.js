import initialState from '../data/initialState';

function quizReducer(state, action) {

  switch (action.type) {
    case 'SELECT_OPTION':
      return {
        ...state,
        selectedOption: action.payload,
      };

    case 'NEXT_QUESTION': {
      const currentQuestion = state.questions[state.currentQuestion];
      const isCorrect = state.selectedOption === currentQuestion.answer;
      const nextQuestionIndex = state.currentQuestion + 1;

      if (nextQuestionIndex < state.questions.length) {
        return {
          ...state,
          currentQuestion: nextQuestionIndex,
          selectedOption: '',
          score: isCorrect ? state.score + 1 : state.score,
        };
      }

      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        showScore: true,
      };
    }

    case 'RESTART_QUIZ':
      return {
        ...initialState,
        questions: [...initialState.questions],
      };

    default:
      return state;
  }
}

export default quizReducer;
