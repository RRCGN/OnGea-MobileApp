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
import { withI18n } from '@lingui/react'
import { compose } from 'recompose'

import {
  setMapDownloaded,
  setMapDownloading
} from '../redux/ducks/offline-maps'
import { downloadMaps } from '../services/OfflineMapService'
import ToolbarButton from '../components/ToolbarButton'
import TitleOnShadow from '../components/TitleOnShadow'
import StatusBarBackgroundIOS from '../components/StatusBarBackgroundIOS'

import Section from '../components/Section'
import Description from '../subviews/Description'
import Button from '../components/ButtonText'
import ButtonFlatGrid from '../components/ButtonFlatGrid'
import ActivityHeader from '../subviews/activities/ActivityHeader'

import DateRange from '../components/DateRange'
import SectionFiles from '../subviews/SectionFiles'
import SectionShortPlaces from '../subviews/SectionShortPlaces'
import SectionShortOrganization from '../subviews/SectionShortOrganization'
import SectionShortTravel from '../subviews/SectionShortTravel'
import SectionShortSchedule from '../subviews/SectionShortSchedule'
import SectionDescription from '../subviews/SectionDescription'

import { transparentHeaderStyle as headerStyle } from '../utils/styles'

class Activity extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    activity: PropTypes.object.isRequired
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: '',
      headerStyle,
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

  async componentDidMount() {
    const { places } = this.props.activity
    await downloadMaps(
      places,
      this.onPlaceDownloadStart,
      this.onPlaceDownloaded,
      this.onPlaceExists
    )
  }

  onPlaceDownloadStart = place => {
    this.props.setMapDownloading(place)
  }

  onPlaceDownloaded = place => {
    this.props.setMapDownloaded(place)
  }

  onPlaceExists = place => {
    this.props.setMapDownloaded(place)
  }

  getImage = () => {
    const { activity } = this.props
    const image =
      activity.project && activity.project.image && activity.project.image[0]
        ? activity.project.image[0].path
        : 'https://placehold.it/1600x900'

    return image
  }

  handleOrganizationPress = organization => {
    this.props.navigation.navigate('Detail', {
      type: 'ORGANIZATION',
      title: organization.title,
      image: this.getImage(),
      payload: organization
    })
  }

  handlePlacePress = place => {
    this.props.navigation.navigate('ShowMap', { place })
  }

  handleUploadPress = () => {
    this.props.navigation.navigate('UploadImages')
  }

  handleMoreEventsPress = () => {
    const { i18n } = this.props

    this.props.navigation.navigate('Detail', {
      type: 'SCHEDULE',
      title: i18n.t`Events`,
      image: this.getImage(),
      payload: activity.mobilities.events
    })
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

  renderDates = () => {
    const { activity } = this.props

    return (
      <View style={{ backgroundColor: '#7B1FA2', padding: 16 }}>
        <DateRange light from={activity.dateFrom} to={activity.dateTo} />
      </View>
    )
  }

  renderContent = () => {
    const { navigation, activity } = this.props
    const hasEvents =
      activity.mobilities.length > 0 && activity.mobilities[0].events.length > 0

    return (
      <View>
        <SectionDescription text={activity.description} />
        {activity.organisations.length > 0 && (
          <SectionShortOrganization
            organizations={activity.organisations}
            onOrganizationPress={this.handleOrganizationPress}
          />
        )}
        {activity.mobilities.length > 0 && (
          <SectionShortTravel
            dateFrom={activity.mobilities[0].dateFrom}
            dateTo={activity.mobilities[0].dateTo}
            fromCity={activity.mobilities[0].fromCityPlace}
            fromCountry={activity.mobilities[0].fromCountry}
            toCity={activity.mobilities[0].toCityPlace}
            toCountry={activity.mobilities[0].toCountry}
          />
        )}
        {activity.places.length > 0 && (
          <SectionShortPlaces
            places={activity.places}
            onPlacePress={this.handlePlacePress}
          />
        )}
        {hasEvents && (
          <SectionShortSchedule
            events={activity.mobilities.events}
            onMorePress={this.handleMoreEventsPress}
          />
        )}
        <SectionFiles
          data={activity.files}
          onUploadPress={this.handleUploadPress}
        />
      </View>
    )
  }
}

const mapDispatchToProps = {
  setMapDownloaded,
  setMapDownloading
}

const mapStateToProps = (state, ownProps) => {
  const activityId = ownProps.navigation.getParam('activityId')

  return {
    activity: state.activities.entities[activityId]
  }
}

export default compose(
  withI18n(),
  connect(mapStateToProps, mapDispatchToProps)
)(Activity)
