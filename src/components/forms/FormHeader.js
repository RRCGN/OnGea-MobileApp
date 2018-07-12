import React from 'react'
import { View, Text } from 'react-native'
import colors from '../../utils/colors'

type props = { currentStep: Number }

const Progress = ({currentStep}: props) => (
  <View style={styles.wrapper}>
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={ currentStep == 1 ? styles.activeTitle : styles.inactiveTitle }>Required </Text>
        <Text style={ currentStep == 2 ? styles.activeTitle : styles.inactiveTitle }>Also Required </Text>
        <Text style={ currentStep == 3 ? styles.activeTitle : styles.inactiveTitle }>Optional </Text>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.stepText}>{`${currentStep}/3`}</Text>
      </View>
    </View>
    <View style={styles.footer}>
      { (currentStep == 1) && (<Text style={styles.descriptionText}>Text Description for step 1</Text>) }
      { (currentStep == 2) && (<Text style={styles.descriptionText}>Text Description for step 1</Text>) }
      { (currentStep == 3) && (<Text style={styles.descriptionText}>Text Description for step 1</Text>) }
    </View>
  </View>
)

const styles = {
  wrapper: {
    flexDirection: 'column',
    paddingLeft: 5,
    paddingTop: 10,
    backgroundColor: colors.purple
  },
  header: {
    height: 50,
    flexDirection: 'row'
  },
  footer: {
    flexDirection: 'column',
    paddingVertical: 20
  },
  progressContainer: {
    height: 50,
    width: 100,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepText: {
    color: colors.white,
    fontSize: 18
  },
  titleContainer: {
    height: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  activeTitle: {
    color: colors.white,
    fontSize: 20,
    lineHeight: 20
  },
  inactiveTitle: {
    fontSize: 11,
    lineHeight: 11,
    color: colors.primaryLightTransparent,
    paddingLeft: 2
  },
  descriptionText: {
    color: colors.white
  }
}
export default Progress
