import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F9F9FA',
  },
  ImageScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 78,
  },
  Information: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },
  Heading: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.PRIMARY_BLACK,
  },
  SearchImage: {
    width: 215,
    height: 160,
    marginTop: 76,
  },
  Indicator: {
    position: 'absolute',
    top: 201,
    left: 134,
  },
  textStyle: {
    marginTop: 21,
    fontFamily: 'Poppins',
    fontSize: 16,
    color: COLORS.PRIMARY_BLACK,
  },
  textStyle1: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: COLORS.PRIMARY_BLACK,
  },
});
