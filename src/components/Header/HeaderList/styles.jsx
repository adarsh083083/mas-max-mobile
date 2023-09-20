import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants/index';
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '96%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginEnd: 8,
    height: 65,
    marginTop: 4,
  },
  locationIconView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.WHITE_SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 10,
  },
  locationImage: {
    width: 20,
    height: 20,
  },
  locationArrow: {
    width: 15,
    height: 15,
  },
  locationTitleStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: 15,
    marginTop: 10,
    color: COLORS.PRIMARY_BLACK,
  },
  locationSubTitleStyle: {
    fontSize: 10,
    fontFamily: FONTS.POPPINS_REGULAR,
    lineHeight: 15,
    color: COLORS.PRIMARY_BLACK,
  },
  addAddressView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.WHITE_SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 10,
  },

  addTitleStyle: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    lineHeight: 22,
    color: COLORS.PRIMARY_BLACK,
    marginStart: 10,
  },
  addIconStyle: {
    width: 25,
    height: 25,
  },
});
export default styles;
