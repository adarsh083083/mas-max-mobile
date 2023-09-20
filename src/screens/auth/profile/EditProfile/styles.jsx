import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../constants';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  profileContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user_name: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10.8,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  ImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  modalImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  IconStyle: {
    height: 30,
    width: 30,
    position: 'absolute',
    bottom: 0,
    left: 12,
  },
  errorStyle: {
    fontSize: 10,
    color: 'red',
  },

  inputContainer: {
    marginHorizontal: 10,
    marginTop: 51.55,
  },
  marginStyle: {
    marginTop: 15,
  },
  inputLabel: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 12,
  },
  dropdownContainerOpened: {
    height: moderateScale(250),
    marginTop: moderateVerticalScale(8),
    width: '100%',
    backgroundColor: COLORS.WHITE,
  },
  dropdownContainerClosed: {
    marginTop: moderateVerticalScale(8),
    height: 40,
    width: '100%',
    backgroundColor: COLORS.WHITE,
  },
  DatePicker: {
    position: 'absolute',
    top: scale(20),
    right: scale(18),
    borderRadius: 10,
    width: 20,
    height: 20,
  },
  dateImage: {
    height: 20,
    width: 35,
    tintColor: COLORS.ORANGE,
  },
  indicatorStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  //=================State DropDown styleing============================
  StateMarginStyle: {marginTop: 10},
  stateLableContainer: {
    backgroundColor: COLORS.WHITE,
  },
  stateDropdown: {
    height: 50,
    width: '100%',
    borderColor: COLORS.SECONDARY_BLACK,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: COLORS.PRIMARY_BLACK,
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
  statePlaceholderStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    paddingLeft: 8,
  },
  stateSelectedTextStyle: {
    fontSize: 12,
    paddingLeft: 8,
  },
  StateIconStyle: {
    width: 20,
    height: 20,
  },
  //===============City DropDown Style=================
  cityMarginStyle: {marginTop: 10},
  cityLableContainer: {
    backgroundColor: COLORS.WHITE,
  },
  cityDropdown: {
    height: 50,
    width: '100%',
    borderColor: COLORS.SECONDARY_BLACK,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: COLORS.PRIMARY_BLACK,
  },
  icon: {
    marginRight: 5,
  },
  cityLabel: {
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
  cityPlaceholderStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    paddingLeft: 8,
  },
  citySelectedTextStyle: {
    fontSize: 12,
    paddingLeft: 8,
  },
  cityIconStyle: {
    width: 20,
    height: 20,
  },
  //==============Button Styled==========================
  BtnContainer: {
    alignItems: 'center',
    marginTop: 49,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(93),
  },
  button: {
    width: '100%',
  },
  //===============INPUT FIELD STYLE=====================
  inputField: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    backgroundColor: COLORS.WHITE,
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
    color: COLORS.DARK_GRAY,
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 10,
  },
});
