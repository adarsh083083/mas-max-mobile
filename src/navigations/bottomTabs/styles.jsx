import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/index';

const styles = StyleSheet.create({
  topLine: {
    borderRadius: 2.5,
    width: '100%',
    height: 5,
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 35,
    height: 35,
    bottom: 5,
  },
  tabViewStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabImageStyle: {
    width: 22,
    height: 24,
  },
  reportImageStyle: {
    width: 20,
    height: 20,
  },
  tabHomeImageStyle: {
    width: 23,
    height: 23,
  },
  tabBarStyle: {
    backgroundColor: COLORS.ORANGE,
    height: 80,
  },
});
export default styles;
