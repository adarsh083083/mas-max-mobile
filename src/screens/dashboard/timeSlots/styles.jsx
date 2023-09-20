import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY_WHITE,
  },
  viewContainer: {
    marginTop: 15,
    marginHorizontal: 8,
  },
  viewPickUp: {
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '96%',
    alignItems: 'center',
    marginEnd: 8,
    height: 44,
    marginTop: 4,
  },
  buttonStyle: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.ORANGE,
  },
  itemSelected: {
    color: COLORS.ORANGE,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    lineHeight: 18,
    fontSize: 10,
  },
  itemSelectedText: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: 10,
    lineHeight: 18,
    color: COLORS.WHITE,
  },
  textSelectedPreff: {
    lineHeight: 18,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    fontSize: 10,
  },
  textPickUp: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
  },
  containerList: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  containerViewList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectedListItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 36.6,
    marginHorizontal: 8,
    marginVertical: 8,
    height: moderateScale(30),
    width: moderateScale(95),
    borderColor: COLORS.ORANGE,
    borderWidth: 1,
    fontSize: 10,
  },
  sunRiseImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 23,
  },
  sunRiseImageStyle: {
    width: 24,
    height: 24,
  },
  textTimeSlot: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    lineHeight: 18,
    color: COLORS.WHITE,
  },
  morningSloteText: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    marginStart: 10,
  },
  afterNoonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 23,
  },
  afterNoonImage: {
    width: 24,
    height: 24,
  },
  afterNoonTextStyle: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    marginStart: 10,
  },
  eveningSlotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 23,
  },
  nextBtnStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(40.55),
    paddingBottom: 10,
  },
  dateImage: {
    height: 20,
    width: 35,
    tintColor: COLORS.ORANGE,
    alignSelf: 'center',
  },
  DatePicker: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // backgroundColor: 'red',
  },
  morningSloteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 23,
  },
  sunSetImage: {
    width: 24,
    height: 24,
  },
  sunSetTextStyle: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    marginStart: 10,
  },
});
export default styles;
