import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';
import {moderateScale, scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY_WHITE,
    marginHorizontal: 10,
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  fab: {
    position: 'absolute',
    bottom: 10,
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
    marginTop: 5,
  },
  vehicleItemContainer: {
    flex: 1,
    marginStart: 10,
  },
  imageStyle: {
    width: 83.13,
    height: 52,
    margin: 7,
    padding: 10,
  },
  vehicleListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginVertical: 10,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 10,
    borderBottomColor: COLORS.ORANGE,
    borderBottomWidth: 1,
    height: 67.56,
  },
  vehicleList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginVertical: 10,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 10,
    // borderBottomColor: COLORS.ORANGE,
    // borderBottomWidth: 1,
    height: 67.56,
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
  flatListStyle: {
    marginVertical: 10,
    paddingBottom: 200,
    width: '100%',
  },
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
  deleteIconStyle: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    tintColor: COLORS.ORANGE,
    marginTop: 10,
  },
  indicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  vehicleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  racImage: {
    width: 160,
    height: 120,
    tintColor: COLORS.ORANGE,
  },
  textRac: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
  },

  menuStyle: {
    width: 120,
    marginEnd: scale(20),
    height: 100,
    backgroundColor: COLORS.WHITE,
  },
  menuIdStyle: {
    width: 60,
    marginEnd: scale(20),
    height: 60,
    backgroundColor: COLORS.WHITE,
  },
  itemStyle: {
    top: 5,
    bottom: 15,
  },
  menuContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginStart: 40,
  },
  itemViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 7,
  },
  imageDotStyle: {
    width: 20,
    height: 20,
    bottom: scale(7),
    right: scale(5),
  },
  imageDelete: {
    width: 18,
    height: 18,
    alignSelf: 'center',
    top: moderateScale(5),
  },
  titleStyle: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.PRIMARY_BLACK,

    end: 8,
    top: moderateScale(5),
  },
});
export default styles;
