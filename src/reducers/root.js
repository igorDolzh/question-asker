import { combineReducers } from 'redux'

const defaultReducer = (state = null, action) => {
  switch (action.type) {
    case `SET_STATE_${name}`:
      return action.value
    default:
      return state
  }
}

export default combineReducers({
  state: defaultReducer,
})
