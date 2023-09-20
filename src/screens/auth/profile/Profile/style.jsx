import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../constants';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
export const styles = StyleSheet.create({
  //================Main Container=======================
  Container: {
    flex: 1,
    marginHorizontal: 10,
  },
  //===================Avatar Container====================
  ProfileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileImage: {
    marginTop: 21.47,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  versionStyle: {
    marginTop: 50,
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 12,
    color: COLORS.LIGHTGRAY,
  },
  editImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: moderateScale(10),
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    marginTop: 10,
    lineHeight: 14,
  },
  indicatorStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  //====================email Box Style =====================
  emailContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE_DARK,
    height: 65,
    borderBottomColor: COLORS.ORANGE,
    borderBottomWidth: 1,
    marginTop: 17,
  },
  emailInnerContainer: {
    justifyContent: 'center',
  },
  emailImageBox: {
    backgroundColor: COLORS.WHITE_SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    marginLeft: 18,
    padding: 15,
    borderRadius: 8,
  },
  emailImage: {
    height: 20,
    width: 20,
  },
  emailTextContainer: {
    justifyContent: 'center',
    marginLeft: 16.55,
  },
  emailHeading: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
  },
  emailText: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 10,
    color: COLORS.LIGHTGRAY,
  },
  //=========================Phone Box Style===============
  phoneContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE_DARK,
    height: 65,
    borderBottomColor: COLORS.ORANGE,
    borderBottomWidth: 1,
    marginTop: 17,
  },
  phoneInnerContainer: {
    justifyContent: 'center',
  },
  phoneImageBox: {
    backgroundColor: COLORS.WHITE_SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    marginLeft: 18,
    padding: 15,
    borderRadius: 8,
  },
  phoneImage: {
    height: 20,
    width: 20,
  },
  phoneTextContainer: {
    justifyContent: 'center',
    marginLeft: 16.55,
  },
  phoneHeading: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
  },
  phoneText: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 10,
    color: COLORS.LIGHTGRAY,
  },
  //========================address box Style ============================
  addressContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE_DARK,
    height: 65,
    borderBottomColor: COLORS.ORANGE,
    borderBottomWidth: 1,
    marginTop: 17,
  },
  addressInnerContainer: {
    justifyContent: 'center',
  },
  addressImageBox: {
    backgroundColor: COLORS.WHITE_SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    marginLeft: 18,
    padding: 15,
    borderRadius: 8,
  },
  addressImage: {
    height: 20,
    width: 13,
  },
  editImage: {
    width: 14,
    height: 14,
  },
  addressTextContainer: {
    justifyContent: 'center',
    marginLeft: 16.55,
    marginRight: 20,
  },
  addressHeading: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    marginTop: 10,
  },
  addressText: {
    fontFamily: FONTS.POPPINS_REGULAR,
    maxWidth: moderateScale(230),
    fontSize: 10,
    color: COLORS.LIGHTGRAY,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  //========================Dob box Style ============================
  dobContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE_DARK,
    height: 65,
    borderBottomColor: COLORS.ORANGE,
    borderBottomWidth: 1,
    marginTop: 17,
  },
  dobInnerContainer: {
    justifyContent: 'center',
  },
  dobImageBox: {
    backgroundColor: COLORS.WHITE_SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    marginLeft: 18,
    padding: 15,
    borderRadius: 8,
  },
  dobImage: {
    height: 20,
    width: 20,
  },
  dobTextContainer: {
    justifyContent: 'center',
    marginLeft: 16.55,
  },
  dobHeading: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
  },
  dobText: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 10,
    color: COLORS.LIGHTGRAY,
  },
  //=====================Button style==============
  ButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {width: '80%'},
});
