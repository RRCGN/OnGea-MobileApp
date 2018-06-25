import React, { Component } from 'react'
import { Dimensions, Image, Platform, Text, StyleSheet, View, StatusBar} from 'react-native'
import * as Animatable from 'react-native-animatable'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
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

const mobilitiesJSON = require('../api-data-structure/mobilities.json')
const activitiesJSON = require('../api-data-structure/activities.json')

const staysJSON =  require('../api-data-structure/stays.json')


class SingleActivityView extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '',
      titleStyle: {
        color: 'white'
      },
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

  componentWillMount() {
    this.headerWidth = Dimensions.get('window').width
    this.headerHeight = this.headerWidth * (2/3)
    this.stickyHeaderHeight = Platform.OS === 'ios' ? 86 : 80
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

  _handleStickHeader = () => {
    this.navBarView.fadeIn(200)
  }

  _handleUnstickHeader = () => {
    this.navBarView.fadeOut(200)
  }

  render() {
    return (
        <HeaderImageScrollView
          maxHeight={this.headerHeight}
          minHeight={this.stickyHeaderHeight}
          renderHeader={this._renderTitleBackground}
          renderForeground={this._renderTitleForeground}
          renderFixedForeground={this._renderStickyHeader}
          fadeOutForeground
          foregroundParallaxRatio={0.8}
        >
          <TriggeringView
            onBeginHidden={this._handleStickHeader}
            onDisplay={this._handleUnstickHeader}
          >
            {this._renderDates()}
          </TriggeringView>
          {this._renderContent()}
        </HeaderImageScrollView>
    )
  }

  _renderDates = () => {
    const activity = this.getActivityContent()
    return (
      <View style={{ backgroundColor: '#7B1FA2', padding: 16 }}>
        <DateRange light from={activity.dateFrom} to={activity.dateTo} />
      </View>
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

  _renderTitleForeground = () => {
    const {title, subtitle} = this.getActivityContent()
    return <TitleOnShadow title={title} subtitle={subtitle} />
  }

  _renderTitleBackground = () => {
    const {image} = this.getActivityContent()
    return (
      <View style={{ height: this.headerHeight }}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: image.url }}
          width={this.headerWidth}
          height={this.headerHeight}
          resizeMode="cover"
        />
      </View>
    )
  }

  _renderStickyHeader = () => {
    const {title} = this.getActivityContent()
    return (
      <View>
        <StatusBarBackgroundIOS />
        <Animatable.View
          style={styles.stickyHeader}
          ref={(navBarView) => this.navBarView = navBarView}>
          <View style={styles.stickyHeaderInner}>
            <Text numberOfLines={2} style={styles.toolbarTitle}>{title}</Text>
          </View>
        </Animatable.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  stickyHeader: {
    opacity: 0,
    ...Platform.select({
      ios: {
        marginTop: 19,
        height: 46
      },
      android: {
        marginTop: 24,
        height: 56
      }
    })
  },
  stickyHeaderInner: {
    flex: 1,
    justifyContent: 'center',
    ...Platform.select({
      android: {
        marginLeft: 55,
        paddingRight: 16
      }
    })
  },
  toolbarTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowRadius: 2,
    textShadowOffset: { width: 0, height: 1 },
    ...Platform.select({
      ios: {
        fontWeight: '600',
        fontSize: 16,
        alignSelf: 'center'
      },
      android: {
        fontWeight: '500',
        fontSize: 17,
        alignSelf: 'flex-start'
      }
    })
  }
})

SingleActivityView.propTypes = {
  navigation: PropTypes.object
}

export default SingleActivityView
