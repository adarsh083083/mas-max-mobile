import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, Text, TouchableOpacity, View} from 'react-native';
import MyDropdown from '../../../../components/atoms/DropDown/DropDown';
import {COLORS, FONTS, IMAGES, ROUTES} from '../../../../constants';
import MyTextInput from '../../../../components/atoms/InputText/inputAtom';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderAtom from '../../../../components/Header/Header/Header';
import AppButtonColored from '../../../../components/Button/AppButtonColored';
import {googlePlacesStyles, styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getStateAsyncThunk} from '../../../../redux/asyncThunk/getAddressAsyncThunk/getStateAsyncThunk';
import {getCityByStateThunk} from '../../../../redux/asyncThunk/getAddressAsyncThunk/getCityByStateThunk';
import {moderateScale} from 'react-native-size-matters';
import {addAddressThunk} from '../../../../redux/asyncThunk/AddAddressAsyncThunk/addAddressAsyncThunk';
import Toast from 'react-native-toast-message';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Image} from 'react-native';
import {getAddressListThunk} from '../../../../redux/asyncThunk/getAddressAsyncThunk/getAddressListThunk';
import {MaterialIndicator} from 'react-native-indicators';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

const SearchAddress = () => {
  Geocoder.init('AIzaSyBO-6AKRGl3NxAyPB3g4ns9mb_qHdirGq0');
  const navigation = useNavigation();
  const {userProfileInfo} = useSelector(state => state?.googleSignIn);
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState({
    limit: 10,
    offset: 0,
  });
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');

  const routes = useRoute();
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);
  const [focus, setFocus] = useState({
    isFocus1: false,
    isFocus2: false,
    isFocus3: false,
  });
  const [addressComp, setAddressComp] = useState();
  const [position, setPosition] = useState();
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
      Geolocation.clearWatch(watchID);
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

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
      Geocoder.from(pos.coords.latitude, pos.coords.longitude)
        .then(res => {
          let addressComponent = res.results[0].address_components[0];
          setAddressComp(res);
        })
        .catch(err => {});
    });
  }, []);
  const labels = [
    {id: '1', label: 'Address Type'},
    {id: '2', label: 'State'},
    {id: '3', label: 'City'},
  ];
  const AddressType = [
    {id: 'permanent', label: 'permanent'},
    {id: 'current', label: 'current'},
    {id: 'office', label: 'office'},
    {id: 'other', label: 'other'},
  ];
  const renderLabel = (id, label) => {
    if (focus[`isFocus${id}`]) {
      return (
        <Text
          style={[
            styles.label,
            focus[`isFocus${id}`] && {color: COLORS.ORANGE},
          ]}>
          {label}
        </Text>
      );
    }
    return null;
  };

  const [defaultAddress, setDefaultAddress] = useState(null);
  const [addressInfo, setAddressInfo] = useState({
    user_id: userProfileInfo.id,
    address_type: 'permanent',
    line1: '',
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

  //========================State and City Api==============================================
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStateAsyncThunk(pageData))
      .unwrap()
      .then(res => {
        setStates(res?.data?.data);
      })
      .catch(err => {});
  }, []);
  useEffect(() => {
    if (addressInfo?.state) {
      dispatch(getCityByStateThunk({pageData, state_id: addressInfo['state']}))
        .unwrap()
        .then(res => {
          setCity(res?.data?.data);
        })
        .catch(err => {});
    }
  }, [addressInfo.state]);
  //=====================================================================================

  const [validationErrors, setValidationErrors] = useState({});
  let hasError = false;
  const checkValidation = () => {
    const errors = {};

    [
      'user_id',
      'address_type',
      'line1',
      'city',
      'state',
      'country',
      'zipcode',
      'place_id',
    ].forEach(field => {
      if (!addressInfo[field] || !addressInfo[field].length) {
        errors[field] = `${field.charAt(0).toUpperCase()}${field.slice(
          1,
        )} is required`;
        hasError = true;
      }
    });
    setValidationErrors(errors);
    return hasError;
  };
  useEffect(() => {
    dispatch(getAddressListThunk.getDefaultAddressByIdThunk())
      .unwrap()
      .then(res => {
        setDefaultAddress(res?.data);
      })
      .catch(error => {});
  }, []);

  const handleFormSubmit = value => {
    setIsLoading(true);
    const hasError = checkValidation();
    if (!hasError) {
      dispatch(
        addAddressThunk.addAddressThunk({
          ...addressInfo,
          is_default: userProfileInfo?.is_profile_completed ? false : true,
        }),
      )
        .unwrap()
        .then(res => {
          setIsLoading(false);

          if (res.status === 201) {
            Toast.show({
              type: 'success',
              text1: 'Address Added successfully',
            });
            if (userProfileInfo?.is_profile_completed == false) {
              navigation.navigate(ROUTES.ADD_VEHICLE);
            } else {
              navigation.navigate(ROUTES.ADD_ADDRESS_LIST);
            }
          } else {
            Toast.show({
              type: 'error',
              text1: 'Something went wrong',
            });
          }
        })
        .catch(err => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      return;
    }
  };

  const [adrressComponent, setAddressComponent] = useState([]);
  useEffect(() => {
    adrressComponent?.map(item => {
      if (item.types[0] == 'postal_code')
        setAddressInfo({...addressInfo, zipcode: item?.long_name});
    });
  }, [adrressComponent]);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <HeaderAtom
          backImage={IMAGES.arrow}
          onPress={() => navigation.goBack()}
          imageBack={IMAGES.arrow}
          title={'Search For Society, landmark, locality'}
        />
        <View style={styles.autoComplectContainer}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            fetchDetails={true}
            onPress={(data, details = null) => {
              setAddressInfo({
                ...addressInfo,
                line1: details.formatted_address,
                lat: details.geometry.location.lat,
                lng: details.geometry.location.lng,
                place_id: details.place_id,
              });
              setAddressComponent(details?.address_components);

              setAddress(data.description);
            }}
            query={{
              key: 'AIzaSyBO-6AKRGl3NxAyPB3g4ns9mb_qHdirGq0',
              language: 'en',
              components: 'country:my',
            }}
            renderLeftButton={() => (
              <Image style={styles.searchStyle} source={IMAGES.search} />
            )}
            styles={googlePlacesStyles}
          />
        </View>
        <TouchableOpacity style={styles.currentLocationContainer}>
          <View>
            <Image
              source={IMAGES.currentLocation}
              style={styles.currentLocationImage}
            />
          </View>
          <View>
            <Text style={styles.currentLoactionText}>Current Location</Text>
            <Text style={styles.gpsTextStyle}>Using GPS</Text>
          </View>
        </TouchableOpacity>
        <View style={{marginTop: moderateScale(10)}}>
          <View style={styles.lableContainer}>
            {labels.map(({id, label}) => renderLabel(1, 'Select Address Type'))}
            <MyDropdown
              style={[
                styles.dropdown,
                focus.isFocus1 && {borderColor: COLORS.ORANGE},
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={AddressType}
              name="address_type"
              maxHeight={300}
              labelField={'label'}
              valueField={'id'}
              placeholder={!focus.isFocus1 ? 'Select State ' : '...'}
              onFocus={() => setFocus({...focus, isFocus1: true})}
              onBlur={() => setFocus({...focus, isFocus1: true})}
              value={addressInfo.address_type}
              onChange={(e, value) => {
                const selectedValue = {...addressInfo, ['address_type']: e.id};
                setAddressInfo(selectedValue);
              }}
            />
          </View>
          <Text style={styles.textError}>
            {addressInfo?.address_type ? null : validationErrors.address_type}
          </Text>
        </View>

        <View style={{marginTop: 10}}>
          <View style={styles.lableContainer}>
            {labels.map(({id, label}) => renderLabel(2, 'Select State'))}
            <MyDropdown
              style={[
                styles.dropdown,
                focus.isFocus2 && {borderColor: COLORS.ORANGE},
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={states}
              name="state"
              maxHeight={300}
              labelField={'name'}
              valueField={'id'}
              placeholder={!focus.isFocus2 ? 'Select State ' : '...'}
              onFocus={() => setFocus({...focus, isFocus2: true})}
              onBlur={() => setFocus({...focus, isFocus2: true})}
              value={addressInfo?.state}
              onChange={(e, value) => {
                const selectedValue = {...addressInfo, ['state']: e.id};
                setAddressInfo(selectedValue);
              }}
            />
          </View>
          <Text style={styles.textError}>
            {addressInfo?.state ? null : validationErrors.state}
          </Text>
        </View>

        <View style={{marginTop: 10}}>
          <View style={styles.lableContainer}>
            {labels.map(() => renderLabel(3, 'Select City'))}
            <MyDropdown
              style={[
                styles.dropdown,
                focus.isFocus3 && {borderColor: COLORS.ORANGE},
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={city}
              name="city"
              maxHeight={300}
              labelField={'name'}
              valueField={'id'}
              placeholder={!focus.isFocus3 ? 'Select City' : '...'}
              onFocus={() => setFocus({...focus, isFocus3: true})}
              onBlur={() => setFocus({...focus, isFocus3: true})}
              value={addressInfo?.city}
              onChange={e => {
                const selectedValue = {...addressInfo, ['city']: e.id};
                setAddressInfo(selectedValue);
              }}
            />
          </View>
          <Text style={styles.textError}>
            {addressInfo.city ? null : validationErrors.city}
          </Text>
        </View>
        <View style={{marginTop: 10, marginHorizontal: 10}}>
          <MyTextInput
            autoCapitalize={'characters'}
            style={styles.inputField}
            keyboardType={'numeric'}
            mode="outlined"
            label="Zip Code"
            placeholder="Enter Zip Code"
            outlineStyle={styles.outLineStyles}
            underlineStyle={styles.underLineStyle}
            outlineColor={COLORS.PRIMARY_BLACK}
            activeOutlineColor={COLORS.ORANGE}
            textColor={COLORS.DARK_GRAY}
            contentStyle={styles.textInput}
            value={addressInfo.zipcode}
            onChangeText={e => {
              setAddressInfo({...addressInfo, zipcode: e});
            }}
          />
        </View>
        <Text style={styles.modalTextError}>
          {addressInfo.zipcode ? null : validationErrors.zipcode}
        </Text>
        <View style={{marginTop: 10, marginHorizontal: 10}}>
          <MyTextInput
            autoCapitalize={'characters'}
            style={styles.inputField}
            mode="outlined"
            label="Line 1"
            placeholder="Line 1"
            outlineStyle={styles.outLineStyles}
            underlineStyle={styles.underLineStyle}
            outlineColor={COLORS.PRIMARY_BLACK}
            activeOutlineColor={COLORS.ORANGE}
            textColor={COLORS.DARK_GRAY}
            contentStyle={styles.textInput}
            value={addressInfo.line1}
            onChangeText={e => {
              setAddressInfo({...addressInfo, ['line1']: e});
            }}
          />
        </View>
        <Text style={styles.modalTextError}>
          {addressInfo.line1 ? null : validationErrors.line1}
        </Text>
        {!isLoading ? (
          <View style={styles.BtnContainer}>
            <View style={styles.button}>
              <AppButtonColored
                title={'Submit'}
                onPress={() => {
                  handleFormSubmit();
                }}
              />
            </View>
          </View>
        ) : (
          <View style={styles.BtnContainer}>
            <View style={styles.button}>
              <AppButtonColored
                title={
                  <View style={styles.indicatorStyle}>
                    <MaterialIndicator size={20} color={COLORS.WHITE} />
                  </View>
                }
                onPress={() => {
                  handleFormSubmit();
                }}
              />
            </View>
          </View>
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};
export default SearchAddress;
