import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
const HeaderList = ({
  imageLocation,
  imageArrow,
  title,
  subTitle,
  onPress,
  addAddress,
  locationView,
}) => {
  return (
    <View style={styles.headerContainer}>
      {!!locationView ? (
        <View style={styles.locationIconView}>
          <View>
            <Image
              resizeMode="contain"
              style={styles.locationImage}
              source={imageLocation}
            />
          </View>
        </View>
      ) : (
        <View style={styles.locationIconView}>
          <View>
            <Image
              resizeMode="contain"
              style={styles.locationImage}
              source={imageLocation}
            />
          </View>
        </View>
      )}
      <View
        style={{
          marginStart: 10,
          flex: 1,
        }}>
        <Text style={styles.locationTitleStyle}>{title}</Text>
        {!!addAddress ? (
          <Text style={styles.locationTitleStyle}>{addAddress}</Text>
        ) : null}
        <Text style={styles.locationSubTitleStyle}>{subTitle}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Image
          resizeMode="contain"
          style={styles.locationArrow}
          source={imageArrow}
        />
      </TouchableOpacity>
    </View>
  );
};
export default HeaderList;
