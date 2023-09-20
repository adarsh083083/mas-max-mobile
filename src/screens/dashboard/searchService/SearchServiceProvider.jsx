import React from 'react';
import {Image, Text, View} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {COLORS, IMAGES, ROUTES} from '../../../constants';
const SearchServiceProvider = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate(ROUTES.ORDER_SUMMARY);
  }, 5000);
  return (
    <View style={styles.Container}>
      <View style={styles.ImageScreen}>
        <Image style={styles.SearchImage} source={IMAGES.searchProvider} />
      </View>
      <View style={styles.Indicator}>
        <UIActivityIndicator size={30} color={COLORS.ORANGE} />
      </View>
      <View style={styles.Information}>
        <Text style={styles.Heading}>
          We are searching for best {'\n'} service provider near you
        </Text>
        <Text style={styles.textStyle}>We are sure that you will</Text>
        <Text style={styles.serviceText}> enjoy the service!</Text>
      </View>
    </View>
  );
};
export default SearchServiceProvider;
