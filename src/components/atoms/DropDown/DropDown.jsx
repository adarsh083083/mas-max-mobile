import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS, FONTS, IMAGES} from '../../../constants';
import {styles} from './styles';

const MyDropdown = ({
  style,
  placeholderStyle,
  selectedTextStyle,
  inputSearchStyle,
  iconStyle,
  data,
  maxHeight,
  labelField,
  valueField,
  placeholder,
  value,
  onFocus,
  onBlur,
  onChange,
  renderLabel,
  mode,
  renderItem,
}) => {
  return (
    <View>
      <Dropdown
        style={style}
        placeholderStyle={placeholderStyle}
        selectedTextStyle={selectedTextStyle}
        inputSearchStyle={inputSearchStyle}
        iconStyle={iconStyle}
        data={data}
        renderItem={renderItem}
        maxHeight={maxHeight}
        labelField={labelField}
        valueField={valueField}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        renderLabel={renderLabel}
        iconColor={COLORS.ORANGE}
        itemTextStyle={styles.itemTextStyle}
        mode={mode}
        renderRightIcon={() => (
          <Image
            resizeMode="contain"
            style={styles.dropDownImageStyle}
            source={IMAGES.dropdown}
          />
        )}
      />
    </View>
  );
};
export default MyDropdown;
