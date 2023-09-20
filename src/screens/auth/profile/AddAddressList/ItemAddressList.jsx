import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS, IMAGES, ROUTES} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {Menu} from 'react-native-paper';
import {getAddressListThunk} from '../../../../redux/asyncThunk/getAddressAsyncThunk/getAddressListThunk';
import AddressModal from '../../../../components/atoms/ModalComponent/AddressModal';
import Toast from 'react-native-toast-message';

const ItemAddressList = ({item, is_default, handleAddressList}) => {
  const navigation = useNavigation();
  const [defaultAddress, setDefaultAddress] = useState(false);
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = props => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  let id = item.id;
  const deleteAddressById = () => {
    dispatch(getAddressListThunk.deleteAddressByIdThunk({id}))
      .unwrap()
      .then(res => {
        if (res) {
          Toast.show({
            type: 'success',
            text1: 'Address Deleted Successfully',
          });
          handleAddressList();
          navigation.navigate(ROUTES.ADD_VEHICLE, {userProfileInfo});
        } else {
          Toast.show({
            type: 'error',
            text1: 'Something went wrong',
          });
        }
      })
      .catch(err => {});
  };

  const [addressId, setAddressId] = useState();

  const setDefaultAddressById = () => {
    dispatch(
      getAddressListThunk.setDefaultAddressByIdThunk({
        id: addressId,
        is_default: true,
      }),
    )
      .unwrap()
      .then(res => {
        setDefaultAddress(true);
        handleAddressList();
      })
      .catch(err => {});
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
          setAddressId(item?.id);
        }}
        style={[styles.addressContainer, {width: '90%'}]}>
        <View style={[styles.addressInnerContainer]}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageAddressStyle}
              resizeMode="contain"
              source={IMAGES.location}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleSubAddress}>
              {item.line1.slice(0, 20)}
            </Text>

            <Text style={styles.titleAddress}>{item.line1}</Text>
          </View>
          {is_default ? (
            <Text
              style={[
                styles.titleDefault,
                {color: is_default && COLORS.ORANGE},
              ]}>
              default
            </Text>
          ) : null}
          <View style={styles.itemViewStyle}>
            <View style={styles.menuContainer}>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                contentStyle={
                  is_default ? styles.menuIdStyle : styles.menuStyle
                }
                anchor={
                  <TouchableOpacity onPress={openMenu}>
                    <Image
                      resizeMode="contain"
                      source={is_default ? null : IMAGES.dots}
                      style={styles.imageStyle}
                    />
                  </TouchableOpacity>
                }>
                <Menu.Item
                  leadingIcon={() => (
                    <Image source={IMAGES.trash} style={styles.imageDelete} />
                  )}
                  onPress={() => {
                    deleteAddressById(id);
                    setVisible(false);
                  }}
                  titleStyle={styles.titleStyle}
                  title="Delete"
                  style={styles.itemStyle}
                />
              </Menu>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <AddressModal
        setDefaultAddressById={setDefaultAddressById}
        imageCancel={IMAGES.cancel}
        visible={modalVisible}
        onCancel={hideModal}
        title="Set as default address"
        sub_title="Do you want to set address as default address ?"
      />
    </View>
  );
};

export default ItemAddressList;
