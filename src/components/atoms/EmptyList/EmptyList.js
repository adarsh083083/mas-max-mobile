import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
const EmptyList = ({message, imageSource}) => {
  return (
    <View style={styles.orderContainer}>
      <Image style={styles.orderImgae} source={imageSource} />
      <Text style={styles.orderText}>{message}</Text>
    </View>
  );
};
export default EmptyList;
