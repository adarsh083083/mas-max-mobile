import {View, Text} from 'react-native';
import React from 'react';
import {IMAGES} from '../../../constants';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Image} from 'react-native';

const SkeletonContainer = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <Pressable
        style={{marginVertical: 5}}
        onPress={() => {
          navigation.navigate(ROUTES.CATEGROIES_LIST, {id: item?.id});
        }}>
        <View style={styles.containerStyle}>
          <Image
            resizeMode="contain"
            source={item.image == null ? IMAGES.audi : {uri: item.image}}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{item?.name}</Text>
        </View>
      </Pressable>
    </SkeletonPlaceholder>
  );
};

export default SkeletonContainer;
