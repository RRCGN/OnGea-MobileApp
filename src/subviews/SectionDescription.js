import React from 'react'
import { Text } from 'react-native'
import { I18n } from '@lingui/react'

import Section from '../components/Section'

const SectionDescription = ({ text }) => {
  return (
    <I18n>
      {({ i18n }) => (
        <Section title={i18n.t`Description`}>
          <Text style={{ color: 'black' }}>{text}</Text>
        </Section>
      )}
    </I18n>
  )
}

export default SectionDescription
