import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
const {width} = Dimensions.get('window');
const ITEM_WIDTH = 111;
const ITEM_HEIGHT = 63;
const ITEM_OFFSET = ITEM_WIDTH + 18;
export const styles = StyleSheet.create({
  dateOutput: {
    color: COLORS.PRIMARY_BLACK,
    fontSize: 18,
    fontWeight: '900',
  },
  dayStyle: {
    color: COLORS.ORANGE,
    textTransform: 'lowercase',
  },
  activeText: {
    color: COLORS.SECONDARY_WHITE,
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderColor: COLORS.ORANGE,
    borderWidth: 1,
  },
});
