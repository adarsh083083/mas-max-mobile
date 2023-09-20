import {useState} from 'react';
import {Image} from 'react-native';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {COLORS, FONTS, IMAGES, ROUTES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

const PayNotification = props => {
  const {modalVisible, setModalVisible} = props;

  // const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const handleNavigation = () => {
    setModalVisible(!modalVisible);
    navigation.navigate(ROUTES.ORDER_REPORTS);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              borderWidth: 0.5,
              borderRadius: 50,
              borderColor: COLORS.WHITE,
              padding: 10,
              backgroundColor: COLORS.ORANGE,
            }}>
            <Image
              style={{
                width: 30,
                height: 30,
                tintColor: COLORS.WHITE,
              }}
              source={IMAGES.correct}
            />
          </View>
          <Text style={styles.modalText}>
            {/* {serviceDetails?.name} */}
            You wnat to pay!
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleNavigation()}>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 45,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 18,
    padding: 8,
    elevation: 2,
    margin: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: COLORS.ORANGE,
  },
  textStyle: {
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
    textAlign: 'center',
    fontSize: 14,
  },
  modalText: {
    marginBottom: 15,
    marginTop: 10,
    textAlign: 'center',
    color: COLORS.PRIMARY_BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 16,
  },
});

export default PayNotification;
