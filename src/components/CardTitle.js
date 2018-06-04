/**
 * Rich Media Title for a Card.
 * @flow
 */

import React from 'react'
import { View } from 'react-native'
import type { ImageSource } from 'react-native'
import { Colors } from '../utils/constants'
import Touchable from './Touchable'
import TitleOnShadow from './TitleOnShadow'
import ImageCaptionContainer from './ImageCaptionContainer'


type Props = {
  image: ImageSource,
  title: string,
  onPress: () => void
}


const CardTitle = ({ image, title, onPress = () => {} }: Props) => (
  <Touchable
    rippleColor={Colors.RIPPLE_DARK}
    useForeground={true}
    onPress={onPress}
  >
    <View style={{ aspectRatio: 16/9 }}>
      <ImageCaptionContainer
        source={image}
        caption={<TitleOnShadow title={title} />}
      />
    </View>
  </Touchable>
)

export default CardTitle
