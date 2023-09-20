import {View, Image} from 'react-native';
import React from 'react';
import {useState} from 'react';
import style from './style';
import {COLORS, IMAGES} from '../../../constants';
import styles from './style';
const CustomRating = () => {
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [defaultRating, setDefaultRating] = useState(0);
  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item, key) => {
        return (
          <View
            activeOpacity={0.7}
            key={item}
            onPress={() => setDefaultRating(item)}>
            <Image
              style={styles.rattingImage}
              source={item <= defaultRating ? IMAGES.star : IMAGES.filled_star}
            />
          </View>
        );
      })}
    </View>
  );
};
export default CustomRating;
