/**
 *
 * @flow
 */

import { Platform } from 'react-native'
import PushNotification from 'react-native-push-notification'
// import BackgroundFetch from 'react-native-background-fetch' // ios only
import BackgroundJob from 'react-native-background-job' // android only
import ApiService from './ApiService'


export default class NotificationService {
  constructor() {
    this.foregroundPollingTimer = null
  }

  sendLocalNotification({ title, message }) {
    PushNotification.localNotification({
      message
    })
  }

  async checkNewNotifications() {
    const { notifications } = await ApiService.notifications()

    notifications.forEach(notification => {
      this.sendLocalNotification(notification)
    })
  }

  register() {
    PushNotification.configure({
      onNotification: (notification) => {
        console.log('NOTIFICATION', notification)
      }
    })

    // this.startForegroundPolling()
  }

  unregister() {
    this.stopForegroundPolling()
    this.stopBackgroundPolling()
  }

  startBackgroundPolling() {
    if (Platform.OS === 'ios') this.startIOSBackgroundPolling()
    else this.startAndroidBackgroundPolling()
  }

  stopBackgroundPolling() {
    if (Platform.OS === 'ios') this.stopIOSBackgroundPolling()
    else this.stopAndroidBackgroundPolling()
  }

  startAndroidBackgroundPolling() {
    const jobKey = 'ONGEA_POLL_NOTIFICATIONS'

    BackgroundJob.register({
      jobKey,
      job: async () => {
        await this.checkNewNotifications()
      }
    })

    BackgroundJob.schedule({
      jobKey,
      warn: false,
      timeout: 30000
    })
  }

  stopAndroidBackgroundPolling() {
    BackgroundJob.cancelAll()
  }

  /*startIOSBackgroundPolling() {
    BackgroundFetch.configure({
      stopOnTerminate: false
    }, async () => {
      await this.checkNewNotifications()
      BackgroundFetch.finish()
    }, (error) => {
      console.log('IOS Background Fetch failure', error)
    })
  }*/

  /*stopIOSBackgroundPolling() {
    BackgroundFetch.stop()
  }*/

  startForegroundPolling() {
    this.foregroundPollingTimer = setInterval(async () => {
      await this.checkNewNotifications()
    }, 30 * 1000)
  }

  stopForegroundPolling() {
    clearInterval(this.foregroundPollingTimer)
  }
}
