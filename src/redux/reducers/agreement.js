import * as types from '../actions/actionTypes'

const initialState = {
  textFingerprint: ''
}

export default function agreement(state = initialState, action = {}) {
  switch (action.type) {
  case types.ACCEPT_AGREEMENT:
    return {
      ...state,
      textFingerprint: action.payload
    }
  default:
    return state
  }
}
