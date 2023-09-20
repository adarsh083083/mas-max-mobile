import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';
const styles = StyleSheet.create({
  orderContainer: {
    flex: 1,
    height: Dimensions.get('window').height / 1.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderImgae: {
    width: 110,
    height: 110,
    tintColor: COLORS.ORANGE,
  },
  orderText: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    padding: 5,
  },
});
export default styles;
