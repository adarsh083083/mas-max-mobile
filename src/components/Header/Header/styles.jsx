import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants/index';
const styles = StyleSheet.create({
  headerListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  headerImageContainer: {
    paddingHorizontal: 4,
  },
  headerImageStyle: {
    width: 20,
    height: 20,
    marginStart: 5,
    alignSelf: 'center',
  },
  headerTitleStyle: {
    marginStart: 10,
    flex: 1,
    alignSelf: 'center',
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
    fontSize: 14,
  },
  headerSearchContainer: {
    justifyContent: 'center',
  },
  imageSearchStyle: {
    width: 18,
    height: 18,
    alignSelf: 'center',
  },
  skipTextStyle: {
    marginHorizontal: 5,
    alignSelf: 'center',
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 12,
    color: COLORS.ORANGE,
  },
  skipContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
});
export default styles;
