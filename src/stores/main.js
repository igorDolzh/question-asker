
import { createStore, applyMiddleware, compose } from 'redux'
import defaultState from './defaultState'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/root'

const reducers = []

if (process.env.NODE_ENV !== 'production') {
  reducers.push(window.devToolsExtension ? window.devToolsExtension() : (f) => f)
}

export const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk), ...reducers))

