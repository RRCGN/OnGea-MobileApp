import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
// import MobilitiesListView from './MobilitiesListView'
import PropTypes from 'prop-types'
import ToolbarButton from '../components/ToolbarButton'
import PurgeStore from '../components/debug/PurgeStore'
// import Button from '../components/ButtonText'
// import generalStyles from '../utils/styles'
// import Login from './Login'

class ActivitiesOverview extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'My Activities',
      headerRight: (
        <ToolbarButton
          androidIcon="more-vert"
          iosIcon="ios-cog"
          onPress={ () => navigation.navigate('Settings') } />
      ),
      headerLeft: (
        <ToolbarButton
          androidIcon="add"
          iosIcon="ios-add"
          onPress={ () => navigation.navigate('UploadImages') } />
      )
    }
  }

  componentWillMount() {
  }

  render() {
    return (
      <View>
        {/* <Button title='Press me' onPress={() => {console.log(this.props)}} /> */}
        {/* <Button title='Login' onPress={() => {}} /> */}
        <PurgeStore />
      </View>
    )
  }
}

ActivitiesOverview.propTypes = {
  login: PropTypes.func
}

import { connect } from 'react-redux'

const mapStateToProps = state => ({
  agreement: state.agreement,
  auth: state.auth
})

import { acceptAgreement, login } from '../redux/actions'

const mapDispatchToProps = (dispatch) => ({
  acceptAgreement: (props) => { dispatch(acceptAgreement(props)) },
  login: (props) => { dispatch(login(props)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesOverview)
