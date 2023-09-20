import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, IMAGES, ROUTES} from '../../../constants';
import styles from './styles';
import AppButtonColored from '../../../components/Button/AppButtonColored';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import HeaderAtom from '../../../components/Header/Header/Header';
import MyDropdown from '../../../components/atoms/DropDown/DropDown';
import HeaderList from '../../../components/Header/HeaderList/HeaderList';
import {useDispatch, useSelector} from 'react-redux';
import {vehicleDetailsAsyncThunk} from '../../../redux/asyncThunk/getVehicleeDetailsThunk';
import Toast from 'react-native-toast-message';
import {serviceCategoriesThunk} from '../../../redux/asyncThunk/servicesCategroiesthunk';
import {getVehicleAsyncThunk} from '../../../redux/asyncThunk/getVehiclesAsyncThunk/getVehicleAsyncThunk';
import {moderateScale} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BallIndicator} from 'react-native-indicators';

const ServiceDetails = () => {
  const {data} = useSelector(state => state?.getVehicle);
  const routes = useRoute();

  const [pageData, setPageData] = useState({
    join: ['vehicle_brand', 'vehicle_model', 'vehicle_type'],
  });

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getVehicleAsyncThunk(pageData))
        .unwrap()
        .then(res => {});
    }, []),
  );

  let id = routes?.params;

  const navigation = useNavigation();
  const [errors, setErrors] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [vehicle, setVehicle] = useState(null);
  const [selectVehicleId, setSelectedVehicleId] = useState();
  const [serviceDetails, setServiceDetails] = useState();

  const [cusRemark, setCusRemark] = useState();
  const service_id = serviceDetails?.id;
  const [getVehicleDetails, setGetVehicleDetails] = useState();
  const [loading, setLoading] = useState(true);
  const defaultAdd = useSelector(state => state?.getDefaultAddress);

  const dispatch = useDispatch();
  const renderLabel = () => {
    if (vehicle || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: COLORS.ORANGE}]}>
          Select Vehicle <Text style={styles.starTextStyle}>*</Text>
        </Text>
      );
    }
    return null;
  };

  const getServiceInfo = () => {
    setLoading(true);
    dispatch(serviceCategoriesThunk.getServiceDetails(id))
      .unwrap()
      .then(res => {
        setServiceDetails(res?.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
    // setLoading(false);
  };

  useEffect(() => {
    getServiceInfo();
  }, []);

  useEffect(() => {
    if (selectVehicleId) {
      dispatch(
        vehicleDetailsAsyncThunk.getVehicleDetailsById({id: selectVehicleId}),
      )
        .unwrap()
        .then(res => {
          setGetVehicleDetails(res.data);
        })
        .catch(err => {});
    }
  }, [selectVehicleId]);

  const [vehicleName, setVehicleName] = useState();
  const [vehicleType, setVehicleType] = useState();
  return (
    <>
      {loading ? (
        <View style={styles.indicatorStyle}>
          <BallIndicator color={COLORS.ORANGE} />
        </View>
      ) : (
        <KeyboardAwareScrollView style={styles.innerContainer}>
          <View style={{marginHorizontal: 10}}>
            <HeaderAtom
              backImage={IMAGES.arrow}
              imageLocation={IMAGES.location}
              imageBack={IMAGES.arrow}
              title="Service Details"
              onPress={() => {
                navigation.navigate(ROUTES.HOME);
              }}
            />

            <View style={styles.borderStyle} />
            <View style={styles.headerContainer}>
              <HeaderList
                imageLocation={IMAGES.location}
                title={defaultAdd?.data[0]?.line1}
                onPress={() => {
                  navigation.navigate(ROUTES.HOME);
                }}
              />
            </View>
            <View style={styles.carWashServiceContainer}>
              <View style={styles.cardStyle}>
                <Image
                  style={styles.carImageStyle}
                  resizeMode="contain"
                  source={{uri: serviceDetails?.icon_url}}
                />
              </View>
              <View style={styles.carWashSerContainer}>
                <Text style={styles.carWashTextStyle}>
                  {serviceDetails?.name}
                </Text>
              </View>
            </View>
            <View style={styles.cardService}>
              <Text style={styles.serviceTextStyle}>Service Details</Text>

              <Text style={styles.serviceDetailTextStyle}>
                {serviceDetails?.description}
              </Text>
            </View>
            <View style={{marginTop: 14.1, marginHorizontal: 10}}>
              <View style={styles.lableContainer}>
                {renderLabel()}

                {data?.length > 0 ? (
                  <MyDropdown
                    style={[
                      styles.dropdown,
                      isFocus && {borderColor: COLORS.ORANGE},
                    ]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    renderItem={item => {
                      return (
                        <View style={styles.renderItemContainer}>
                          <Text style={styles.modal_id}>
                            {`${item?.vehicle_model?.name} ${item?.vehicle_brand?.name}`}
                            {'\n'}
                            Type: {item?.vehicle_type?.name}
                          </Text>

                          <Text style={styles.regNumber}>
                            Reg. ID {item?.registration_number}
                          </Text>
                        </View>
                      );
                    }}
                    maxHeight={300}
                    labelField={'vehicle_model.name'}
                    valueField={'id'}
                    placeholder={
                      !isFocus ? 'Select Your Vehicle' : 'Select Your Vehicle'
                    }
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(true)}
                    value={selectVehicleId}
                    onChange={e => {
                      setVehicleName(e);
                      setSelectedVehicleId(() => e.id);
                      setIsFocus(false);
                    }}
                  />
                ) : (
                  <View style={styles.notifyTextStyle}>
                    <Text>No vehicle availble please add vehicle</Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(ROUTES.ADD_VEHICLE, {
                          state: {serviceDetailsPage: true},
                        })
                      }
                      style={styles.btnStyles}>
                      <Text style={styles.addBtnText}>Add</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              {errors.vehicle ? (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.vehicle}
                </Text>
              ) : null}
            </View>
            {selectVehicleId ? (
              <View style={styles.cardDetailsStyle}>
                <View style={styles.cardInnerContainer}>
                  <Text style={styles.carNameTextStyle}>
                    {vehicleName?.vehicle_model?.name}
                  </Text>
                  <Text style={styles.carTypeName}>
                    Type:{vehicleName?.vehicle_type?.name}
                  </Text>
                  <Text style={styles.carRegisterationNumberTextStyle}>
                    Reg ID: {getVehicleDetails?.registration_number}
                  </Text>
                </View>
                <View style={styles.carImageContainer}>
                  <Image
                    style={styles.carImageStyle}
                    source={IMAGES?.mercedez}
                  />
                </View>
              </View>
            ) : null}
            <View style={styles.remarkContainer}>
              <Text style={[styles.serviceTitleRemarks, {marginBottom: 20}]}>
                Service Remarks
              </Text>
              <TextInput
                value={cusRemark}
                onChangeText={e => setCusRemark(e)}
                textAlignVertical="top"
                placeholder="Please enter your remarks"
                style={styles.remarkTextStyle}
              />
            </View>
            <View style={styles.btnNextContainer}>
              <View style={styles.btnNext}>
                {data?.length > 0 && defaultAdd?.data[0] ? (
                  <AppButtonColored
                    onPress={() => {
                      selectVehicleId
                        ? navigation.navigate(ROUTES.TIME_SLOTS, {
                            selectVehicleId,
                            service_id,
                            remark: cusRemark,
                          })
                        : Toast.show({
                            type: 'error',
                            text1: 'Please Select Your Vehicle',
                          });
                    }}
                    title={'Next'}
                  />
                ) : (
                  <AppButtonColored
                    buttonStyle={{width: moderateScale(350)}}
                    onPress={() =>
                      navigation.navigate(ROUTES.ADD_ADDRESS_LIST, {
                        state: {serviceDetailsPage: true},
                      })
                    }
                    title={'Choose Address'}
                  />
                )}
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      )}
    </>
  );
};
export default ServiceDetails;
