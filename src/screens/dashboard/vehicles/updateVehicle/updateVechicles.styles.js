import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../constants';
import {moderateScale, verticalScale} from 'react-native-size-matters';
export const styles = StyleSheet.create({
  //================Container Style===================
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 10,
  },
  lableContainer: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 10,
  },
  //======================Dropdown Style================
  dropdown: {
    height: 50,
    width: '100%',
    borderColor: COLORS.PRIMARY_BLACK,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: COLORS.WHITE,
    left: 10,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
    borderRadius: 10,
    color: COLORS.PRIMARY_BLACK,
  },
  placeholderStyle: {
    fontSize: 12,
    color: COLORS.PRIMARY_BLACK,
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  //==================Input Field=================
  inputField: {
    fontFamily: 'Poppins',
    backgroundColor: COLORS.WHITE,
    fontSize: 12,
  },
  outLineStyles: {
    borderRadius: 8,
    borderWidth: 0.5,
  },
  underLineStyle: {
    borderRadius: 8,
    borderWidth: 0.5,
  },
  textInput: {
    fontFamily: 'Poppins',
    fontSize: 12,
    height: 40,
  },

  //========================button style=====================
  BtnContainer: {
    alignItems: 'center',
    marginTop: verticalScale(47.13),
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: moderateScale(300),
  },
  textError: {
    color: COLORS.RED,
    fontSize: 10,
    marginHorizontal: 10,
  },
  modalTextError: {
    color: 'red',
    fontSize: 10,
    marginHorizontal: 10,
  },
  InputText: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 12,
  },
  InputText2: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 12,
    marginHorizontal: 10,
  },
});
