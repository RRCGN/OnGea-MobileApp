import React, { Component } from 'react'
import { Dimensions, Image, Platform, Text, StyleSheet, View, StatusBar} from 'react-native'
import * as Animatable from 'react-native-animatable'
// import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
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
import PropTypes from 'prop-types'
import generalStyles from '../utils/styles'



import ActivityHeader from '../subviews/activities/ActivityHeader'




const mobilitiesJSON = require('../api-data-structure/mobilities.json')
const activitiesJSON = require('../api-data-structure/activities.json')

const staysJSON =  require('../api-data-structure/stays.json')


class Activity extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '',
      headerStyle: {
        ...generalStyles.headerStyle,
        borderRadius: 0,
        backgroundColor: 'transparent',
        marginBottom: Platform.OS === 'ios' ? -86 : -56 - StatusBar.currentHeight,
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

  getActivityContent() {
    return (activitiesJSON[0])
  }

  participationFeeData() {
    const {
      participationFee,
      participationFeeCurrency,
      participationFeeReducedActive,
      participationFeeReducedCurrency,
      participationFeeReduced
    } = this.getActivityContent()
    return ({
      participationFee: String(participationFee),
      participationFeeCurrency: String(participationFeeCurrency),
      participationFeeReducedActive: String(participationFeeReducedActive),
      participationFeeReducedCurrency: String(participationFeeReducedCurrency),
      participationFeeReduced: String(participationFeeReduced)
    })
  }

  renderDates = () => {
    const activity = this.getActivityContent()
    return (
      <View style={{ backgroundColor: '#7B1FA2', padding: 16 }}>
        <DateRange light from={activity.dateFrom} to={activity.dateTo} />
      </View>
    )
  }

  render() {
    return (
      <ActivityHeader activityObject={this.getActivityContent()} renderDates={this.renderDates}>
        {this._renderContent()}
      </ActivityHeader>
    )
  }



  _renderContent = () => {
    const { navigation } = this.props
    const mobilities = mobilitiesJSON
    const activity = this.getActivityContent()
    const {coordinationOrganisation, hostOrganisation} = activity
    return (
      <View>
        <Section title="Description">
          <Description description = { activity.description } />
        </Section>
        <Section title="Main Working Languages">
          <MainWorkingLanguage data = { activity.mainWorkingLanguage } />
        </Section>
        <SectionShortTravel
          mobilities={mobilities}
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
        <SectionShortStay
          stays={staysJSON}
          navigation={navigation}
          footer={
            <ButtonFlatGrid>
              <Button
                label="More"
                // onPress={() => navigation.navigate('Detail', { type: 'STAY', data: params.stays, ...genericParams })}
                onPress={ () => {} }
              />
            </ButtonFlatGrid>
          }
        />
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
        <Section title="Fees">
          <ParticipationFee {...this.participationFeeData()} />
        </Section>
        <SectionOrganization data={{coordinationOrganisation, hostOrganisation}} />
        {/* <SectionDownloads data={params.data.downloads} /> */}
      </View>
    )
  }
}

Activity.propTypes = {
  navigation: PropTypes.object
}

export default Activity
