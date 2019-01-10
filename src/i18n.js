import { setupI18n } from '@lingui/core'
import RNLanguages from 'react-native-languages'
import moment from 'moment'
import 'moment/locale/ca'
import 'moment/locale/de'
import 'moment/locale/el'
import 'moment/locale/en-gb'
import 'moment/locale/es'
import 'moment/locale/fr'
import 'moment/locale/hu'
import 'moment/locale/it'
import 'moment/locale/lt'
import 'moment/locale/nl'
import 'moment/locale/ro'

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

const langShort = RNLanguages.language.split('-')[0]
moment.locale(langShort === 'en' ? 'en-gb' : langShort)

export const i18n = setupI18n({
  language: langShort,
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
