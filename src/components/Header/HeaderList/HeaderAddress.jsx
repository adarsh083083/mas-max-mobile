HeaderAddress;
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const HeaderAddress = ({imageAdd, addTitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginHorizontal: 10,
          marginTop: 10,
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={imageAdd} style={styles.addIconStyle} />
        </View>
        <Text style={styles.addTitleStyle}>{addTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default HeaderAddress;
