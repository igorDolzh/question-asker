
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/root'

const reducers = []

if (process.env.NODE_ENV !== 'production') {
  reducers.push(window.devToolsExtension ? window.devToolsExtension() : (f) => f)
}

export const store = createStore(rootReducer, {}, compose(applyMiddleware(), ...reducers))

