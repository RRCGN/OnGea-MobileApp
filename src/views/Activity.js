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
import SectionDescription from '../subviews/SectionDescription'

import { transparentHeaderStyle as headerStyle } from '../utils/styles'

const downloads = [
  {
    id: 1,
    name: 'Test Datei',
    url:
      'https://shop.strato.com/WebRoot/StoreNL/Shops/61331913/MediaGallery/PDF_Test.pdf',
    filename: 'test.pdf',
    size: 1337
  }
]

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

    return (
      <View>
        <SectionDescription text={activity.description} />
        <SectionShortOrganization
          organizations={activity.organisations}
          onOrganizationPress={this.handleOrganizationPress}
        />
        <SectionShortPlaces
          places={activity.places}
          onPlacePress={this.handlePlacePress}
        />
        <SectionFiles data={downloads} onUploadPress={this.handleUploadPress} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity)
