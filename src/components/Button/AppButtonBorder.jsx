import React from 'react';
import {Text, Pressable, View} from 'react-native';
import {COLORS} from '../../constants/index';
import {styles} from './styles.border';
function AppButtonBorder({title, onPress, color = 'ORANGE'}) {
  return (
    <Pressable
      android_ripple={{
        borderless: false,
        foreground: true,
      }}
      style={[styles.button, {borderColor: COLORS[color], overflow: 'hidden'}]}
      onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
}

export default AppButtonBorder;
