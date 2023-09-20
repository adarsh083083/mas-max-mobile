import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import MyDropdown from '../../../../components/atoms/DropDown/DropDown';
import {COLORS, IMAGES, ROUTES} from '../../../../constants';
import MyTextInput from '../../../../components/atoms/InputText/inputAtom';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderAtom from '../../../../components/Header/Header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import AppButtonColored from '../../../../components/Button/AppButtonColored';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {userProfileAsyncThunk} from '../../../../redux/asyncThunk/ProfileAsyncThunk';
import {getUserProfile} from '../../../../redux/asyncThunk/authAsyncThunk';
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import {addAddressThunk} from '../../../../redux/asyncThunk/AddAddressAsyncThunk/addAddressAsyncThunk';
import {getVehicleByIdThunk} from '../../../../redux/asyncThunk/getVehiclesAsyncThunk/getVehicleAsyncThunk';
import {styles} from './updateVechicles.styles';
import {getVehicleThunk} from '../../../../redux/asyncThunk/addVehicleAsyncThunk/getVehicleTypeAsyncThunk';

const fuelType = [
  {label: 'Petrol', id: '1'},
  {label: 'Disal', id: '2'},
];

const UpdateVehicle = () => {
  Geocoder.init('AIzaSyBO-6AKRGl3NxAyPB3g4ns9mb_qHdirGq0');
  const navigation = useNavigation();
  const state = useRoute();
  const checkPrevPage = state?.params?.state;
  const dispatch = useDispatch();
  const {userProfileInfo} = useSelector(state => state?.googleSignIn);
  let profileStatus = userProfileInfo.is_profile_completed;
  const [addressComponents, setAddressComponents] = useState('');
  const [vehicleModel, setVehicleModel] = useState([]);
  const [vehicleInfo, setVehicleInfo] = useState({
    type_id: '',
    brand_id: '',
    model_id: '',
    fuel_type: '',
    registration_number: '',
    user_id: userProfileInfo?.id,
  });
  //===============getting id from vehicle list==================
  const routes = useRoute();
  const id = routes.params;

  //=======================Dispatch code are here==========================================
  const [vehicleType, setVehicleType] = useState([]);
  const [vehicleBrand, setVehicleBrands] = useState([]);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;

      Geocoder.from(pos.coords.latitude, pos.coords.longitude)
        .then(res => {
          setAddressComponents({
            lat: crd.latitude,
            lng: crd.longitude,
            country: 'malesiya',
            user_id: userProfileInfo?.id,
            is_default: true,
            line1: res.results[0].formatted_address,
            place_id: res.results[0].place_id,
          });

          let addressComponent = res.results[0].address_components[0];
          setAddressComp(res.results[0]?.formatted_address);
        })
        .catch(err => {});
    });
  };

  useEffect(() => {
    if (!profileStatus) {
      getCurrentLocation();
    }
  }, []);
  useEffect(() => {
    if (addressComponents) {
      dispatch(
        addAddressThunk.addAddressThunk({
          ...addressComponents,
        }),
      )
        .unwrap()
        .then(res => {
          setAddressComponents('');
        })
        .catch(err => {});
    }
  }, [addressComponents]);

  useEffect(() => {
    Promise.all([
      dispatch(getVehicleThunk.getVehicleTypeAsyncThunk()).unwrap(),
      dispatch(getVehicleThunk.getVehicleBrandAsyncThunk()).unwrap(),
    ])
      .then(([vehicleTypeRes, vehicleBrandRes]) => {
        setVehicleType(vehicleTypeRes?.data?.data);
        setVehicleBrands(vehicleBrandRes?.data?.data);
      })
      .catch(err => {});
  }, []);

  //=================== renderLable of DropDown==================================

  const labels = [
    {id: '1', label: 'Type'},
    {id: '2', label: 'Brand'},
    {id: '3', label: 'Model'},
    {id: '4', label: 'Fuel Type'},
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
  const [focus, setFocus] = useState({
    isFocus1: false,
    isFocus2: false,
    isFocus3: false,
    isFocus4: false,
  });

  //=====================DropDown Validation =================================
  const [validationErrors, setValidationErrors] = useState({});

  const checkValidation = () => {
    const errors = {};
    let hasError = false;
    [
      'type_id',
      'brand_id',
      'model_id',
      'fuel_type',
      'registration_number',
    ].forEach(field => {
      if (!vehicleInfo[field] || !vehicleInfo[field].length) {
        errors[field] = `${field.replace(/_/g, ' ')} is required`;
        errors[field] = errors[field].replace(/id/g, '');
        hasError = true;
      }
      if (!vehicleInfo.model_id) {
      }
    });

    setValidationErrors(errors);
    return hasError;
  };

  //=========================here is GetVehicle Thunk by id==================
  useEffect(() => {
    dispatch(getVehicleByIdThunk(id))
      .unwrap()
      .then(res => {
        setVehicleInfo(res.data);
      })
      .catch(err => {});
  }, []);

  useEffect(() => {
    if (vehicleInfo?.brand_id) {
      setVehicleInfo({...vehicleInfo, model_id: ''});
      dispatch(
        getVehicleThunk.getModalByIdAsyncThunk({
          brand_id: vehicleInfo.brand_id,
        }),
      )
        .unwrap()
        .then(res => {
          setVehicleModel(res?.data?.data);
        })
        .catch(err => {});
    }
  }, [vehicleInfo?.brand_id]);

  const handleFormSubmit = () => {
    const hasError = checkValidation();
    if (!hasError && vehicleInfo.model_id) {
      dispatch(
        getVehicleThunk.updateVehicleAsyncThunk({vehicleInfo, id: id?.id}),
      )
        .unwrap()
        .then(res => {
          navigation.navigate(ROUTES.VEHICLES);
          Toast.show({
            type: 'success',
            text1: 'Vehicle Updated successfully',
          });
        })
        .catch(err => {});
    } else {
      return;
    }
  };

  const handlePageSkip = () => {
    const modifyObject = {
      is_profile_completed: true,
    };
    dispatch(userProfileAsyncThunk.updateUserProfile(modifyObject))
      .unwrap()
      .then(res => {
        dispatch(getUserProfile());
      })
      .catch(err => {});

    navigation.navigate(ROUTES.HOME);
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {profileStatus === true ? (
          <HeaderAtom
            backImage={IMAGES.arrow}
            onPress={() => navigation.goBack()}
            imageBack={IMAGES.arrow}
            title={'Update Vehicles'}
          />
        ) : (
          <HeaderAtom
            backImage={IMAGES.arrow}
            onPress={() => navigation.goBack()}
            imageBack={IMAGES.arrow}
            title={'Update Vehicles'}
            imageRightArrow={IMAGES.skip}
            Skip={'Skip'}
            onSkip={() => handlePageSkip()}
          />
        )}

        <View style={{marginTop: 40}}>
          <View style={styles.lableContainer}>
            {labels.map(({id, label}) => renderLabel(1, 'Type'))}

            <MyDropdown
              style={[
                styles.dropdown,
                focus.isFocus1 && {borderColor: COLORS.ORANGE},
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={vehicleType}
              maxHeight={300}
              labelField={'name'}
              valueField={'id'}
              placeholder={
                !focus.isFocus1 ? 'Select Vehicle Type' : 'Select Vehicle Type'
              }
              onFocus={() => setFocus({...focus, isFocus1: true})}
              onBlur={() => setFocus({...focus, isFocus1: true})}
              value={vehicleInfo.type_id}
              onChange={(e, value) => {
                let selectedValue = {...vehicleInfo, ['type_id']: e.id};
                setVehicleInfo(selectedValue);
              }}
            />
          </View>
          <Text style={styles.textError}>
            {vehicleInfo.type_id ? null : validationErrors.type_id}
          </Text>
        </View>
        <View style={{marginTop: 6}}>
          <View style={styles.lableContainer}>
            {labels.map(({id, label}) => renderLabel(2, 'Brand'))}
            <MyDropdown
              style={[
                styles.dropdown,
                focus.isFocus2 && {borderColor: COLORS.ORANGE},
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={vehicleBrand}
              maxHeight={300}
              labelField={'name'}
              valueField={'id'}
              placeholder={
                !focus.isFocus2
                  ? 'Select Vehicle Brand'
                  : 'Select Vehicle Brand'
              }
              onFocus={() => setFocus({...focus, isFocus2: true})}
              onBlur={() => setFocus({...focus, isFocus2: true})}
              value={vehicleInfo.brand_id}
              onChange={(e, value) => {
                setVehicleInfo({...vehicleInfo, ['brand_id']: e.id});
              }}
            />
          </View>
          <Text style={styles.textError}>
            {vehicleInfo.brand_id ? null : validationErrors.brand_id}
          </Text>
        </View>
        <View style={{marginTop: 6}}>
          <View style={styles.lableContainer}>
            {labels.map(({id, label}) => renderLabel(3, 'Model'))}
            <MyDropdown
              style={[
                styles.dropdown,
                focus.isFocus3 && {borderColor: COLORS.ORANGE},
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              maxHeight={300}
              labelField={'name'}
              valueField={'id'}
              data={vehicleModel}
              placeholder={
                !focus.isFocus3
                  ? 'Select Vehicle Model'
                  : 'Select Vehicle Model'
              }
              onFocus={() => setFocus({...focus, isFocus3: true})}
              onBlur={() => setFocus({...focus, isFocus3: true})}
              value={vehicleInfo.model_id}
              onChange={e => {
                setVehicleInfo({...vehicleInfo, ['model_id']: e.id});
              }}
            />
          </View>
          <Text style={styles.textError}>
            {vehicleInfo.model_id ? null : validationErrors.model_id}
          </Text>
        </View>
        <View style={{marginTop: 6}}>
          <View style={styles.lableContainer}>
            {labels.map(({id, label}) => renderLabel(4, ' Fuel Type'))}
            <MyDropdown
              style={[
                styles.dropdown,
                focus.isFocus4 && {borderColor: COLORS.ORANGE},
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              maxHeight={300}
              labelField={'label'}
              valueField={'label'}
              data={fuelType}
              placeholder={
                !focus.isFocus4
                  ? 'Select Vehicle Fuel Type'
                  : 'Select Vehicle Fuel Type'
              }
              onFocus={() => setFocus({...focus, isFocus4: true})}
              onBlur={() => setFocus({...focus, isFocus4: true})}
              value={vehicleInfo.fuel_type}
              onChange={(e, value) => {
                let selectedValue = {...vehicleInfo, ['fuel_type']: e.label};
                setVehicleInfo(selectedValue);
              }}
            />
          </View>
          <Text style={styles.textError}>
            {vehicleInfo.fuel_type ? null : validationErrors.fuel_type}
          </Text>
        </View>
        <View style={{marginTop: 6, marginHorizontal: 10}}>
          <MyTextInput
            autoCapitalize={'characters'}
            style={styles.inputField}
            mode="outlined"
            label="Vehicle Number"
            placeholder="Enter Vehicle Registration Number"
            outlineStyle={styles.outLineStyles}
            underlineStyle={styles.underLineStyle}
            outlineColor={COLORS.PRIMARY_BLACK}
            activeOutlineColor={COLORS.ORANGE}
            textColor={COLORS.DARK_GRAY}
            contentStyle={styles.textInput}
            value={vehicleInfo.registration_number}
            keyboardType={'numeric'}
            placeholderTextColor={COLORS.PRIMARY_BLACK}
            // theme={{theme}}
            onChangeText={e =>
              setVehicleInfo({...vehicleInfo, ['registration_number']: e})
            }
          />
        </View>
        <Text style={styles.textError}>
          {vehicleInfo.registration_number
            ? null
            : validationErrors.registration_number}
        </Text>
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
      </KeyboardAwareScrollView>
    </View>
  );
};
export default UpdateVehicle;
