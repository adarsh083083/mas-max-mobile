import {Dimensions, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../../constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY_WHITE,
    marginHorizontal: 10,
  },
  autoCompleteStyle: {
    maxHeight: moderateVerticalScale(200),
    shadowColor: '#000',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 50,
    marginTop: 5,
  },
  textInputSearch: {
    borderWidth: 1,
    borderColor: COLORS.ORANGE,
    borderRadius: 25,
    height: 40,
    paddingStart: 20,
  },
  autoCompleteDefaultStyle: {
    shadowColor: '#000',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 4,
    shadowRadius: 4,
    elevation: 4,
  },
  bannerContainer: {
    marginTop: moderateVerticalScale(26),
    position: 'relative',
    zIndex: 100,
  },
  bannerImage: {
    width: '100%',
    resizeMode: 'cover',
    height: verticalScale(140),
    zIndex: 1,
  },
  requestContainer: {
    marginTop: verticalScale(0),
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: moderateScale(24),
  },
  requestBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(24),
    backgroundColor: COLORS.ORANGE,
  },
  requestTextStyle: {
    color: '#fff',
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: moderateScale(14),
  },
  valueContainer: {
    marginTop: 60,
    paddingBottom: verticalScale(10),
  },
  indicatorStyle: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  subCategoryContainer: {
    marginHorizontal: 10,
    borderBottomColor: COLORS.ORANGE,
    borderBottomWidth: 0.5,
  },
  subCategoryText: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    fontSize: 14,
  },
  serviceListContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 1,

    borderBottomColor: COLORS.ORANGE,
  },
  serviceNameStyle: {
    borderBottomColor: 'black',
  },
  itemNameStyle: {
    fontSize: 14,
    color: COLORS.PRIMARY_BLACK,
  },
  carImageStyle: {
    width: 100,
    height: 100,
  },
  /********* Item Styles ******/
  titleContainer: {
    marginTop: moderateVerticalScale(6.63),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    lineHeight: 18,
    textAlign: 'center',
    maxWidth: moderateScale(100),
  },
  imageStyle: {
    width: 100,
    height: 108,
    alignSelf: 'center',
    padding: 5,
  },
  imageListStyles: {
    padding: 10,
    width: 65,
    height: 65,
    alignSelf: 'center',
  },
  containerStyle: {
    marginTop: moderateVerticalScale(1.93),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    marginHorizontal: 5,
    width: moderateScale(100),
    height: moderateVerticalScale(108),
    backgroundColor: COLORS.WHITE_SECONDARY,
  },
  imageContainer: {
    marginTop: moderateVerticalScale(8.77),
  },
  valueTextStyle: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    lineHeight: 19.5,
    textTransform: 'uppercase',
    color: COLORS.ORANGE,
  },
  contentContainerStyle: {
    marginTop: moderateVerticalScale(8.77),
    paddingBottom: 20,
  },
  /******** View Mechanical Repairs *******/
  mechanicalTextsContainer: {
    marginTop: 8,
    marginHorizontal: moderateScale(7),
  },
  valueTextContainer: {
    marginTop: moderateVerticalScale(25),
    marginHorizontal: moderateScale(7),
  },
  mechanicalTextStyle: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    lineHeight: 19.5,
    textTransform: 'uppercase',
    color: COLORS.ORANGE,
    marginHorizontal: 5,
  },
  loadingTextStyle: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    lineHeight: 19.5,
    textTransform: 'uppercase',
    color: COLORS.ORANGE,
    marginHorizontal: 5,
  },
  /******** View Other Services *******/
  otherServiceContainer: {
    marginTop: 1,
    marginHorizontal: moderateScale(7),
  },
  otherTextContainer: {
    marginTop: moderateVerticalScale(25),
    marginHorizontal: moderateScale(7),
  },
  otherTextStyle: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    lineHeight: 19.5,
    textTransform: 'uppercase',
    color: COLORS.ORANGE,
  },
  vehicleItemContainer: {
    flex: 1,
    marginStart: 10,
  },
  vehicleListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: COLORS.WHITE_SECONDARY,
    marginHorizontal: 10,
    borderBottomColor: COLORS.ORANGE,
    borderBottomWidth: 1,
    padding: 5,
  },
  textDateContainer: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  textRegStyle: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 10,
    lineHeight: 18,
    color: COLORS.PRIMARY_BLACK,
  },
  textDateStyle: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 8,
    marginTop: 5,
    lineHeight: 12,
    color: COLORS.PRIMARY_BLACK,
    alignSelf: 'flex-start',
  },
  textVehcStyle: {
    marginTop: 5,
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 10,
    lineHeight: 18,
    color: COLORS.PRIMARY_BLACK,
  },
  textCarStyle: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    lineHeight: 15,
    color: COLORS.PRIMARY_BLACK,
    marginTop: moderateVerticalScale(22),
  },
  noSevervice: {
    textAlign: 'center',
    marginTop: Dimensions.get('window').height / 2,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 18,
  },
  servicesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  servicesImage: {
    width: 120,
    height: 120,
    tintColor: COLORS.ORANGE,
  },
  servicesText: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 14,
    color: COLORS.PRIMARY_BLACK,
    padding: 5,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  inputContainerDefault: {
    backgroundColor: COLORS.SECONDARY_WHITE,
    borderRadius: 25,
    color: COLORS.PRIMARY_BLACK,
  },

  inputContainerWithResults: {
    backgroundColor: COLORS.SECONDARY_WHITE,
    borderRadius: 25,
    color: COLORS.PRIMARY_BLACK,
    height: 200, // Set the desired height for the input container with results
  },
});

export default styles;
