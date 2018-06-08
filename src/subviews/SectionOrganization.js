import React from 'react'
import { Modal, Text, TouchableOpacity, View} from 'react-native'
import PropTypes from 'prop-types'
import Section from '../components/Section'
import ListManager from '../components/ListManager'
import ListItemStandard from '../components/ListItemStandard'
import ToolbarButton from '../components/ToolbarButton'
const organizationJSON = require('../services/temp/organization.json')
import { Colors } from '../utils/constants'
import Communications from 'react-native-communications'

const ModalContent = ({data, closeHandler}) => {
  console.log(data)
  return (
    <View style={{marginTop: 22}}>
      <View style={modalStyles.container}>
      <View style={modalStyles.header}>
        <View style={modalStyles.closeContainer}>
          <ToolbarButton
            androidIcon="close"
            iosIcon="ios-close"
            floating={true}
            iconColor={Colors.PRIMARY_DARK}
            onPress={closeHandler} />
        </View>
      </View>
      <Text style={modalStyles.title}>{data.title}</Text>
       <View>
        <TouchableOpacity onPress={() => Communications.phonecall(data.phone, true)}>
          <View style={modalStyles.holder}>
            <Text style={modalStyles.text}>Phone: {data.phone}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.email(data.mail,null,null,'My Subject','My text')}>
          <View style={modalStyles.holder}>
            <Text style={modalStyles.text}>Send an email</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.text(data.phone)}>
          <View style={modalStyles.holder}>
            <Text style={modalStyles.text}>Send a text/iMessage</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.web(data.website[0].uri)}>
          <View style={modalStyles.holder}>
            <Text style={[modalStyles.text, modalStyles.textLink]}>{data.website[0].title}</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View style={modalStyles.detailsContainer}>
          <Text> title: {data.title} </Text>
          <Text> country: {data.country} </Text>
          <Text> Participant Identification Code: {data.piccode} </Text>
          <Text> postcode: {data.postcode} </Text>
          <Text> street: {data.street} </Text>
          <Text> town: {data.town} </Text>
        </View>
      </View>
    </View>
  )
}

const modalStyles = {
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
ModalContent.propTypes = {
  data: PropTypes.object,
  closeHandler: PropTypes.func
}

class SectionOrganization extends React.Component {
  constructor(props){
    super(props)
    this.handleModelPress = this.handleModelPress.bind(this)
    this.handleModelClose = this.handleModelClose.bind(this)
  }
  state = {
    modalVisible: false,
    selectedOrganisation: {}
  }

  getOrganisationsData = () => {
    return ({
      coordinationOrganisation: (organizationJSON),
      hostOrganisation: organizationJSON
    })
  }

  handleModelPress (item) {
    console.log(item)
    const {modalVisible} = this.state
    this.setState({modalVisible: !modalVisible, selectedOrganisation: item})
  }

  handleModelClose() {
    this.setState({modalVisible: false})
  }
  render() {
    const { coordinationOrganisation, hostOrganisation } = this.getOrganisationsData()
    const {selectedOrganisation} = this.state
    console.log(this.getOrganisationsData())
    return (
      <View>
         <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}>
          <ModalContent data={selectedOrganisation} closeHandler={this.handleModelClose} />
        </Modal>
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
                interactive={true}
                onPress={() => {this.handleModelPress(item)}}
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
                interactive={true}
                onPress={() => {this.handleModelPress(item)}}
                style={organisationsStyles.items} />
            )}
          />
        </Section>
      </View>
    )
  }
}
const organisationsStyles = {
  titleContainer: {
    marginTop: 10,
    marginBottom: 15
  },
  title: {
    color: Colors.DARK_SECONDARY
  },
  items: { height: 26 }
}
SectionOrganization.propTypes = {
  data: PropTypes.object
}
export default SectionOrganization
