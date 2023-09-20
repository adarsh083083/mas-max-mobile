import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
const styles = StyleSheet.create({
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

  rattingImage: {
    width: 10,
    height: 10,
    tintColor: COLORS.YELLOW,
  },
});
export default styles;
