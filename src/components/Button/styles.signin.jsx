import {StyleSheet} from 'react-native';
import {moderateVerticalScale, scale} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../constants';
export const styles = StyleSheet.create({
  /******** signIn Container **********/
  container: {
    flexDirection: 'row',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: moderateVerticalScale(29),
  },
  accountText: {
    fontSize: scale(12),
    lineHeight: scale(20.4),
    alignSelf: 'center',
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_GREY,
  },
  signInText: {
    fontSize: scale(12),
    lineHeight: scale(20.4),
    alignSelf: 'center',
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.ORANGE,
  },
});
