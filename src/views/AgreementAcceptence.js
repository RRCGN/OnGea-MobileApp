import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import PlatformIcon from '../components/PlatformIcon'
import Button from '../components/ButtonText'
import fonts from '../utils/fonts.js'
export default class AgreementAcceptence extends React.Component {
  static navigationOptions = { title: 'Web', tabBarLabel: 'Privacy Policy of OnGea app' }

  render() {
    const { agreementText, agreementAcceptHandler} = this.props
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={styles.wrapperHeader}>
              <Text style={styles.title}>
                Privacy Policy of
                <Text style={styles.titleBold}> OnGea app </Text>
              </Text>
              <Text style={styles.subTitle}>
                the following notes are related explicitly to OnGea app
              </Text>
              <View style={styles.line}/>
                <Text style={styles.title2}>
                  REQUESTING PERMISSIONS
                </Text>
              <View style={styles.line}/>
            </View>
            <View style={styles.wrapperBody}>
              <Text style={styles.subTitle}>
                OnGea app requests the following informations as a part of its services,
                by clicking `ACCEPT` at the end of the notes,
                you proof that OnGea is allowed to use the following informations as has been specified
                down in the description.
              </Text>
              <AgreementAcceptenceContent agreementText={agreementText}/>
            </View>
            <View style={styles.wrapperFooter}>
              <View style={styles.acceptButtonContainer}>
                <Button label='ACCEPT' onPress={ () => { agreementAcceptHandler() }}/>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}


const styles = {
  container: { flex: 1 },
  wrapper: {
    marginTop: 40,
    paddingHorizontal: 20
  },
  wrapperHeader: { },
  wrapperBody: { },
  wrapperFooter: {
    flexDirection: 'row',
    padding: 30,
    alignContent: 'center',
    justifyContent: 'center'
  },
  title: {
    ...fonts.title,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 10
  },
  title2: {
    textAlign: 'center',
    paddingVertical: 5
  },
  titleBold: { fontWeight: 'bold' },
  subTitle: {
    textAlign: 'left',
    marginBottom: 20
  },
  acceptButtonContainer: {
    padding: 12
  },
  line: {
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 15
  }
}

AgreementAcceptence.propTypes = {
  agreementText: PropTypes.any
}
AgreementAcceptence.propTypes = {
  agreementAcceptHandler: PropTypes.any
}

const AgreementAcceptenceContent = ({agreementText}) => (
  <View style={contentStyles.container}>
    <View style={contentStyles.block}>
      <View style={contentStyles.blockHeader}>
        <View style={contentStyles.iconContainer}>
          <PlatformIcon androidIcon='camera-alt' iosIcon='md-camera' size={26} style={contentStyles.icon} />
        </View>
        <View style={contentStyles.titleContainer}>
          <Text style={contentStyles.title}>
            Camera
          </Text>
        </View>
      </View>
      <Text style={contentStyles.details}>
        {agreementText.camera}
      </Text>
    </View>

    <View style={contentStyles.block}>
      <View style={contentStyles.blockHeader}>
        <View style={contentStyles.iconContainer}>
          <PlatformIcon androidIcon='my-location' iosIcon='md-locate' size={26} style={contentStyles.icon} />
        </View>
        <View style={contentStyles.titleContainer}>
          <Text style={contentStyles.title}>
            Location
          </Text>
        </View>
      </View>
      <Text style={contentStyles.details}>
        {agreementText.location}
      </Text>
    </View>

    <View style={contentStyles.block}>
      <View style={contentStyles.blockHeader}>
        <View style={contentStyles.iconContainer}>
          <PlatformIcon androidIcon='notifications' iosIcon='md-notifications' size={26} style={contentStyles.icon} />
        </View>
        <View style={contentStyles.titleContainer}>
          <Text style={contentStyles.title}>
            Push Notifications
          </Text>
        </View>
      </View>
      <Text style={contentStyles.details}>
        {agreementText.notifications}
      </Text>
    </View>
  </View>
)

AgreementAcceptenceContent.propTypes = {
  agreementText: PropTypes.object
}

const contentStyles = {
  container: {
    padding: 10
  },
  block: {
    flexDirection: 'column',
    paddingVertical: 10
  },
  iconContainer: {
    width: 40
  },
  titleContainer: {
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold'
  },
  blockHeader: { flexDirection: 'row' },
  icon: {
    width: 26,
    height: 26,
    textAlign: 'center'
  },
  details: {
    paddingLeft: 40
  }
}
