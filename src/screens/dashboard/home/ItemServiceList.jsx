import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES, ROUTES} from '../../../constants';
import {useNavigation, useRoute} from '@react-navigation/native';
const ItemServiceList = ({item}) => {
  console.log(item?.icon_url, 'getting the image......');
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(ROUTES.SERVICE_DETAILS, {
          id: item?.id,
        })
      }>
      <View style={styles.vehicleListContainer}>
        <Image
          source={item.icon_url ? {uri: item.icon_url} : IMAGES.audi}
          style={styles.imageListStyles}
          resizeMode="contain"
        />
        <View style={styles.vehicleItemContainer}>
          <Text style={styles.textCarStyle}>{item.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default ItemServiceList;
