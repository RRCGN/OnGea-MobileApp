import { setupI18n } from '@lingui/core'
import RNLanguages from 'react-native-languages'

import caMessages from '../locale/ca/messages.js'
import deMessages from '../locale/de/messages.js'
import elMessages from '../locale/el/messages.js'
import enMessages from '../locale/en/messages.js'
import esMessages from '../locale/es/messages.js'
import frMessages from '../locale/fr/messages.js'
import huMessages from '../locale/hu/messages.js'
import itMessages from '../locale/it/messages.js'
import ltMessages from '../locale/lt/messages.js'
import nlMessages from '../locale/nl/messages.js'
import roMessages from '../locale/ro/messages.js'

export const i18n = setupI18n({
  language: RNLanguages.language.split('-')[0],
  catalogs: {
    en: enMessages,
    ca: caMessages,
    de: deMessages,
    el: elMessages,
    es: esMessages,
    fr: frMessages,
    hu: huMessages,
    it: itMessages,
    lt: ltMessages,
    nl: nlMessages,
    ro: roMessages
  }
})
