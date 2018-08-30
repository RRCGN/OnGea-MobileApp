import { setupI18n } from '@lingui/core'
import RNLanguages from 'react-native-languages'

import enMessages from '../locale/en/messages.js'
import deMessages from '../locale/de/messages.js'

export const i18n = setupI18n({
  language: RNLanguages.language.split('-')[0],
  catalogs: {
    en: enMessages,
    de: deMessages
  }
})
