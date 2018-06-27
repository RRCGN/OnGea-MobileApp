import React from 'react'
import { View } from 'react-native'
import type { ImageSource } from 'react-native'
import colors from '../../utils/colors'
import Touchable from '../Touchable'
import TitleOnShadow from '../TitleOnShadow'
import ImageCaptionContainer from '../ImageCaptionContainer'


type Props = {
  image: ImageSource,
  title: string,
  onPress: () => void
}


const CardTitle = ({ image, title, onPress = () => {} }: Props) => (
  <Touchable
    rippleColor={colors.rippleDark}
    useForeground={true}
    onPress={onPress}
  >
    <View style={{ aspectRatio: 16/9, width: '100%'}}>
      <ImageCaptionContainer
        source={image}
        caption={<TitleOnShadow title={title} />}
      />
    </View>
  </Touchable>
)

export default CardTitle
