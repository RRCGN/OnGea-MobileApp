import React from 'react'
import moment from 'moment'
import Markdown from 'react-native-simple-markdown'
import { I18n } from '@lingui/react'

import Section from '../components/Section'

const SectionDescription = ({ text }) => {
  return (
    <I18n>
      {({ i18n }) => (
        <Section title={i18n.t`Description`}>
          <Markdown>{text}</Markdown>
        </Section>
      )}
    </I18n>
  )
}

export default SectionDescription
