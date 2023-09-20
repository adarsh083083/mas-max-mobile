import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IMAGES, ROUTES} from '../../../../constants';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const ItemGetLocation = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTES.CONFIRM_LOCATION)}>
      <View style={styles.viewConfirm}>
        <View style={styles.viewLocation}>
          <Image
            resizeMode="contain"
            source={IMAGES.location}
            style={styles.locationImage}
          />
        </View>

        <View style={styles.viewAddress}>
          <Text style={styles.titleAddress}>{item.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemGetLocation;
