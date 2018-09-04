import { PushNotificationIOS, Alert, Platform } from 'react-native'
import BackgroundTask from 'react-native-background-task'
import PushNotification from 'react-native-push-notification'
import {
  checkAnnouncementsAvailable,
  getNewNotifications
} from '../redux/ducks/notifications'

let store = null

export function poll() {
  return store.dispatch(getNewNotifications()).then(notifications => {
    notifications.forEach(notif => {
      PushNotification.localNotification({
        title: notif.title,
        message: notif.message,
        click_action: 'OPEN_MAIN_ACTIVITY'
      })
    })
    return
  })
}

BackgroundTask.define(() => {
  poll()
    .then(() => {
      BackgroundTask.finish()
    })
    .catch(err => {
      console.error(err)
      BackgroundTask.finish()
    })
})

function start() {
  // approx. runs every 30 mins (better for battery),
  // depending on device sleep status
  BackgroundTask.schedule({
    period: 1800
  })
}

export const setStore = s => {
  store = s
}

export function cancelNotifications() {
  BackgroundTask.cancel()
}

export function scheduleNotifications() {
  const state = store.getState()
  const { isActive } = state.notifications

  if (isActive) {
    start()
    return Promise.resolve({ firstTime: false })
  }

  return new Promise((resolve, reject) => {
    store
      .dispatch(checkAnnouncementsAvailable())
      .then(() => {
        start()
        resolve({ firstTime: true })
      })
      .catch(err => reject(err))
  })
}

export function configurePushNotifications() {
  PushNotification.configure({
    onNotification: function(notification) {
      // ios does not show notifications in foreground
      if (Platform.OS === 'ios' && notification.foreground) {
        Alert.alert(notification.title, notification.message, [
          { text: 'OK', onPress: () => {} }
        ])
      }

      else if (notification.userInteraction) {
        Alert.alert(notification.title, notification.message, [
          { text: 'OK', onPress: () => {} }
        ])
      }

      notification.finish(PushNotificationIOS.FetchResult.NoData)
    },
    requestPermissions: false
  })
}
