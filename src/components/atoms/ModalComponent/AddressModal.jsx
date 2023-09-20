import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../../constants';
import AppButtonColored from '../../Button/AppButtonColored';
import {useNavigation} from '@react-navigation/native';

const AddressModal = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.modalContainer}>
      <Modal
        onRequestClose={props.modalVisible}
        visible={props.visible}
        transparent={true}
        animationType="slide">
        <TouchableOpacity
          onPressOut={() => setVisible(true)}
          style={styles.modalInnerView}
          onPressIn={props.onCancel}>
          <View style={styles.modalImageContainer}>
            <TouchableOpacity onPress={props.onCancel} style={styles.btnCancel}>
              <Image style={styles.imageCancel} source={props.imageCancel} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{props.title}</Text>
              <Text style={styles.subTitleText}>{props.sub_title}</Text>
            </View>
            <View style={styles.btnContainer}>
              <AppButtonColored
                onPress={() => {
                  props?.setDefaultAddressById();
                  props?.onCancel();
                }}
                title={'Ok'}
                buttonStyle={styles.btnstyle}
              />
              <AppButtonColored
                onPress={props.onCancel}
                title={'Cancel'}
                buttonStyle={styles.cancelbtnStyle}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default AddressModal;
