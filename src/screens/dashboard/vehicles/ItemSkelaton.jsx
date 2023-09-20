import {View, Text, Image} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {IMAGES} from '../../../constants';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const ItemSkelaton = ({item}) => {
  return (
    <SkeletonPlaceholder>
      <View style={styles.vehicleList}>
        <Image
          source={item?.image == null ? IMAGES.audi : {uri: item?.image}}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <View style={styles.vehicleItemContainer}>
          <Text style={styles.textCarStyle}>
            {item?.brand_id}
            {'\t'}
            {item?.model_id}
          </Text>
          <Text style={styles.textVehcStyle}>{item?.fuel_type}</Text>
          <Text style={styles.textRegStyle}>{item?.registration_number}</Text>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};
export default memo(ItemSkelaton);
