import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../constants';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  priceContainer: {
    marginTop: 40.81,
    marginHorizontal: 10,
  },
  indicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  payContainer: {
    marginHorizontal: moderateScale(10),
    marginTop: 10,
  },
  cardImageStyle: {
    height: 20,
    width: 30,
  },
  radioContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.ORANGE,
  },
  serviceStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: COLORS.ORANGE,
  },
  serviceTextReqest: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    lineHeight: 18,
    color: COLORS.PRIMARY_BLACK,
    textAlign: 'justify',
  },
  serviceBox: {
    marginTop: 20,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingBottom: 10,
    // marginVertical: 30,
    height: 200,
    shadowColor: '#171717',
    // shadowOffset: {width: -5, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 90,
  },
  serviceDetailsStyle: {
    textAlign: 'center',
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 16,
    color: COLORS.PRIMARY_BLACK,
    marginTop: 10,
  },
  serviceNameText: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    color: COLORS.PRIMARY_BLACK,
  },
  serviceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  styelsText: {
    height: Dimensions.get('window').height / 1.9,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  servicePriceText: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    color: COLORS.PRIMARY_BLACK,
  },
  serviceNameStyles: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
  serviceProvider: {
    textAlign: 'center',
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 16,
    color: COLORS.PRIMARY_BLACK,
  },
  serviceTextStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 18,
    color: COLORS.PRIMARY_BLACK,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    bottom: 20,
    height: 30,
    width: '40%',
  },
  serviceContainer: {
    marginTop: 15,
    backgroundColor: COLORS.WHITE_SECONDARY,
    marginHorizontal: 10,
    borderRadius: 8,
    paddingVertical: 10,
  },
  carWashContainer: {
    marginTop: 15,
    backgroundColor: COLORS.WHITE_SECONDARY,
    marginHorizontal: 10,
    borderRadius: 8,
    //===============
    shadowColor: '#171717',
    shadowOffset: {width: -5, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    shadowColor: 'black',
  },
  carWashInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 5,
    top: 5,
  },
  carWorkTextStyle: {
    fontSize: 10,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 15,
    color: COLORS.PRIMARY_BLACK,
    bottom: 10,
  },
  carWashTextStyle: {
    fontSize: 10,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 15,
    color: COLORS.PRIMARY_BLACK,
    bottom: 10,
  },
  addressTextStyle: {
    fontSize: 10,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 15,
    color: COLORS.PRIMARY_BLACK,
    bottom: 10,
    maxWidth: 180,
    textAlign: 'justify',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 3,
  },
  ratingInnerContainer: {
    flexDirection: 'row',
    marginTop: 2,
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
    lineHeight: 15,
    marginEnd: moderateScale(17),
    alignSelf: 'flex-start',
    color: COLORS.PRIMARY_BLACK,
  },
  serviceDateContainer: {
    marginHorizontal: 10,
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceDateTextStyle: {
    bottom: 2,
    fontSize: 12,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    marginStart: 3,
    color: COLORS.PRIMARY_BLACK,
    marginTop: 12,
    lineHeight: 20,
  },
  servicePriceTextStyle: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    color: COLORS.PRIMARY_BLACK,
  },
  serviceTextContainer: {
    height: Dimensions.get('window').height / 1.9,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  serviceName: {
    bottom: 2,
    fontSize: 10,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginStart: 3,
    color: COLORS.PRIMARY_BLACK,
    marginTop: 12,
    lineHeight: 15,
  },
  carNameTextStyle: {
    top: 4,
    fontSize: 12,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginStart: 3,
    color: COLORS.PRIMARY_BLACK,
  },
  carNumberTextStyle: {
    top: 4,
    fontSize: 10,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginStart: 3,
    lineHeight: 18,
    color: COLORS.PRIMARY_BLACK,
  },
  carRegisterationNumberTextStyle: {
    top: 4,
    fontSize: 10,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginStart: 3,
    lineHeight: 18,
    color: COLORS.PRIMARY_BLACK,
  },
  carImageStyle: {
    width: 74,
    height: 74,
    marginEnd: 10,
  },
  carDetailsContainer: {
    width: '75%',
    flexDirection: 'row',
  },
  carDetailsInnerContainer: {
    width: '100%',
    marginHorizontal: 8,
    flexDirection: 'row',
  },
  carViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceRequestContainer: {
    marginTop: 22,
    marginHorizontal: 10,
  },
  serviceRequestTextStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 18,
    color: COLORS.PRIMARY_BLACK,
  },
  serviceTextName: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    color: COLORS.PRIMARY_BLACK,
  },
  serviceMarksContainer: {
    marginTop: 5,
    marginHorizontal: 10,
    borderBottomColor: COLORS.ORANGE,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  serviceTextStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    paddingBottom: 5,
    color: COLORS.PRIMARY_BLACK,
  },
  emailTextStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    paddingBottom: 5,
    color: COLORS.PRIMARY_BLACK,
  },
  phoneTextStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    paddingBottom: 5,
    color: COLORS.PRIMARY_BLACK,
  },
  remarkTextStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    paddingBottom: 5,
    color: COLORS.PRIMARY_BLACK,
    maxWidth: 240,
  },
  addressLineTextStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.PRIMARY_BLACK,
    maxWidth: 220,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceTextStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 18,
    color: COLORS.PRIMARY_BLACK,
  },
  tokenStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 18,
    marginHorizontal: 20,
    color: COLORS.PRIMARY_BLACK,
  },
  tokenTwoStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginEnd: 10,
    lineHeight: 18,
    marginEnd: 27,
    color: COLORS.PRIMARY_BLACK,
  },
  convenienceContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnOnlineContainer: {
    width: '20%',
    bottom: 20,
    height: 30,
    alignItems: 'flex-end',
    marginHorizontal: 10,
  },
  serviceDeliveryTextStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 18,
    color: COLORS.PRIMARY_BLACK,
    marginHorizontal: 10,
  },
  deliverySuccessTextStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    lineHeight: 18,
    color: COLORS.PRIMARY_BLACK,
    marginHorizontal: 10,
  },
  deliveredTextStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    lineHeight: 18,
    color: COLORS.PRIMARY_BLACK,
  },
  deliveredContainer: {
    marginTop: 17,
    marginHorizontal: 10,
  },
  serviceDeliveryContainer: {
    marginTop: 8,
  },
  deliverySuccessContainer: {
    marginTop: 3,
  },
  cardStyle: {
    backgroundColor: COLORS.WHITE_SECONDARY,
    borderRadius: 8,
    width: '95%',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 12,
    justifyContent: 'space-between',
  },
  outerContainer: {
    marginHorizontal: 10,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerTotalContainer: {
    marginTop: 15,
    marginHorizontal: 10,
    borderBottomColor: COLORS.ORANGE,
    borderBottomWidth: 1,
  },
  totalViewContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  onlineContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInnerContainer: {
    marginHorizontal: 8,
  },
  infomationContainer: {
    height: 70,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    shadowColor: '#171717',
    shadowOffset: {width: -5, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  carDetailsStyle: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  carName: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    color: COLORS.PRIMARY_BLACK,
    marginVertical: 3,
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
    height: 60,
    width: 60,
    marginRight: 15,
    padding: 5,
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
    shadowColor: '#171717',
    shadowOffset: {width: -5, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  radioContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
  Payment: {
    marginTop: moderateScale(40),
    marginHorizontal: 10,
  },
  priceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE_SECONDARY,

    padding: 10,
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -5, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    bottom: 10,
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
  headerText: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    color: COLORS.PRIMARY_BLACK,
  },
  orderPriceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: moderateScale(10),
    marginHorizontal: moderateVerticalScale(15),
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
  paidButton: {
    backgroundColor: COLORS.ORANGE,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    borderRadius: 36.36,
    opacity: 0.8,
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
  cardContainer: {
    marginTop: 5,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingBottom: 30,
    marginVertical: 30,
    maxHeight: 130,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  cardHeadContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
});
export default styles;