import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import HeaderAtom from '../../../../components/Header/Header/Header';
import {COLORS, FONTS, IMAGES, ROUTES} from '../../../../constants';
import {FlatList} from 'react-native';
import ItemAddressList from './ItemAddressList';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import styles from './styles';
import {getAddressListThunk} from '../../../../redux/asyncThunk/getAddressAsyncThunk/getAddressListThunk';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useCallback, useEffect, memo} from 'react';
import {BallIndicator} from 'react-native-indicators';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import {googlePlacesStyles} from '../SearchAddress/styles';
import Geocoder from 'react-native-geocoding';
import {addAddressThunk} from '../../../../redux/asyncThunk/AddAddressAsyncThunk/addAddressAsyncThunk';
import {Toast} from 'toastify-react-native';

const AddAddressList = () => {
  Geocoder.init('AIzaSyBO-6AKRGl3NxAyPB3g4ns9mb_qHdirGq0');
  const {userProfileInfo} = useSelector(state => state?.googleSignIn);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [defaultAddress, setDefaultAddress] = useState([]);
  const {getAddress} = useSelector(state => state?.getAddressList);
  const [addressComp, setAddressComp] = useState([]);
  const [addressComponents, setAddressComponents] = useState('');

  const routes = useRoute();
  const page = routes?.params?.state?.serviceDetailsPage;

  useEffect(() => {
    if (addressComponents && addressComponents.line1) {
      dispatch(
        addAddressThunk.addAddressThunk({
          ...addressComponents,
          country: 'malesiya',
          user_id: userProfileInfo?.id,
          is_default: true,
        }),
      )
        .unwrap()
        .then(res => {
          handleAddressList();
          if (page) {
            navigation.navigate(ROUTES.SERVICE_DETAILS);
          }

          Toast.show({
            type: 'success',
            text1: 'Address Added successfully',
          });
          setAddressComponents('');
        })
        .catch(err => {
          if (page) {
            navigation.navigate(ROUTES.SERVICE_DETAILS);
          }
        });
    }
  }, [addressComponents]);
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      // Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        //Will give you the location on location change

        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };
  //======================================================

  const [addressInfo, setAddressInfo] = useState({
    line1: addressComp,
  });
  useEffect(() => {
    dispatch(getAddressListThunk.getDefaultAddressByIdThunk())
      .unwrap()
      .then(res => {
        setDefaultAddress(res?.data);
      })
      .catch(error => {});
  }, []);

  //=====================================================

  const getCurrentLocation = () => {
    setLoading(true);
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;

      setAddressComponents({
        lat: crd.latitude,
        lng: crd.longitude,
        is_default: true,
      });
      Geocoder.from(pos.coords.latitude, pos.coords.longitude)
        .then(res => {
          setAddressComponents({
            ...addressComponent,
            country: 'malesiya',
            line1: res.results[0].formatted_address,
            place_id: res.results[0].place_id,
            address_type: 'permanent',
          });

          let addressComponent = res.results[0].address_components[0];

          setAddressComp(res.results[0]?.formatted_address);
        })
        .catch(err => {
          setLoading(false);
        });
    });
    setLoading(false);
  };
  const handleAddressList = () => {
    setLoading(true);
    dispatch(getAddressListThunk.getAddressListThunk())
      .unwrap()
      .then(res => {
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
    dispatch(getAddressListThunk.getDefaultAddressByIdThunk())
      .unwrap()
      .then(res => {
        setDefaultAddress(res?.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      handleAddressList();
    }, []),
  );

  const combinedData = [...defaultAddress, ...getAddress];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HeaderList}>
        <HeaderAtom
          backImage={IMAGES.arrow}
          imageBack={IMAGES.arrow}
          title={'My Address'}
          onPress={() => navigation.goBack()}
        />

        <View style={styles.autoComplectContainer}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            textInputProps={styles.googleTextInput}
            fetchDetails={true}
            onPress={(data, details = null) => {
              // handleAutocomplete();
              setAddressComponents({
                lat: details?.geometry.location.lat,
                lng: details?.geometry.location.lng,
                line1: details?.formatted_address,
                is_default: true,
                address_type: 'permanent',

                place_id: details?.place_id,
              });

              setAddress(data.description);
            }}
            query={{
              key: 'AIzaSyBO-6AKRGl3NxAyPB3g4ns9mb_qHdirGq0',
              language: 'en',
              // components: 'country:my',
            }}
            renderLeftButton={() => (
              <Image style={styles.autoSearchImage} source={IMAGES.search} />
            )}
            styles={googlePlacesStyles}
          />
        </View>
        <TouchableOpacity
          onPress={() => getCurrentLocation()}
          style={styles.getCurrentLocation}>
          <View>
            <Image
              source={IMAGES.currentLocation}
              style={styles.currentLocationImage}
            />
          </View>
          <View>
            <Text style={styles.currentLocationText}>Current Location</Text>
            <Text style={styles.gpsTextStyle}>Using GPS</Text>
          </View>
        </TouchableOpacity>
        <View>
          <View style={styles.listHeaderContainer}>
            <Text style={styles.titleAddressStyle}>
              {combinedData.length} Saved Address
            </Text>
          </View>
          {loading ? (
            <View style={styles.indicatorStyle}>
              <BallIndicator color={COLORS.ORANGE} />
            </View>
          ) : (
            <FlatList
              data={combinedData}
              extraData={combinedData}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.flatListStyle}
              renderItem={({item}) => (
                <ItemAddressList
                  handleAddressList={handleAddressList}
                  item={item}
                  is_default={defaultAddress.includes(item)}
                  setLoading={setLoading}
                />
              )}
              keyExtractor={(item, index) => item.index}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(AddAddressList);
