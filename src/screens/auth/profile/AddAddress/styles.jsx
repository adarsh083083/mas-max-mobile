import {Dimensions, StyleSheet} from 'react-native';
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
  containerMap: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 40,
    marginHorizontal: 10,
    height: Dimensions.get('window').height / 2,
  },
  //======================Dropdown Style================
  dropdown: {
    height: 50,
    width: '100%',
    borderColor: COLORS.PRIMARY_BLACK,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
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
    borderColor: COLORS.PRIMARY_BLACK,
  },
  placeholderStyle: {
    fontSize: 12,
    borderColor: COLORS.PRIMARY_BLACK,
  },
  selectedTextStyle: {
    fontSize: 12,
    borderColor: COLORS.PRIMARY_BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginHorizontal: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  //==================Input Field=================
  inputField: {
    fontFamily: FONTS.POPPINS_MEDIUM,
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
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 12,
  },
  //========================button style=====================
  BtnContainer: {
    alignItems: 'center',
    marginTop: verticalScale(20.13),
    marginBottom: 20,
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
  googleInput: {
    width: '90%',
    marginHorizontal: 10,
    borderColor: COLORS.PRIMARY_BLACK,
    borderWidth: 0.5,
    height: 50,
    color: COLORS.BLACK,
    marginTop: 25,
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    fontFamily: 'Poppins',
    backgroundColor: COLORS.WHITE,
    fontSize: 12,
  },
});
export const googlePlacesStyles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    marginHorizontal: 10,
    marginTop: 5,
  },
  textInputContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    bottom: 10,
  },
  textInput: {
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    color: '#5d5d5d',
    fontSize: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.ORANGE,
    paddingStart: 30,
  },
  listView: {
    position: 'absolute',
    top: 38,
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
};
