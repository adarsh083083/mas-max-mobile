import React from 'react';
import {Text, Image, Pressable, View} from 'react-native';
import {COLORS} from '../../constants/index';
import {styles} from './styles.Appbutton';
function AppButton({title, image, onPress, color = 'ORANGE'}) {
  return (
    <Pressable
      android_ripple={{
        borderless: false,
        foreground: true,
      }}
      style={[styles.button, {borderColor: COLORS[color], overflow: 'hidden'}]}
      onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <Image source={image} style={styles.imageStyle} resizeMode="contain" />
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
}
export default AppButton;
