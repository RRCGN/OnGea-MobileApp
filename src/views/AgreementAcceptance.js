import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import AgreementAcceptanceItems from './AgreementAcceptanceItems'
import PlatformIcon from '../components/PlatformIcon'
import Button from '../components/ButtonText'
import fonts from '../utils/fonts'

export default class AgreementAcceptance extends React.PureComponent {
  static navigationOptions = {
    title: 'Web',
    tabBarLabel: 'Privacy Policy of OnGea app'
  }

  static propTypes = {
    agreements: PropTypes.array.isRequired,
    onAgree: PropTypes.func.isRequired
  }

  handleButtonPress = () => {
    this.props.onAgree()
  }

  render() {
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
              <View style={styles.line} />
              <Text style={styles.title2}>REQUESTING PERMISSIONS</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.wrapperBody}>
              <Text style={styles.subTitle}>
                OnGea app requests the following informations as a part of its
                services, by clicking `ACCEPT` at the end of the notes, you
                proof that OnGea is allowed to use the following informations as
                has been specified down in the description.
              </Text>
              <AgreementAcceptanceItems items={this.props.agreements} />
            </View>
            <View style={styles.wrapperFooter}>
              <View style={styles.acceptButtonContainer}>
                <Button label="ACCEPT" onPress={this.handleButtonPress} />
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
  wrapperHeader: {},
  wrapperBody: {},
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
