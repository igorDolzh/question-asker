import { create } from 'axios'

const instance = create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

const { get } = instance

export const fetchAllQuestions = () => get('/questions')

export const getAllQuestionCategories = () => get('/questionCategories')

export const getAllGames = () => get('/games')

export const getAllResults = () => get('/results')
