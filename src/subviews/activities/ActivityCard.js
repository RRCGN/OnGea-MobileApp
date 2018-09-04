import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { Card, CardSegment, CardTitle } from '../../components/Card'
import DateRange from '../../components/DateRange'
import ButtonFlatGrid from '../../components/ButtonFlatGrid'
import Button from '../../components/ButtonText'
import { I18n } from '@lingui/react'

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
    const image =
      activity.project && activity.project.image && activity.project.image[0]
        ? activity.project.image[0].path
        : 'https://placehold.it/1600x900'

    return (
      <View style={styles.listItem}>
        <Card>
          <CardTitle
            image={{ uri: image }}
            title={activity.title}
            onPress={this.handleImagePress}
          />

          <CardSegment big>
            <DateRange from={activity.dateFrom} to={activity.dateTo} />
          </CardSegment>

          <CardSegment small>
            <ButtonFlatGrid>
              <I18n>
                {({ i18n }) => (
                  <Button
                    label={i18n.t`View`}
                    color="black"
                    onPress={this.handleButtonPress}
                  />
                )}
              </I18n>
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
