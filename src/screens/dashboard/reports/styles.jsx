import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY_WHITE,
    marginHorizontal: 10,
  },
  textIdStyle: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: 12,
    lineHeight: 21,
    color: COLORS.PRIMARY_BLACK,
    top: 5,
  },
  textTitleStyle: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 12,
    lineHeight: 18,
    top: 5,
    color: COLORS.PRIMARY_BLACK,
  },
  textSubTitleStyle: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 12,
    lineHeight: 18,
    top: 5,
    color: COLORS.PRIMARY_BLACK,
  },
  orderItemContainer: {
    flex: 1,
    marginStart: 10,
  },
  imageStyle: {
    width: 83.13,
    height: 52,
    margin: 7,
    padding: 10,
  },
  orderListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: COLORS.SECONDARY_WHITE,
    marginHorizontal: 10,
    borderBottomColor: COLORS.ORANGE,
    borderBottomWidth: 1,
  },
  orderList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginVertical: 10,
    backgroundColor: COLORS.SECONDARY_WHITE,
    marginHorizontal: 10,
    height: 67,
  },
  flatListStyle: {
    marginVertical: 10,
    paddingBottom: 200,
  },
  textStatusContainer: {
    marginEnd: 10,
    width: '100%',
    height: 30,
    top: 5,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textStatusStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    lineHeight: 21,
    textAlign: 'center',
    color: COLORS.SECONDARY_WHITE,
  },
  orderStatusContainer: {
    width: '100%',
    height: 25,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  orderBtnContainer: {
    marginEnd: 5,
  },
  textCarWash: {
    alignSelf: 'flex-end',
    top: moderateScale(10),
    fontSize: 14,
    fontSize: 12,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 18,
    color: COLORS.PRIMARY_BLACK,
    bottom: 10,
  },
  titleStatus: {
    color: COLORS.WHITE,
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    lineHeight: 18,
    top: moderateScale(10),
  },
  orderContainer: {
    height: Dimensions.get('window').height / 1.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderImgae: {
    width: 110,
    height: 110,
    tintColor: COLORS.ORANGE,
  },
  orderText: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    padding: 5,
  },
  statusContainer: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  pending: {
    backgroundColor: 'orange',
  },
  approved: {
    backgroundColor: 'green',
  },
  rejected: {
    backgroundColor: 'red',
  },
  ServiceInfoContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ServiceInfoInnerContainer: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.PRIMARY_BLACK,
  },
  ServiceTextStyles: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.PRIMARY_BLACK,
  },
});
export default styles;
