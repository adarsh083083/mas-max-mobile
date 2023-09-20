import {StyleSheet} from 'react-native';
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
    height: 200,
    width: '100%',
    marginTop: 100,
    alignItems: 'center',
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
    marginTop: verticalScale(10),
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
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  viewConfirm: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: COLORS.SECONDARY_WHITE,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.ORANGE,
    marginVertical: 10,
    padding: 8,
  },
  viewLocation: {
    backgroundColor: COLORS.WHITE_SECONDARY,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
    marginTop: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  titleType: {
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.SECONDARY_GREY,
    lineHeight: 14,
    fontSize: 12,
  },
  titleAddress: {
    fontFamily: FONTS.PRIMARY_BLACK,
    color: COLORS.DARK_GRAY,
    lineHeight: 14,
    fontSize: 10,
    flexWrap: 'wrap',
  },
  containerStyle: {
    marginTop: moderateVerticalScale(200),
  },
  viewAddress: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
export default styles;
