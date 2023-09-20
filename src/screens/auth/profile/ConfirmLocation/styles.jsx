import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../constants';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  flexView: {
    height: 50,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexViewFab: {
    height: 50,
    bottom: 0,
    flexDirection: 'row',
  },
  fabContainer: {
    alignItems: 'center',
    marginTop: 9,
  },
  fabImageStyle: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    alignContent: 'center',
  },
  locationIconView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.WHITE_SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationImage: {
    width: 20,
    height: 20,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
  },
  containerMain: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY_WHITE,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  //======================Dropdown Style================
  dropdown: {
    height: 50,
    borderColor: COLORS.PRIMARY_BLACK,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingStart: 10,
    marginHorizontal: 10,
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
    marginTop: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(40),
  },

  button: {
    width: moderateScale(400),
    marginBottom: 60,
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
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  mainContainer: {
    backgroundColor: COLORS.WHITE_SECONDARY,
    marginTop: moderateScale(410),
    borderRadius: 10,
  },
  bottomViewContainer: {
    marginTop: moderateVerticalScale(90),
    justifyContent: 'flex-end',
    height: Dimensions.get('window').height / 3,
    borderRadius: 10,
  },
  viewTextStyle: {
    paddingStart: 10,
    borderBottomWidth: 0.5,
    padding: 10,
    bottom: 20,
    borderColor: COLORS.PRIMARY_GREY,
  },
  titleLocation: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    lineHeight: 21,
  },
  viewLocation: {
    paddingStart: 10,
    padding: 10,
    bottom: 20,
  },
  titleCurrentLocation: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.SECONDARY_GREY,
    lineHeight: 21,
  },
  viewStyle: {
    flexDirection: 'row',
  },
  viewConfirmStyle: {
    backgroundColor: COLORS.SECONDARY_WHITE,
    borderRadius: 20,
    width: 40,
    height: 40,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  imageCheck: {
    width: 20,
    height: 20,
  },
  viewAddress: {
    marginHorizontal: 10,
    bottom: 10,
  },
  titleAddress: {
    fontSize: 12,
    color: COLORS.PRIMARY_BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
});
export default styles;
