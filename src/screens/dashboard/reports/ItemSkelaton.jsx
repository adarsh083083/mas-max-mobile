import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../reports/styles';
import {ROUTES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const ItemSkelaton = ({item}) => {
  const navigation = useNavigation();
  let dashboardListCount = 0;
  const handleStatus = items => {
    const accepted = items
      ?.filter(i => i.status == 'Pending')
      ?.map(i => i.count)
      ?.reduce((a, b) => a + b);
    const pending = items
      ?.filter(i => i.status == 'Accepted')
      ?.map(i => i.count)
      ?.reduce((a, b) => a + b);
    const rejected = items
      ?.filter(i => ['Accepted', 'Pending', 'Rejected'].includes(i.status))
      ?.map(i => i.count)
      ?.reduce((a, b) => a + b);
    dashboardListCount = acce + pending + todo;
    return [
      {
        count: accepted,
        text: 'Accepted',
        color: '#3c8f62',
      },

      {
        count: pending,
        text: 'Pending',
        color: 'rgba(47, 143, 97, 0.10)',
      },
      {
        count: rejected,
        text: 'Rejected',
        color: '#cc413f',
      },
    ];
  };
  return (
    <SkeletonPlaceholder style={{height: 100, width: '100%'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.ORDER_REPORT_DETAIL)}
        style={styles.orderList}>
        <View style={styles.orderItemContainer}>
          <Text style={styles.textIdStyle}>{`ID : ${item?.id.slice(
            0,
            8,
          )}`}</Text>
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
              {moment(item?.time_slot_start, ['h:mm A']).format('HH:mm')}
            </Text>
            <Text style={styles.textSubTitleStyle}>
              {' '}
              {moment(item?.time_slot_end, ['h:mm A']).format('HH:mm')}
            </Text>
          </View>
        </View>
        <View style={styles.orderBtnContainer}>
          <View style={styles.orderStatusContainer}>
            <Text style={styles.titleStatus}>{item?.status}</Text>
            <Text style={styles.textCarWash}>
              {`RM :${item?.order_items[0]?.service_id.slice(0, 6)}`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SkeletonPlaceholder>
  );
};
export default ItemSkelaton;
