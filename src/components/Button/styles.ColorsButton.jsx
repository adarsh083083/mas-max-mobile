import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';

export const styles = StyleSheet.create({
  button: {
    borderColor: COLORS.WHITE_SECONDARY,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 40,
    marginTop: 20,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: COLORS.SECONDARY_WHITE,
    fontSize: 14,
    fontFamily: FONTS.POPPINS_MEDIUM,
    textAlign: 'center',
    alignSelf: 'center',
    marginEnd: 20,
    lineHeight: 18.5,
  },
  imageStyle: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  appButtonStyle: {
    width: 100,
    backgroundColor: COLORS.ORANGE,
  },
});
