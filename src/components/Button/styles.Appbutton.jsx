import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
export const styles = StyleSheet.create({
  button: {
    borderColor: COLORS.WHITE_SECONDARY,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 40,
    marginTop: 20,
  },
  text: {
    color: COLORS.PRIMARY_BLACK,
    fontSize: 16,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    textAlign: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  imageStyle: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
  },
});
