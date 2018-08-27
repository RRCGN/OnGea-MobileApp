import api from '../../lib/api'

const SET_ACTIVITIES = 'content/SET_ACTIVITIES'
const RESET_ACTIVITES = 'content/RESET_ACTIVITES'

const initialState = []

export default function content(state = initialState, action = {}) {
  switch (action.type) {
  case SET_ACTIVITIES:
    return [ ...action.activities ]

  case RESET_ACTIVITES:
    return []

  default:
    return state
  }
}

export const setActivities = activities => ({
  type: SET_ACTIVITIES,
  activities
})

export const resetActivities = () => ({
  type: RESET_ACTIVITES
})

export const fetchActivities = () => (dispatch, getState) => {
  const { instanceUrl, token } = getState().auth

  return api(instanceUrl, { token })
    .activities.get()
    .then(activites => {
      dispatch(setActivities(activites))
      return activites
    })
}
