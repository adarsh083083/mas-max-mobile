import React, {useState} from 'react';
import {
  Modal,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './styles';
const ModalPicker = ({options, onSelect}) => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = option => {
    setSelectedOption(option);
    onSelect(option);
    setVisible(false);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={styles.input}>
          {selectedOption ? selectedOption.label : 'Select an option'}
        </Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback>
        <Modal
          visible={visible}
          onRequestClose={() => setVisible(false)}
          transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ScrollView style={{width: 250, borderRadius: 5}}>
                {options.map(option => (
                  <TouchableOpacity
                    key={option.value}
                    style={styles.option}
                    onPress={() => handleSelect(option)}>
                    <Text style={styles.optionText}>{option.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default ModalPicker;
