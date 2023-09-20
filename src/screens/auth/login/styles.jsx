import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../../../src/constants/index';
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE_SECONDARY,
  },
  indicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  googleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: moderateScale(46),
    borderRadius: moderateScale(24),
    backgroundColor: COLORS.ORANGE,
  },
  instagramButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: moderateScale(46),
    borderRadius: moderateScale(24),
    backgroundColor: COLORS.ORANGE,
    marginTop: moderateVerticalScale(20),
  },
  btn: {
    borderRadius: 5,
    backgroundColor: 'orange',
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    paddingTop: moderateVerticalScale(120.74),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    paddingTop: moderateVerticalScale(120.74),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 250.65,
    height: 150.15,
  },
  logoText: {
    fontSize: scale(24),
    lineHeight: scale(36),
    fontWeight: '500',
    paddingTop: moderateVerticalScale(14),
  },

  /******** socialButtons **********/
  socialContainer: {
    paddingTop: moderateVerticalScale(14),
  },
  getStartedText: {
    fontSize: scale(24),
    lineHeight: scale(36),
    fontFamily: FONTS.POPPINS_MEDIUM,
    textAlign: 'center',
    color: COLORS.PRIMARY_BLACK,
  },
  signUpText: {
    fontSize: scale(12),
    lineHeight: scale(20.4),
    paddingTop: moderateVerticalScale(19),
    alignSelf: 'center',
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    color: COLORS.PRIMARY_GREY,
  },
  socialButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: moderateVerticalScale(19),
  },
  /******** signIn Container **********/
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
export default styles;
