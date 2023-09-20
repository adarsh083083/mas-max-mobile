import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
export const styles = StyleSheet.create({
  button: {
    borderColor: COLORS.WHITE_SECONDARY,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 16,
    marginTop: 20,
  },
  text: {
    color: COLORS.SECONDARY_GREEN,
    fontSize: 10,
    fontFamily: FONTS.POPPINS_MEDIUM,
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 15,
  },
});
