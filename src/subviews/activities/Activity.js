import React from 'react'
import { View } from 'react-native'
import { Card, CardSegment, CardTitle } from '../../components/Card'
import DateRange from '../../components/DateRange'
import ButtonFlatGrid from '../../components/ButtonFlatGrid'
import Button from '../../components/ButtonText'

import PropTypes from 'prop-types'

const Activity = ({activityObject, handleClick}) => {
  const _onPress = () => {
    handleClick(activityObject)
  }
  return (
    <View style={styles.listItem}>
      <Card>
        {/* Image */}
        <CardTitle
          image={{ uri: activityObject.image.url }}
          title={activityObject.name}
          onPress={() => _onPress()} />

        {/* Dates */}
        <CardSegment big>
          <DateRange from={activityObject.dateFrom} to={activityObject.dateTo} />
        </CardSegment>

        {/* Action Buttons */}
        <CardSegment big>
          <ButtonFlatGrid>
            <Button
              label="View"
              onPress={() => _onPress()} />
          </ButtonFlatGrid>
        </CardSegment>

      </Card>
    </View>
  )
}

Activity.propTypes = {
  activityObject: PropTypes.object,
  handleClick: PropTypes.func
}

const styles = {
  listItem: {
    flex: 1,
    margin: 10
  }
}
export default Activity
