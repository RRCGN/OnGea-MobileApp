import {handle} from 'redux-pack'
import * as types from '../actions/actionTypes'

const initialState = {
  access_token: '',
  logout_token: '',
  logged: false,
  isLogging: false,
  isLoggingFailed: false,
  message: ''
}

export default function auth(state = initialState, action = {}) {
  const { type, payload } = action

  switch (type) {
  case types.RESET_AUTH:
    return ({
      ...initialState
    })
  case types.LOGIN:
    return ({
      access_token: 'access_token',
      logout_token: 'logout_token',
      logged: true,
      isLogging: false,
      isLoggingFailed: false,
      message: ''
    })

    return handle(state, action, {
      start: _state => {
        // console.log('start....')
        return ({..._state, isLogging: true})
      },
      finish: _state => {
        // console.log('finish!')
        return ({..._state, isLogging: false})
      },
      success: _state => {
        // console.log('success => ', payload)
        if (payload.status === 'ok') {
          return {
            ..._state,
            ... initialState,
            logged: true,
            access_token: payload.csrf_token,
            logout_token: payload.logout_token
          }
        } else {
          return {
            ..._state,
            ... initialState,
            isLoggingFailed: true,
            message: payload.message }
        }
      },
      failure: _state => {
        // console.warn('Loading Data failure', payload)
        return {
          ..._state,
          ... initialState,
          isLoggingFailed: true,
          message: payload.message }
      }
    })
  case types.LOGOUT:
    return ({
      access_token: 'access_token',
      logout_token: 'logout_token',
      logged: false,
      isLogging: false,
      isLoggingFailed: false,
      message: 'You are now logged out!'
    })
    return handle(state, action, {
      success: _state => {
        // console.log('success => ', payload)
        if (payload.status === 'ok') {
          return { ... initialState }
        } else {
          return { ..._state, message: payload.message }
        }
      },
      failure: _state => {
        // console.warn('Loading Data failure', payload)
        return { ..._state, message: payload.message }
      }
    })
  default:
    return state
  }
}
