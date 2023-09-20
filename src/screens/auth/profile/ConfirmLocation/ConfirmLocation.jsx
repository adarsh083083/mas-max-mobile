import {Image, PermissionsAndroid, View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import HeaderAtom from '../../../../components/Header/Header/Header';
import {IMAGES} from '../../../../constants';
import {useTheme} from 'react-native-paper';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useSelector} from 'react-redux';
import AppButtonColored from '../../../../components/Button/AppButtonColored';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import HeaderList from '../../../../components/Header/HeaderList/HeaderList';
export const mapRef = React.createRef();
const ConfirmLocation = () => {
  const theme = useTheme();
  const mapViewRef = useRef(null);
  const {userProfileInfo} = useSelector(state => state?.googleSignIn);
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);
  const [pageData, setPageData] = useState({
    limit: 10,
    offset: 0,
  });
  const [stateId, setStateId] = useState(0);
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

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
      }
    } catch (err) {
      console.warn(err);
    }
  }

  const [addressInfo, setAddressInfo] = useState({
    user_id: userProfileInfo.id,
    address_type: 'permanent',
    address: '',
    name: '',
    line2: 'line2',
    state: '',
    city: '',
    country: 'malesiya',
    zipcode: '',
    lat: '1234',
    lng: '1234',
    place_id: '1234',
    is_default: false,
  });

  return (
    <View style={styles.containerMain}>
      <View>
        <HeaderAtom
          backImage={IMAGES.arrow}
          onPress={() => navigation.goBack()}
          imageBack={IMAGES.arrow}
          title={'Search For Society, landmark, locality'}
        />
        <HeaderList
          imageLocation={IMAGES.current_location}
          title="Current Location "
          subTitle="Using GPS"
        />
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
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
        <View style={styles.mainContainer}>
          <View style={styles.bottomViewContainer}>
            <View style={styles.viewTextStyle}>
              <Text style={styles.titleLocation}>Select Location</Text>
            </View>
            <View style={styles.viewLocation}>
              <Text style={styles.titleCurrentLocation}>Current Location</Text>
            </View>
            <View style={styles.viewStyle}>
              <View style={styles.viewConfirmStyle}>
                <Image
                  resizeMode={'contain'}
                  style={styles.imageCheck}
                  source={IMAGES.check}
                />
              </View>
              <View style={styles.viewAddress}>
                <Text style={styles.titleAddress}>
                  205, Krishna Business Center, Scheme 54 PU4,{'\n'} Indore,
                  Madhya Pradesh 452010
                </Text>
              </View>
            </View>
            <View style={styles.BtnContainer}>
              <View style={styles.button}>
                <AppButtonColored
                  title={'Confirm Location'}
                  onPress={() => {
                    handleFormSubmit();
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ConfirmLocation;
