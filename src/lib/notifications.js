import { PushNotificationIOS, Alert, Platform, AppState } from 'react-native'
import BackgroundFetch from 'react-native-background-fetch'
import PushNotification from 'react-native-push-notification'
import {
  checkAnnouncementsAvailable,
  getNewNotifications
} from '../redux/ducks/notifications'

let store = null

export function poll() {
  return store.dispatch(getNewNotifications()).then(notifications => {
    // The push notification library currently doesn't show local notifications
    // when the app is in foreground. Instead we show an alert.
    if (Platform.OS === 'android' && AppState.currentState === 'active') {
      notifications.forEach(notif => {
        Alert.alert(notif.title || 'OnGea Announcement', notif.message, [
          { text: 'OK', onPress: () => {} }
        ])
      })
      return
    }

    notifications.forEach(notif => {
      PushNotification.localNotification({
        title: notif.title,
        message: notif.message
      })
    })

    return notifications.length > 0
  })
}

async function fetchTask() {
  try {
    const hasNewNotifications = await poll()
    const exitStatus = hasNewNotifications
      ? BackgroundFetch.FETCH_RESULT_NEW_DATA
      : BackgroundFetch.FETCH_RESULT_NO_DATA
    BackgroundFetch.finish(exitStatus)
  } catch (err) {
    console.warn(err)
    BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_FAILED)
  }
}

function start() {
  // approx. runs every 30 mins (better for battery),
  // depending on device sleep status and user activity pattern.
  BackgroundFetch.configure(
    {
      minimumFetchInterval: 30,
      stopOnTerminate: false,
      startOnBoot: true,
      enableHeadless: true
    },
    fetchTask,
    () => {
      console.warn('RNBackgroundFetch failed to start')
    }
  )
  BackgroundFetch.registerHeadlessTask(fetchTask)
}

export const setStore = s => {
  store = s
}

export function cancelNotifications() {
  BackgroundFetch.stop()
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
        Alert.alert(
          notification.title || 'OnGea Announcement',
          notification.message,
          [{ text: 'OK', onPress: () => {} }]
        )
      } else if (notification.userInteraction) {
        Alert.alert(
          notification.title || 'OnGea Announcement',
          notification.message,
          [{ text: 'OK', onPress: () => {} }]
        )
      }

      notification.finish(PushNotificationIOS.FetchResult.NoData)
    },
    requestPermissions: true
  })
}
