import React from 'react'
import {Text, View} from 'react-native'
import PropTypes from 'prop-types'
import Section from '../components/Section'
import ListManager from '../components/ListManager'
import ListItemStandard from '../components/ListItemStandard'
const organizationJSON = require('../services/temp/organization.json')
import { Colors } from '../utils/constants'

const SectionOrganization = (props) => {
  const getOrganisationsData = () => {
    return ({
      coordinationOrganisation: (organizationJSON),
      hostOrganisation: organizationJSON
    })
  }

  const { coordinationOrganisation, hostOrganisation } = getOrganisationsData()
  console.log(getOrganisationsData())
  return (
    <View>
      <Section title="Contact">
        <View style={organisationsStyles.titleContainer}>
          <Text style={organisationsStyles.title}>Host Organisation(s)</Text>
        </View>
        <ListManager
          items={coordinationOrganisation}
          renderItem={(item, i) => (
            <ListItemStandard
              key={i}
              primary={item.title}
              style={organisationsStyles.items}/>
          )}
        />
        <View style={organisationsStyles.titleContainer}>
          <Text style={organisationsStyles.title}>Host Organisation(s)</Text>
        </View>
        <ListManager
          items={hostOrganisation}
          renderItem={(item, i) => (
            <ListItemStandard
              key={i}
              primary={item.title}
              secondary={item.contact}
              style={organisationsStyles.items} />
          )}
        />
      </Section>
    </View>
  )
}
const organisationsStyles = {
  titleContainer: {
    marginTop: 10,
    marginBottom: 15
  },
  title: {
    color: Colors.DARK_SECONDARY
  },
  items: { height: 20 }
}
SectionOrganization.propTypes = {
  data: PropTypes.object
}
export default SectionOrganization
