import React from 'react'
import { storiesOf } from '@storybook/react-native'
import ViewDecorator from './ViewDecorator'
import ActivitiesList from '../../subviews/activities/ActivitiesList'
const activitiesJSON = require('../../api-data-structure/activities.json')
export default storiesOf('Activities', module)
  .addDecorator(story => (
    <ViewDecorator>
      {story()}
    </ViewDecorator>
  ))
  .add('Activities List', () => (
    <ActivitiesList activitiesArray={activitiesJSON} handleClick={(activityId) => {alert(`id: ${activityId}`)}}/>
  ))
