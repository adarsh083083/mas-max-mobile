import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES, ROUTES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const ItemServicSkelaton = ({item}) => {
  const navigation = useNavigation();
  return (
    <SkeletonPlaceholder style={{height: 100, width: '100%'}}>
      <Pressable
        onPress={() =>
          navigation.navigate(ROUTES.SERVICE_DETAILS, {id: item?.id})
        }>
        <View style={styles.vehicleListContainer}>
          <Image
            source={item.image == null ? IMAGES.audi : {uri: item.image}}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <View style={styles.vehicleItemContainer}>
            <Text style={styles.textCarStyle}>
              {item?.service_category?.name}
            </Text>
            <Text style={styles.textCarStyle}>{item.name}</Text>
            <Text style={styles.textVehcStyle}>{item.description}</Text>
          </View>
        </View>
      </Pressable>
    </SkeletonPlaceholder>
  );
};
export default ItemServicSkelaton;
