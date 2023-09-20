import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {COLORS, FONTS} from '../../../constants';
const HeaderAtom = ({
  imageBack,
  title,
  imageRightArrow,
  onPress,
  onSkip,
  Skip,
  backImage,
}) => {
  return (
    <View>
      <View style={{...styles.headerListContainer}}>
        {!!backImage ? (
          <TouchableOpacity
            onPress={onPress}
            style={styles.headerImageContainer}>
            <Image style={styles.headerImageStyle} source={imageBack} />
          </TouchableOpacity>
        ) : null}

        <Text style={styles.headerTitleStyle}>{title}</Text>
        <TouchableOpacity
          onPressIn={onSkip}
          style={styles.headerSearchContainer}>
          <View style={styles.skipContainer}>
            {!!Skip ? <Text style={styles.skipTextStyle}>Skip</Text> : null}
            <Image
              resizeMode={'contain'}
              style={styles.imageSearchStyle}
              source={imageRightArrow}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HeaderAtom;
