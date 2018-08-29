import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import Communications from 'react-native-communications'

export default class OrganizationModal extends React.PureComponent {
  static propTypes = {
    organization: PropTypes.object,
    closeHandler: PropTypes.func
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.closeContainer}>
              <ToolbarButton
                androidIcon="close"
                iosIcon="ios-close"
                floating={true}
                iconColor={Colors.PRIMARY_DARK}
                onPress={closeHandler}
              />
            </View>
          </View>
          <Text style={styles.title}>{organization.title}</Text>
          <View>
            <TouchableOpacity
              onPress={() => Communications.phonecall(organization.phone, true)}
            >
              <View style={styles.holder}>
                <Text style={styles.text}>Phone: {organization.phone}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Communications.email(
                  organization.mail,
                  null,
                  null,
                  'My Subject',
                  'My text'
                )
              }
            >
              <View style={styles.holder}>
                <Text style={styles.text}>Send an email</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Communications.text(organization.phone)}>
              <View style={styles.holder}>
                <Text style={styles.text}>Send a text/iMessage</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Communications.web(organization.website[0].uri)}
            >
              <View style={styles.holder}>
                <Text style={[styles.text, styles.textLink]}>
                  {organization.website[0].title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsContainer}>
            <Text> title: {organization.title} </Text>
            <Text> country: {organization.country} </Text>
            <Text> Participant Identification Code: {organization.piccode} </Text>
            <Text> postcode: {organization.postcode} </Text>
            <Text> street: {organization.street} </Text>
            <Text> town: {organization.town} </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    marginTop: 20,
    height: '100%'
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30,
    color: Colors.PRIMARY
  },
  text: {
    fontSize: 16
  },
  textLink: {
    color: 'blue'
  },
  holder: {
    marginLeft: 30,
    marginBottom: 12
  },
  closeContainer: {
    alignSelf: 'flex-end',
    height: 50,
    width: 50
  },
  header: {
    marginTop: 20,
    height: 50
  },
  detailsContainer: {
    marginTop: 20,
    marginLeft: 40
  }
}
