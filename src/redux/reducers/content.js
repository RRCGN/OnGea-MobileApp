import {handle} from 'redux-pack'
import * as types from '../actions/actionTypes'
const activitiesJSON = require('../../api-data-structure/activities.json')

const initialState = {
  isLoading: false,
  isLoaded: false,
  activities: null
}

export default function content(state = initialState, action = {}) {
  const { type, payload } = action
  switch (type) {
  case types.FLUSH_CONTENT:
    return ({
      ...initialState
    })
  case types.LOAD_CONTENT:
    // console.log('content is loading ')
    // return ({ isLoading: false, isLoaded: true, activities: activitiesJSON})
    return handle(state, action, {
      start: _state => {
        console.log('start....')
        return ({..._state, isLoading: true})
      },
      finish: _state => {
        console.log('finish!')
        // curent return is for offline content
        return ({ isLoading: false, isLoaded: true, activities: activitiesJSON})

        // return ({..._state, isLoading: false})
      },

      // success: _state => {
      //   console.log('success => ', payload)
      //   if (payload.status === 'ok') {
      //     return { ..._state, isLoaded: true, activities: payload.data }
      //   } else {
      //     return { ..._state, isLoaded: false}
      //   }
      // },
      // failure: _state => {
      //   console.warn('Loading Data failure', payload)
      //   return { ..._state, isLoaded: false}
      // }
    })
  default:
    return state
  }
}
