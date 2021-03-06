import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../utils/constants'

type Props = {
  title: string,
  titleColor?: string,
  noBorder?: boolean,
  children: any
}

const Section = ({
  title,
  titleColor = Colors.DARK_SECONDARY,
  noBorder = false,
  children
}: Props) => (
  <View style={[ styles.section, !noBorder && styles.border ]}>
    {title &&
      <View style={styles.subheader}>
        <Text style={[ { color: titleColor }, styles.title ]}>
          {title}
        </Text>
      </View>
    }
    <View style={[ styles.content, !title && styles.contentPadding ]}>
      {children}
    </View>
  </View>
)

export default Section


const styles = StyleSheet.create({
  section: {
    flex: 0,
    backgroundColor: 'white'
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.DARK_DIVIDER
  },
  subheader: {
    height: 48,
    flex: 0,
    justifyContent: 'center',
    paddingLeft: 16
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16
  },
  contentPadding: {
    paddingTop: 16
  }
})
