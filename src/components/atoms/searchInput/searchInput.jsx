import React, {useEffect, useState} from 'react';
import {View, Image, TextInput} from 'react-native';
import styles from './styles';
import {COLORS} from '../../../constants/colors';
import debounce from 'lodash/debounce';

const SearchInput = ({
  onTermChange,
  onTermSubmit,
  term,
  source,
  placeholderTextColor,
  placeholder,
  style,
}) => {
  return (
    <View style={{...styles.inputContainer, ...style}}>
      <Image resizeMode="center" style={styles.searchIcon} source={source} />
      <TextInput
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />

      {/* <AutocompleteInput
        data={data}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        flatListProps={{
          keyExtractor: (_, idx) => idx,
          renderItem: ({item}) => <Text>{item}</Text>,
        }}
      /> */}
    </View>
  );
};

export default SearchInput;
