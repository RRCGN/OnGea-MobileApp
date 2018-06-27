import React, { Component } from 'react'
import ActivitiesList from '../subviews/activities/ActivitiesList'
import ToolbarButton from '../components/ToolbarButton'
import PropTypes from 'prop-types'

class ActivitiesOverview extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    loadContent: PropTypes.func,
    content: PropTypes.object
  }
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

  constructor(props) {
    super(props)
    this.handleRefresh = this.handleRefresh.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleRefresh() {
    this.props.loadContent()
  }

  handleClick (activityObject) {
    this.props.navigation.navigate('SingleActivity', {activityObject})
  }

  render() {
    const { content } = this.props
    return (
      <ActivitiesList
        activitiesArray={content.activities}
        isRefreshing = {content.isLoading}
        handleRefresh = {this.handleRefresh}
        handleClick = {this.handleClick}
      />
    )
  }
}

import { connect } from 'react-redux'

const mapStateToProps = state => ({
  content: state.content
})

import { loadContent } from '../redux/actions'

const mapDispatchToProps = (dispatch) => ({
  loadContent: (props) => { dispatch(loadContent(props)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesOverview)
