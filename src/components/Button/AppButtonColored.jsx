import React from 'react';
import {Text, Image, Pressable, View} from 'react-native';
import {COLORS} from '../../constants/index';
import {styles} from './styles.ColorsButton';
function AppButtonColored({
  loading,
  title,
  image,
  onPress,
  color = 'ORANGE',
  buttonStyle,
}) {
  return (
    <View style={{...styles.btnContainer, ...buttonStyle}}>
      <Pressable
        android_ripple={{
          borderless: false,
          foreground: true,
        }}
        style={[
          styles.button,
          {backgroundColor: COLORS[color], overflow: 'hidden'},
        ]}
        onPress={onPress}
        loading={loading}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={image}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default AppButtonColored;
