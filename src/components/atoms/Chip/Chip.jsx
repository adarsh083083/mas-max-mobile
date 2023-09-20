import React from 'react';
import {Chip} from 'react-native-paper';
import {COLORS} from '../../../constants';
const AppChip = ({children, status}) => {
  const getChipColor = () => {
    switch (status) {
      case 'SUCCESSFUL':
        return '#2F8F61';
      case 'PENDING':
        return '#979998';
      case 'ACCEPTED':
        return COLORS.ORANGE;
      case 'PAYMENT_DONE':
        return '#2F8F61';
      default:
        return '#E0E0E0';
    }
  };

  return (
    <Chip style={{backgroundColor: getChipColor()}} mode="outlined">
      {children}
    </Chip>
  );
};

export default AppChip;
