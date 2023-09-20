import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {IMAGES, ROUTES} from '../../../constants';
const CategoriesServicesItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <>
      <Pressable
        style={{marginVertical: 5}}
        onPress={() => {
          navigation.navigate(ROUTES.CATEGROIES_LIST, {
            id: item?.id,
            sub_category: item?.name,
          });
        }}>
        <View style={styles.containerStyle}>
          <Image
            resizeMode="contain"
            source={item.image == null ? {uri: item?.icon_url} : IMAGES.audi}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{item?.name}</Text>
        </View>
      </Pressable>
    </>
  );
};
export default CategoriesServicesItem;
