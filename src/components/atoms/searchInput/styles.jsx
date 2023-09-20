import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: COLORS.ORANGE,
    borderWidth: 1,
    flexDirection: 'row',
    marginTop: 9,
    width: '96%',
    alignItems: 'center',
    borderRadius: 25,
    paddingStart: 20,
    marginStart: 8,
    marginEnd: 8,
    backgroundColor: 'transparent',
    height: 40,
    color: COLORS.DARK_GRAY,
  },
  input: {
    borderTopLeftRadius: 25,
    backgroundColor: 'transparent',
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: 50,
    top: 2,
    width: '90%',
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    lineHeight: 22,
  },
  searchIcon: {
    width: 18,
    height: 18,
  },
});
export default styles;
