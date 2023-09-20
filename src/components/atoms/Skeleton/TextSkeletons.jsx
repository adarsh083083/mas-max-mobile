import {Alert, StyleSheet, Text, View, Image} from 'react-native';
import React, {Children} from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const TextSkeletons = ({
  width,
  height,
  borderRadius,
  margin,
  padding,
  style,
  ...rest
}) => {
  return (
    <View>
      <SkeletonPlaceholder {...rest}>
        <SkeletonPlaceholder.Item
          width={width}
          height={height}
          borderRadius={borderRadius}
        />
      </SkeletonPlaceholder>
    </View>
  );
};
export default TextSkeletons;
