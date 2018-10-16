import { createAction } from 'redux-actions'
import { fetchAllQuestions } from '../../helpers/requests'

export const getAllQuestions = createAction('GET_ALL_QUESTIONS')

export const replaceAllQuestions = createAction('REPLACE_ALL_QUESTIONS')

export const requestAllQuestions = () => (dispatch) => {
  console.log('fetch')
  fetchAllQuestions()
    .then(({ data }) => {
      console.log('data', data)
      dispatch(replaceAllQuestions(data))
    })
}

export const getAllQuestionCategories = createAction('GET_ALL_QUESTION_CATEGORIES')

export const getAllGames =  createAction('GET_ALL_GAMES')

export const getAllResults = createAction('GET_ALL_RESULTS')
