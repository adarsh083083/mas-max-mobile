import React from 'react';
import {TextInput} from 'react-native-paper';
import {styles} from './styles';
const MyTextInput = ({
  placeholder,
  onChangeText,
  value,
  keyboardType,
  mode,
  outlineStyle,
  underlineStyle,
  outlineColor,
  activeOutlineColor,
  textColor,
  contentStyle,
  defaultValue,
  label,
  editable,
  placeholderStyle,
  placeholderTextColor,
  theme,
  labelStyle,
}) => {
  return (
    <TextInput
      label={label}
      mode={mode}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      outlineStyle={outlineStyle}
      underlineStyle={underlineStyle}
      outlineColor={outlineColor}
      activeOutlineColor={activeOutlineColor}
      textColor={textColor}
      contentStyle={contentStyle}
      defaultValue={defaultValue}
      editable={editable}
      style={styles.inputStyle}
      placeholderStyle={placeholderStyle}
      theme={theme}
      placeholderTextColor={placeholderTextColor}
      labelStyle={labelStyle}
    />
  );
};

export default MyTextInput;
