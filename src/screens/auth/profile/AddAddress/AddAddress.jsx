import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import MyDropdown from '../../../../components/atoms/DropDown/DropDown';
import {COLORS, IMAGES, ROUTES} from '../../../../constants';
import MyTextInput from '../../../../components/atoms/InputText/inputAtom';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderAtom from '../../../../components/Header/Header/Header';
import AppButtonColored from '../../../../components/Button/AppButtonColored';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getStateAsyncThunk} from '../../../../redux/asyncThunk/getAddressAsyncThunk/getStateAsyncThunk';
import {getCityByStateThunk} from '../../../../redux/asyncThunk/getAddressAsyncThunk/getCityByStateThunk';
import {moderateScale} from 'react-native-size-matters';
import {addAddressThunk} from '../../../../redux/asyncThunk/AddAddressAsyncThunk/addAddressAsyncThunk';
import Toast from 'react-native-toast-message';
import {MaterialIndicator} from 'react-native-indicators';

const AddAddress = () => {
  const navigation = useNavigation();
  const {userProfileInfo} = useSelector(state => state?.googleSignIn);
  const AddressList = useSelector(state => state.AddressList?.data);
  const [isLoading, setIsLoading] = useState(false);
  const [stateId, setStateId] = useState('');

  const [pageData, setPageData] = useState({
    limit: 10,
    offset: 0,
  });
  const routes = useRoute();
  const {id} = routes?.params;

  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);
  const [focus, setFocus] = useState({
    isFocus1: false,
    isFocus2: false,
    isFocus3: false,
  });

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

  useEffect(() => {
    if (stateId !== addressInfo) {
      setAddressInfo({...addressInfo, city: null});
    }
  }, [addressInfo.state]);

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
    if (addressInfo.state) {
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
  const checkValidation = () => {
    const errors = {};
    let hasError = false;
    [
      'user_id',
      'address_type',
      'line1',
      'line2',
      'city',
      'state',
      'country',
      'zipcode',
      'lat',
      'lng',
      'place_id',
      // 'is_default',
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

  // =========================getAddressById Dispatch ===================================
  useEffect(() => {
    dispatch(addAddressThunk.getAddressByIdThunk({id}))
      .unwrap()
      .then(res => {
        setStateId(res?.data?.state);
        setAddressInfo(res?.data);
      })
      .catch(err => {});
  }, [id]);
  useEffect(() => {
    setAddressInfo(AddressList);
  }, []);
  //=========================UpdateAddressById Dispatch===================================

  const handleFormSubmit = () => {
    const modifyAddress = {
      ...addressInfo,
      id,
    };

    const hasError = checkValidation();
    if (!hasError) {
      setIsLoading(true);
      dispatch(addAddressThunk.updateAddressByIdThunk(modifyAddress))
        .unwrap()
        .then(res => {
          if (res.status === 200) {
            Toast.show({
              type: 'success',
              text1: 'Address Updated successfully',
            });
            setIsLoading(false);
            navigation.navigate(ROUTES.ADD_ADDRESS_LIST);
          } else {
            Toast.show({
              type: 'error',
              text1: 'Something went wrong',
            });
            setIsLoading(false);
          }
        })
        .catch(err => {
          setIsLoading(false);
        });
    } else {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <HeaderAtom
          backImage={IMAGES.arrow}
          onPress={() => navigation.goBack()}
          imageBack={IMAGES.arrow}
          title={'Update Address'}
        />
        <View style={{marginTop: moderateScale(20)}}>
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
              placeholder={!focus.isFocus1 ? 'Select Address Type ' : '...'}
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
              value={addressInfo.state}
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
              value={addressInfo.city}
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
            keyboardType={'numeric'}
            autoCapitalize={'characters'}
            style={styles.inputField}
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
export default AddAddress;
