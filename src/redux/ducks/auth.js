import base64 from 'base-64'
import api from '../../lib/api'
import { resetActivities } from './activities'

const SET_TOKEN = 'auth/SET_TOKEN'
const SET_INSTANCE_URL = 'auth/SET_INSTANCE_URL'
const RESET_AUTH = 'auth/RESET_AUTH'

const initialState = {
  instanceUrl: null,
  token: null
}

export default function auth(state = initialState, action) {
  switch (action.type) {
  case RESET_AUTH:
    return { ...state, token: null, instanceUrl: null }

  case SET_TOKEN:
    return { ...state, token: action.token }

  case SET_INSTANCE_URL:
    return { ...state, instanceUrl: action.instanceUrl }

  default:
    return state
  }
}

export const setInstanceUrl = instanceUrl => ({
  type: SET_INSTANCE_URL,
  instanceUrl
})

export const setToken = token => ({
  type: SET_TOKEN,
  token
})

export const resetAuth = () => ({
  type: RESET_AUTH
})

export const login = ({ username, password, instanceUrl }) => dispatch => {
  return api(instanceUrl)
    .user.login({ username, password })
    .then(response => {
      const token = base64.encode(`${username}:${password}`)
      alert(token)
      dispatch(setInstanceUrl(instanceUrl))
      dispatch(setToken(token))
      return true
    })
}

export const logout = () => dispatch => {
  dispatch(resetAuth())
  dispatch(resetActivities())
}
