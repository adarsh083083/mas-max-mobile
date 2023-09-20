import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Menu} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {
  deleteVehicleByIdThunk,
  getVehicleAsyncThunk,
} from '../../../redux/asyncThunk/getVehiclesAsyncThunk/getVehicleAsyncThunk';
import styles from './styles';
import {IMAGES, ROUTES} from '../../../constants';
import ItemSkelaton from './ItemSkelaton';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const ItemVehicles = ({item}) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const navigation = useNavigation();

  const handleDelete = () => {
    setLoading(true);
    setVisible(false);
    dispatch(deleteVehicleByIdThunk({id: item?.id}))
      .unwrap()
      .then(res => {
        if (res) {
          dispatch(getVehicleAsyncThunk());
          Toast.show({
            type: 'success',
            text1: 'Vehicle Deleted successfully',
          });
          setLoading(false);
        }
      })
      .catch(err => {});
  };
  const handleUpate = () => {
    navigation.navigate(ROUTES.UPDATE_VEHICLE, {id: item.id});
    setVisible(false);
  };

  return (
    <>
      {loading ? (
        <ItemSkelaton />
      ) : (
        <View style={styles.vehicleListContainer}>
          <Image
            source={item.image == null ? IMAGES.audi : {uri: item.image}}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <View style={styles.vehicleItemContainer}>
            <Text style={styles.textCarStyle}>
              {`${item?.vehicle_brand?.name} ${item?.vehicle_model?.name}`}
            </Text>
            <Text style={styles.textVehcStyle}>{item?.fuel_type}</Text>
            <Text style={styles.textRegStyle}>{item?.registration_number}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '15%',
            }}>
            <View style={styles.menuContainer}>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                contentStyle={styles.menuStyle}
                anchor={
                  <TouchableOpacity onPress={openMenu}>
                    <Image
                      resizeMode="contain"
                      source={IMAGES.dots}
                      style={styles.imageDotStyle}
                    />
                  </TouchableOpacity>
                }>
                <View style={{marginTop: -12}}>
                  <Menu.Item
                    leadingIcon={() => (
                      <Image source={IMAGES.edit} style={styles.imageDelete} />
                    )}
                    onPress={handleUpate}
                    closeMenu={false}
                    titleStyle={styles.titleStyle}
                    title="Edit"
                    style={styles.itemStyle}
                  />
                </View>
                <Menu.Item
                  leadingIcon={() => (
                    <Image source={IMAGES.trash} style={styles.imageDelete} />
                  )}
                  onPress={handleDelete}
                  titleStyle={styles.titleStyle}
                  title="Delete"
                  style={styles.itemStyle}
                />
              </Menu>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default ItemVehicles;
