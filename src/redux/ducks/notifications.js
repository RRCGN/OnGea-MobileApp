import api from '../../lib/api'

const ACTIVATE_NOTIFICATIONS = 'notifications/ACTIVATE_NOTIFICATIONS'
const ADD_SEEN = 'notifications/ADD_SEEN'

const initialState = {
  isActive: false,
  seenIds: []
}

export default function notifications(state = initialState, action = {}) {
  switch (action.type) {
  case ACTIVATE_NOTIFICATIONS:
    return {
      ...state,
      isActive: true
    }

  case ADD_SEEN:
    return {
      ...state,
      seenIds: [...action.notificationIds, ...state.seenIds]
    }

  default:
    return state
  }
}

export const activateNotifications = () => ({
  type: ACTIVATE_NOTIFICATIONS
})

export const addSeenNotifications = notificationIds => ({
  type: ADD_SEEN,
  notificationIds
})

export const getNewNotifications = () => (dispatch, getState) => {
  const { instanceUrl, token } = getState().auth
  const { seenIds } = getState().notifications

  return api(instanceUrl, { token })
    .notifications.get()
    .then(notifications => {
      const newNotifications = notifications.filter(
        n => !seenIds.includes(n.id)
      )
      const newNotificationIds = newNotifications.map(n => n.id)
      dispatch(addSeenNotifications(newNotificationIds))

      return newNotifications
    })
}

export const checkAnnouncementsAvailable = () => (dispatch, getState) => {
  return dispatch(getNewNotifications()).then(() => {
    dispatch(activateNotifications())
    return
  })
}
