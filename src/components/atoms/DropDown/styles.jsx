import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.TRANSPARENT,
  },
  modalContent: {
    backgroundColor: COLORS.SECONDARY_WHITE,
    padding: 0,
    borderRadius: 10,
    height: 250,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
    color: COLORS.LIGHT_TRANSPARENT,
  },
  input: {
    height: 50,
    margin: 8,
    padding: 8,
    width: '97%',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: COLORS.WHITE,
    textAlignVertical: 'center',
  },
  dropDownImageStyle: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  itemTextStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.PRIMARY_BLACK,
  },
});
