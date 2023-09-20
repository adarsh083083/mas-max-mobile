import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ServiceInfo = item => {
  return (
    <View style={styles.ServiceInfoContainer}>
      <Text style={styles.ServiceInfoInnerContainer}>
        {item?.item?.service?.name}
      </Text>
      {item?.item?.price ? (
        <Text
          style={styles.ServiceTextStyles}>{`RM ${item?.item?.price}`}</Text>
      ) : null}
    </View>
  );
};

export default ServiceInfo;
