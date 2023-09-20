export const getChipColor = () => {
  switch (status) {
    case 'SUCCESS':
      return COLORS.PRIMARY_GREEN;
    case 'PENDING':
      return '#979998';
    case 'ACCEPTED':
      return COLORS.ORANGE;
    default:
      return '#E0E0E0';
  }
};
