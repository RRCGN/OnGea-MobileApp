import { i18n } from '../i18n'

export default {
  version: 0,
  items: [
    {
      title: i18n.t`Camera`,
      androidIcon: 'camera-alt',
      iosIcon: 'md-camera',
      text:
        i18n.t`The OnGea App needs access to your camera, so that you can take photos of your travel tickets/boarding cards and send them to your sending organisation if requested.`
    },
    {
      title: i18n.t`Location`,
      androidIcon: 'my-location',
      iosIcon: 'md-locate',
      text:
        i18n.t`The OnGea App needs access to your location data, so that you can inform the staff of your host and/or sending organisation about your current location by pressing the "I am here" button. The OnGea App won't send your location data anywhere as long as you don't push that button. Since the app is not completely examined and ready for production, there will be a test MapView which requires your location, no data will be saved or carried to third party.`
    },
    {
      title: i18n.t`Push Notifications`,
      androidIcon: 'notifications',
      iosIcon: 'md-notifications',
      text:
        i18n.t`The OnGea App needs push-notifications ability to be able to inform the user if plans have suddenly been changed.`
    },
    {
      title: i18n.t`Storage`,
      androidIcon: 'storage',
      iosIcon: 'ios-folder-open',
      text:
        i18n.t`The OnGea App needs read and write access to your storage, so that you can download and view important documents, even if you don't have an internet connection.`
    }
  ]
}
