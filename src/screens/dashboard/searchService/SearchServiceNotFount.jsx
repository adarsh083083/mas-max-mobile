import React from 'react';
import {Image, Text, View, TouchableHighlight, Pressable} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {COLORS, IMAGES, ROUTES} from '../../../constants';

const SearchServiceNotFound = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate(ROUTES.ORDER_SUMMARY);
  }, 5000);
  return (
    <View style={styles.Container}>
      <View style={styles.ImageScreen}>
        <Image style={styles.SearchImage} source={IMAGES.searchNotFound} />
      </View>
      <View style={styles.Indicator}>
        <UIActivityIndicator size={30} color={COLORS.ORANGE} />
      </View>
      <View style={styles.Information}>
        <Text style={styles.Heading}>service provider not available</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.btnStyles}>
          <Image style={styles.arrowStyles} source={IMAGES.arrow} />
          <Text style={styles.btnTextStyles}>Back to Dashboard</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default SearchServiceNotFound;
