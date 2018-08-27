import api from '../../lib/api'

const SET_TOKENS = 'auth/SET_TOKENS'
const SET_INSTANCE_URL = 'auth/SET_INSTANCE_URL'
const RESET_AUTH = 'auth/RESET_AUTH'

const initialState = {
  instanceUrl: null,
  token: null,
  logoutToken: null
}

export default function auth(state = initialState, action) {
  switch (action.type) {
  case RESET_AUTH:
    return { ...state, token: null, logoutToken: null, instanceUrl: null }

  case SET_TOKENS:
    return { ...state, token: action.token, logoutToken: action.logoutToken }

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

export const setTokens = ({ token, logoutToken }) => ({
  type: SET_TOKENS,
  token,
  logoutToken
})

export const resetAuth = () => ({
  type: RESET_AUTH
})

export const login = ({ username, password, instanceUrl }) => dispatch => {
  dispatch(setInstanceUrl(instanceUrl))

  return api(instanceUrl)
    .user.login({ username, password })
    .then(tokens => {
      return dispatch(
        setTokens({
          token: tokens.token,
          logoutToken: tokens.logout_token
        })
      )
    })
}

export const logout = () => (dispatch, getState) => {
  const { instanceUrl, logoutToken, token } = getState().auth

  return api(instanceUrl, { token })
    .user.logout(logoutToken)
    .then(() => dispatch(resetAuth()))
}
