import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { Card, CardSegment, CardTitle } from '../../components/Card'
import DateRange from '../../components/DateRange'
import ButtonFlatGrid from '../../components/ButtonFlatGrid'
import Button from '../../components/ButtonText'

export default class ActivityCard extends React.PureComponent {
  static propTypes = {
    onGoToActivity: PropTypes.func.isRequired,
    activity: PropTypes.object.isRequired
  }

  handleButtonPress = () => {
    this.props.onGoToActivity()
  }

  handleImagePress = () => {
    this.props.onGoToActivity()
  }

  render() {
    const { activity } = this.props

    return (
      <View style={styles.listItem}>
        <Card>
          <CardTitle
            image={{ uri: activity.image.url }}
            title={activity.title}
            onPress={this.handleImagePress}
          />

          <CardSegment big>
            <DateRange
              from={activity.dateFrom}
              to={activity.dateTo}
            />
          </CardSegment>

          <CardSegment big>
            <ButtonFlatGrid>
              <Button label="View" onPress={this.handleButtonPress} />
            </ButtonFlatGrid>
          </CardSegment>
        </Card>
      </View>
    )
  }
}

const styles = {
  listItem: {
    flex: 1,
    margin: 10
  }
}
