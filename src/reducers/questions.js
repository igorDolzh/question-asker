import { handleActions } from 'redux-actions'
import { getAllQuestions, replaceAllQuestions } from '../stores/actions'

export default handleActions(
  new Map([
    [getAllQuestions,
      (state) => state],
    [replaceAllQuestions,
      (state, action) => action.payload ],
  ]), [])
