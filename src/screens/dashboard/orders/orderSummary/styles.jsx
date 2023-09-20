import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../constants';
import {moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginHorizontal: 10,
  },
  HeaderContainer: {
    backgroundColor: COLORS.WHITE,
  },

  ImageContainer: {
    padding: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: COLORS.SECONDARY_WHITE,
    alignItems: 'center',
  },
  ImageStyle: {
    width: 16,
    height: 16,
  },
  locationBack: {
    backgroundColor: 'white',
    width: 28,
    height: 28,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingLeft: 10,
  },
  textHeader: {
    fontSize: 12,
    fontWeight: FONTS.POPPINS_MEDIUM,
  },
  textStyle: {
    fontSize: 8,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  carWashContainer: {
    marginTop: 15,
    backgroundColor: COLORS.WHITE_SECONDARY,
    marginHorizontal: 10,
    borderRadius: 8,
    paddingVertical: 10,
  },
  carWashInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 3,
  },
  carWorkTextStyle: {
    fontSize: 10,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 15,
    color: COLORS.PRIMARY_BLACK,
    paddingLeft: 8,
  },
  carWashTextStyle: {
    fontSize: 10,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 15,
    color: COLORS.PRIMARY_BLACK,
    paddingRight: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 3,
    paddingLeft: 8,
  },
  ratingInnerContainer: {
    flexDirection: 'row',
    marginTop: 3,
  },
  ratingCountTextStyle: {
    bottom: 2,
    fontSize: 10,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginStart: 3,
    lineHeight: 18,
    color: COLORS.PRIMARY_BLACK,
  },
  rmTextOneStyle: {
    bottom: 2,
    fontSize: 10,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 18,
    marginEnd: moderateScale(17),
    alignSelf: 'flex-start',
    color: COLORS.PRIMARY_BLACK,
    paddingRight: 8,
  },
  serviveDateStyle: {
    textAlign: 'center',
    marginTop: 8,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: 10,
    color: COLORS.SECONDARY_BLACK,
  },
  infomationContainer: {
    height: 70,
    backgroundColor: COLORS.WHITE_SECONDARY,
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  priceContainer: {
    marginTop: 40.81,
    marginHorizontal: 10,
  },
  carDetailsStyle: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  carName: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    color: COLORS.PRIMARY_BLACK,
  },
  carRegId: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 10,
    color: COLORS.PRIMARY_BLACK,
  },

  carImageContainer: {
    justifyContent: 'center',
  },
  carImage: {
    height: 100,
    width: 110,
    marginRight: 15,
  },
  headerText: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    color: COLORS.PRIMARY_BLACK,
  },
  serviceStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: COLORS.ORANGE,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: COLORS.ORANGE,
  },
  payContainer: {
    marginHorizontal: moderateScale(10),
    marginTop: 10,
  },
  payBox: {
    padding: 10,
    backgroundColor: COLORS.WHITE_SECONDARY,
    marginTop: 11,
    borderRadius: 8,
    flexDirection: 'row',
  },
  radioContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    paddingLeft: moderateScale(22.93),
    justifyContent: 'center',
  },
  cardImageStyle: {
    height: 20,
    width: 30,
  },
  paymentText: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 10,
    marginTop: 5,
    color: COLORS.PRIMARY_BLACK,
    lineHeight: 15,
  },
  priceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE_SECONDARY,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  carText: {
    fontSize: 10,
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.PRIMARY_BLACK,
  },
  carTextStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
  },
  ButtonStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    color: COLORS.WHITE_SECONDARY,
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 12,
  },
  orderPriceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: moderateScale(10),
    marginHorizontal: moderateScale(15),
  },
  washTextStyle: {
    marginLeft: moderateScale(5),
  },
  payTextContainer: {
    justifyContent: 'center',
  },
  payButtonContainer: {
    justifyContent: 'center',
    marginRight: moderateScale(5),
  },
  payButton: {
    backgroundColor: COLORS.ORANGE,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    borderRadius: 36.36,
  },
  buttonTextStyle: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    color: COLORS.SECONDARY_WHITE,
  },
});
export default styles;
