import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red',
  },
  innerContainer: {
    backgroundColor: COLORS.TRANSPARENT,
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalInnerView: {
    backgroundColor: COLORS.TRANSPARENT,
    flex: 1,
    justifyContent: 'center',
  },
  modalImageContainer: {
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    height: moderateScale(150),
    marginHorizontal: 8,
    borderRadius: 10,
    marginHorizontal: 20,
    borderColor: 'gray',
  },
  btnCancel: {
    position: 'absolute',
    top: scale(10),
    right: scale(15),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imageCancel: {
    width: 28,
    height: 28,
    bottom: moderateScale(5),
    left: moderateScale(8),
  },
  cameraContainer: {
    justifyContent: 'center',
    width: '100%',
    marginStart: 10,
    marginTop: 2,
  },
  btnCamera: {
    flexDirection: 'row',
    bottom: 10,
    marginHorizontal: 20,
  },
  imageCamera: {
    width: 30,
    height: 30,
    tintColor: COLORS.ORANGE,
  },
  cameraText: {
    color: COLORS.SECONDARY_BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  gallerybtn: {
    flexDirection: 'row',

    top: 2,
    marginHorizontal: 20,
  },
  galleryImage: {
    width: 30,
    height: 30,
    tintColor: COLORS.ORANGE,
  },
  galleryText: {
    color: COLORS.SECONDARY_BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: moderateScale(60),
  },
  titleText: {
    color: 'black',
    top: moderateVerticalScale(50),
    fontSize: 14,
    color: COLORS.PRIMARY_BLACK,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
  },
  subTitleText: {
    color: 'black',
    top: moderateVerticalScale(70),
    fontSize: 12,
    color: COLORS.PRIMARY_BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnstyle: {
    width: '60%',
    top: moderateScale(5),
  },
  cancelbtnStyle: {
    width: '60%',
    top: moderateScale(5),
  },
});

export default styles;
