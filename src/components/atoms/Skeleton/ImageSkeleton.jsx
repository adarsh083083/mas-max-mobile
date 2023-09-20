import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const ImageSkeleton = ({width, height, borderRadius, style, ...rest}) => {
  return (
    <SkeletonPlaceholder {...rest}>
      <SkeletonPlaceholder.Item
        width={width}
        height={height}
        borderRadius={borderRadius}
        style={style}
      />
    </SkeletonPlaceholder>
  );
};
