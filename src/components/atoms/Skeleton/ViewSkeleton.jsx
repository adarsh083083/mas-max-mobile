import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const ViewSkeleton = ({
  width = 100,
  height = 100,
  borderRadius = 0,
  ...rest
}) => {
  return (
    <SkeletonPlaceholder {...rest}>
      <SkeletonPlaceholder.Item
        width={width}
        height={height}
        borderRadius={borderRadius}
      />
    </SkeletonPlaceholder>
  );
};
export default ViewSkeleton;
