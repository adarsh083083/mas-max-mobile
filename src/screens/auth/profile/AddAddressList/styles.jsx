import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../constants';
import {moderateScale, scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 10,
    paddingBottom: 100,
  },
  itemMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  autoComplectContainer: {
    marginTop: 10,
    flex: 1,
    zIndex: 1000,
    elevation: 100,
    flexGrow: 1,
    flex: 1,
    flexShrink: 1,
  },

  gpsTextStyle: {
    fontFamily: FONTS.POPPINS_REGULAR,
    marginStart: 10,
    fontSize: 10,
  },
  currentLocationImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.ORANGE,
  },
  currentLocationText: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    marginStart: 10,
    fontSize: 12,
    top: 6,
  },
  googleTextInput: {
    placeholderTextColor: '#000000',
    returnKeyType: 'search',
  },
  autoSearchImage: {
    width: 20,
    height: 20,
    top: moderateScale(10),
    marginStart: 10,
    position: 'absolute',
    top: 10,
    zIndex: 999,
  },
  getCurrentLocation: {
    marginStart: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.LIGHTGRAY,
    // borderWidth: 0.5,
    borderBottomWidth: 0.3,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    // borderRadius: 8,
    marginTop: 40,
    backgroundColor: 'white',
  },
  itemOutlineContainer: {
    // backgroundColor: COLORS.SECONDARY_WHITE,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.ORANGE,
    // // bottom: 20,
    maxHeight: 100,
    width: '100%',
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // marginTop: 10,
  },
  titleNameStyle: {
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.SECONDARY_GREY,
    lineHeight: 12,
    fontSize: 12,
  },
  addIconStyle: {
    width: 20,
    height: 20,
  },
  itemViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 7,
  },
  innerContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
  },
  titleTypeStyle: {
    fontSize: 10,
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.PRIMARY_BLACK,
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleSubAddress: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    color: COLORS.DARK_GRAY,
    lineHeight: 14,
    fontSize: 12,
    paddingHorizontal: 3,
    bottom: 8,
    maxWidth: '95%',
  },
  titleAddress: {
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.DARK_GRAY,
    lineHeight: 14,
    fontSize: 10,
    paddingHorizontal: 3,
    bottom: 6,
    maxWidth: '95%',
  },
  titleZipAddress: {
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.DARK_GRAY,
    lineHeight: 14,
    fontSize: 10,
    bottom: 8,
  },
  listHeaderContainer: {
    marginTop: 24,
    marginHorizontal: 10,
  },
  titleAddressStyle: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 12,
    color: COLORS.SECONDARY_GREY,
  },
  menuStyle: {
    width: 110,
    marginEnd: scale(20),
    height: 40,
    backgroundColor: COLORS.WHITE,
  },
  menuIdStyle: {
    width: 110,
    marginEnd: scale(20),
    height: 40,
    backgroundColor: COLORS.WHITE,
  },
  imageStyle: {
    width: 20,
    height: 20,
    bottom: scale(7),
    right: scale(5),
  },
  imageDelete: {
    width: 18,
    height: 18,
    alignSelf: 'center',
    top: 15,
  },
  titleStyle: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.BLACK,
    top: 15,
  },
  itemStyle: {
    bottom: 24,
  },
  itemEditStyle: {
    bottom: 10,
  },
  chipStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  indicatorStyle: {
    marginTop: moderateScale(300),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  flatListStyle: {
    paddingBottom: moderateScale(300),
    paddingTop: moderateScale(10),
  },
  addressContainer: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
    padding: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.ORANGE,
    marginTop: 10,
  },
  addressInnerContainer: {
    flexDirection: 'row',
    width: '90%',
  },
  imageContainer: {
    padding: 10,
    backgroundColor: COLORS.WHITE_DARK,
    bottom: 8,
    borderRadius: 5,
  },
  imageAddressStyle: {
    width: 20,
    height: 20,
  },
  titleContainer: {
    marginStart: 10,
    width: '90%',
  },
  titleDefault: {
    right: moderateScale(32),
    bottom: moderateScale(12),
  },
  menuContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default styles;
