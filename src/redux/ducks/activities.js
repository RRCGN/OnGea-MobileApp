import { normalize } from 'normalizr'

import * as schema from '../schema'
import * as app from './app'
import api from '../../lib/api'

const SET_ACTIVITY_IDS = 'content/SET_ACTIVITY_IDS'
const RESET_ACTIVITES = 'content/RESET_ACTIVITES'

const initialState = {
  ids: [],
  entities: {}
}

export default function content(state = initialState, action = {}) {
  switch (action.type) {
  case app.ADD_ENTITIES:
    return {
      ...state,
      entities: { ...state.entities, ...action.payload.activities }
    }

  case SET_ACTIVITY_IDS:
    return { ...state, ids: action.activityIds }

  case RESET_ACTIVITES:
    return { ...initialState }

  default:
    return state
  }
}

export const setActivityIds = activityIds => ({
  type: SET_ACTIVITY_IDS,
  activityIds
})

export const resetActivities = () => ({
  type: RESET_ACTIVITES
})

export const fetchActivities = () => (dispatch, getState) => {
  const { instanceUrl, token } = getState().auth

  return api(instanceUrl, { token })
    .activities.get()
    .then(activities => {
      const { result, entities } = normalize(activities, [schema.activity])
      dispatch(app.addEntities(entities))
      dispatch(setActivityIds(result))
      return activities
    })
}
