import React from 'react'
import {
  Dimensions,
  Image,
  Platform,
  Text,
  StyleSheet,
  View,
  StatusBar
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ToolbarButton from '../components/ToolbarButton'
import TitleOnShadow from '../components/TitleOnShadow'
import StatusBarBackgroundIOS from '../components/StatusBarBackgroundIOS'
import DateRange from '../components/DateRange'
import SectionShortTravel from '../subviews/SectionShortTravel'
import SectionShortStay from '../subviews/SectionShortStay'
import SectionOrganization from '../subviews/SectionOrganization'
import Section from '../components/Section'
import Description from '../subviews/Description'
import MainWorkingLanguage from '../subviews/MainWorkingLanguage'
import ParticipationFee from '../subviews/ParticipationFee'
import Button from '../components/ButtonText'
import ButtonFlatGrid from '../components/ButtonFlatGrid'
import generalStyles from '../utils/styles'
import ActivityHeader from '../subviews/activities/ActivityHeader'

const mobilitiesJSON = require('../api-data-structure/mobilities.json')
const activitiesJSON = require('../api-data-structure/activities.json')

const staysJSON = require('../api-data-structure/stays.json')

class Activity extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    activity: PropTypes.object.isRequired
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: '',
      headerStyle: {
        ...generalStyles.headerStyle,
        elevation: 0,
        borderRadius: 0,
        borderBottomWidth: 0,
        shadowRadius: 0,
        shadowColor: 'transparent',
        backgroundColor: 'transparent',
        marginBottom:
          Platform.OS === 'ios' ? -86 : -56 - StatusBar.currentHeight,
        zIndex: 1
      },
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          floating={true}
          onPress={() => navigation.goBack(null)}
        />
      )
    }
  }

  renderDates = () => {
    const { activity } = this.props

    return (
      <View style={{ backgroundColor: '#7B1FA2', padding: 16 }}>
        <DateRange light from={activity.dateFrom} to={activity.dateTo} />
      </View>
    )
  }

  render() {
    return (
      <ActivityHeader
        activity={this.props.activity}
        renderDates={this.renderDates}
      >
        {this.renderContent()}
      </ActivityHeader>
    )
  }

  renderContent = () => {
    const { navigation, activity } = this.props

    return (
      <View>
        <Section title="Description">
          <Description description={activity.description} />
        </Section>
        <Section title="Main Working Languages">
          <MainWorkingLanguage data={activity.mainWorkingLanguage} />
        </Section>
        <SectionShortTravel
          mobilities={this.props.mobilities || []}
          travelIndex={activity.id}
          navigation={navigation}
          footer={
            <ButtonFlatGrid>
              <Button
                label="More"
                // onPress={() => navigation.navigate('Detail', { type: 'TRAVEL', data: params.travels, ...genericParams })}
                onPress={() => {}}
              />
            </ButtonFlatGrid>
          }
        />
        {/* <SectionShortStay
          stays={this.props.activity.stays || []}
          navigation={navigation}
          footer={
            <ButtonFlatGrid>
              <Button
                label="More"
                // onPress={() => navigation.navigate('Detail', { type: 'STAY', data: params.stays, ...genericParams })}
                onPress={() => {}}
              />
            </ButtonFlatGrid>
          }
        /> */}
        {/* <SectionShortSchedule
          data={params.schedule}
          navigation={navigation}
          footer={
            <ButtonFlatGrid>
              <Button
                label="Schedule"
                onPress={() => navigation.navigate('Detail', { type: 'SCHEDULE', data: params.schedule, ...genericParams })}
              />
            </ButtonFlatGrid>
          }
        /> */}
        <SectionOrganization
          hostOrganisation={{}}
          coordinationOrganisation={{}}
        />
        {/* <SectionDownloads data={params.data.downloads} /> */}
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const activityId = ownProps.navigation.getParam('activityId')

  return {
    activity: state.activities.entities[activityId]
  }
}

export default connect(mapStateToProps)(Activity)
