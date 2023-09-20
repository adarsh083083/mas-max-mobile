import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../../constants';
export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.WHITE_DARK,
  },
  ImageScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 78,
  },
  Information: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },
  Heading: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.PRIMARY_BLACK,
  },
  SearchImage: {
    width: 215,
    height: 160,
    marginTop: 76,
  },
  Indicator: {
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: moderateScale(190),
    left: moderateScale(125),
    right: moderateScale(232),
  },
  textStyle: {
    marginTop: 21,
    fontFamily: 'Poppins',
    fontSize: 16,
    color: COLORS.PRIMARY_BLACK,
  },
  serviceText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: COLORS.PRIMARY_BLACK,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  btnStyles: {
    backgroundColor: COLORS.ORANGE,
    height: 40,
    width: '60%',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 40,
    flexDirection: 'row',
  },
  arrowStyles: {
    height: 18,
    width: 18,
    tintColor: COLORS.WHITE,
    marginRight: 10,
  },
  btnTextStyles: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 15,
    color: COLORS.WHITE,
  },
});
