import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import styles from '../reports/styles';
import {ROUTES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import AppChip from '../../../components/atoms/Chip/Chip';
const ItemReports = ({item}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(ROUTES.ORDER_REPORT_DETAIL, {
          state: {orderId: item?.id},
        })
      }
      style={styles.orderListContainer}>
      <View style={styles.orderItemContainer}>
        <Text style={styles.textIdStyle}>{`ID : ${item.id.slice(0, 8)}`}</Text>
        <Text style={styles.textTitleStyle}>
          {item?.order_items[0]?.service?.name}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textSubTitleStyle}>
            {moment(item?.date).format('DD MMMM YYYY')}
          </Text>
          <Text style={styles.textSubTitleStyle}>
            {' '}
            {''}
            {moment(item.time_slot_start, 'hh:mm').format('hh:mm A')}
          </Text>
          <Text style={styles.textSubTitleStyle}>
            {' '}
            to {moment(item.time_slot_end, 'hh:mm').format('hh:mm A')}
          </Text>
        </View>
      </View>
      <View style={styles.orderBtnContainer}>
        <AppChip status={item?.status}>
          <Text style={styles.titleStatus}>{item?.status}</Text>
        </AppChip>
        {item?.total_price ? (
          <Text style={styles.textCarWash}>{`RM :${item?.total_price}`}</Text>
        ) : null}
      </View>
    </Pressable>
  );
};
export default ItemReports;
