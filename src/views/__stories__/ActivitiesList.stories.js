import React from 'react'
import { storiesOf } from '@storybook/react-native'
import ViewDecorator from './ViewDecorator'
import ActivitiesList from '../../subviews/activities/ActivitiesList'
import Activity from '../../subviews/activities/Activity'
const activitiesJSON = require('../../api-data-structure/activities.json')
export default storiesOf('Activities', module)
  .addDecorator(story => (
    <ViewDecorator>
      {story()}
    </ViewDecorator>
  ))
  .add('Activities List', () => (
    <ActivitiesList
      activitiesArray = {activitiesJSON}
      isRefreshing = {false}
      handleRefresh = {() => {}}
      handleClick = {(activityId) => {alert(`id: ${activityId}`)}}
    />
  ))
  .add('Activity View', () => (
    <Activity activityObject = {activitiesJSON[1]} />
  ))
