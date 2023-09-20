import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    bottom: 0,
    alignItems: 'flex-end',
  },
  modalContainer: {
    backgroundColor: COLORS.ORANGE,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 18,
    color: COLORS.DARK_GRAY,
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: FONTS.POPPINS_BOLD,
  },
  modalText: {
    fontSize: 16,
    color: COLORS.DARK_GRAY,
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
    fontFamily: FONTS.POPPINS_LIGHT,
  },
  button: {
    backgroundColor: COLORS.ORANGE,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    height: 50,
    marginHorizontal: 10,
    marginTop: 10,
  },
  buttonText: {
    color: COLORS.SECONDARY_WHITE,
    fontSize: 16,
    fontFamily: FONTS.POPPINS_LIGHT,
  },
});
export default styles;
