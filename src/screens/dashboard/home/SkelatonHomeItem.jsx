import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {IMAGES, ROUTES} from '../../../constants';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkelatonHomeItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <>
      <SkeletonPlaceholder>
        <Pressable
          style={{marginVertical: 5}}
          onPress={() => {
            navigation.navigate(ROUTES.CATEGROIES_LIST, {id: item?.id});
          }}>
          <View style={styles.containerStyle}>
            <Image
              resizeMode="contain"
              source={item?.image == null ? IMAGES.audi : {uri: item?.image}}
              style={styles.carImageStyle}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>{item?.name}</Text>
          </View>
        </Pressable>
      </SkeletonPlaceholder>
    </>
  );
};
export default SkelatonHomeItem;
