import React from 'react'
import moment from 'moment'
import Markdown from 'react-native-simple-markdown'

import Section from '../components/Section'

const SectionDescription = ({ text }) => {
  return (
    <Section title="Description">
      <Markdown>{text}</Markdown>
    </Section>
  )
}

export default SectionDescription
