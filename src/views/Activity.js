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
    const projectImage =
      activity.project && activity.project.image && activity.project.image[0]
        ? activity.project.image[0].path
        : 'https://placehold.it/1600x900'
    const activityImage = activity.image && activity.image.path

    return activityImage || projectImage
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

  handleEventPress = event => () => {
    if (event.place) {
      this.props.navigation.navigate('ShowMap', { place: event.place })
    }
  }

  handleTravelPress = travel => {
    const { i18n } = this.props

    this.props.navigation.navigate('Detail', {
      type: 'TRAVEL',
      title: travel.title,
      image: this.getImage(),
      payload: travel
    })
  }

  handleUploadPress = () => {
    this.props.navigation.navigate('UploadImages')
  }

  handleMoreEventsPress = events => {
    const { i18n } = this.props

    this.props.navigation.navigate('Detail', {
      type: 'SCHEDULE',
      title: i18n.t`Events`,
      image: this.getImage(),
      payload: events
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
      <View style={{ backgroundColor: '#fedd32', padding: 16 }}>
        <DateRange from={activity.dateFrom} to={activity.dateTo} />
      </View>
    )
  }

  renderContent = () => {
    const { navigation, activity } = this.props
    const hasEvents =
      activity.mobilities.length > 0 && activity.mobilities[0].events.length > 0
    const hasTravels =
      activity.mobilities.length > 0 &&
      activity.mobilities[0].travels.length > 0

    return (
      <View>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
          animated
        />
        <SectionDescription text={activity.description} />
        {activity.organisations.length > 0 && (
          <SectionShortOrganization
            organizations={activity.organisations}
            onOrganizationPress={this.handleOrganizationPress}
          />
        )}
        {hasTravels && (
          <SectionShortTravel
            travels={activity.mobilities[0].travels}
            onMorePress={this.handleTravelPress}
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
            events={activity.mobilities[0].events}
            onMorePress={this.handleMoreEventsPress}
            onEventPress={this.handleEventPress}
          />
        )}
        <SectionFiles
          data={activity.files}
          onUploadPress={this.handleUploadPress}
        />
        {Platform.OS === 'ios' && <View style={styles.iPhoneXSpacing} />}
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Activity)

const styles = StyleSheet.create({
  iPhoneXSpacing: {
    height: 40
  }
})
