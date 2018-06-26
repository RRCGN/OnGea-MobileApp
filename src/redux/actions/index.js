import * as types from './actionTypes'

import {
  login as loginService,
  logout as logoutService
} from '../services/auth'
import { loadContent as loadContentService } from '../services/content'


export const acceptAgreement = (textFingerprint) => {
  return { type: types.ACCEPT_AGREEMENT, payload: textFingerprint}
}

export const login = (props) => {
  return {
    type: types.LOGIN,
    promise: loginService(props)
  }
}

export const logout = (logoutToken) => {
  return {
    type: types.LOGOUT,
    promise: logoutService(logoutToken)
  }
}

export const resetAuth = () => {
  return { type: types.RESET_AUTH }
}

export const loadContent = (accessToken) => {
  return {
    type: types.LOAD_CONTENT,
    promise: loadContentService(accessToken)
  }
}

export const resetContent = () => {
  return { type: types.RESET_CONTENT }
}
