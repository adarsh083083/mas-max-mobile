import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {IMAGES, ROUTES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
const OrderPlaced = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate(ROUTES.HOME);
  }, 5000);
  return (
    <View style={styles.Container}>
      <View style={styles.ImageScreen}>
        <Image style={styles.SearchImage} source={IMAGES.thankYou} />
      </View>
      <View style={styles.Information}>
        <Text style={styles.Heading}>Order placed Successfully!</Text>
        <Text style={styles.textStyle}>
          We’ve received your order and our team is
        </Text>
        <Text style={styles.textStyle1}>
          working to get it to you asquick and sae as
        </Text>
        <Text style={styles.textStyle1}>possible</Text>
      </View>
    </View>
  );
};
export default OrderPlaced;
