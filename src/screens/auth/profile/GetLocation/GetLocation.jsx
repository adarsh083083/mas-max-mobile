import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {IMAGES} from '../../../../constants';
import {useTheme} from 'react-native-paper';
import HeaderAtom from '../../../../components/Header/Header/Header';
import HeaderList from '../../../../components/Header/HeaderList/HeaderList';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import {addAddressList} from '../../../../constants/listData';
import ItemGetLocation from './ItemGetLocation';

const GetLocation = () => {
  const theme = useTheme();
  const {colors} = theme;
  const navigation = useNavigation();
  const [position, setPosition] = useState(
    {
      latitude: 10,
      longitude: 10,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    },
  );
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    });
  };
  return (
    <View>
      <HeaderAtom
        backImage={IMAGES.arrow}
        onPress={() => {
          navigation.goBack();
        }}
        imageBack={IMAGES.arrow}
        title={'Search For Society, landmark, locality'}
      />
      <HeaderList
        imageLocation={IMAGES.current_location}
        title="Current Location "
        subTitle="Using GPS"
      />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
          region={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}>
          <Marker coordinate={position} />
        </MapView>
      </View>
      <View>
        <FlatList
          contentContainerStyle={styles.containerStyle}
          data={addAddressList}
          renderItem={({item}) => <ItemGetLocation item={item} />}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default GetLocation;
