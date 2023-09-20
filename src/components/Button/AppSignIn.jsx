import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles.signin';
const AppSignIn = ({titleAready, titleSignIn, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.accountText}>{titleAready}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.signInText}> {titleSignIn}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AppSignIn;
