import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
  RefreshControl,
} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import React, {useCallback, useEffect, useState} from 'react';
import {COLORS, IMAGES, ROUTES} from '../../../../constants';
import AppButtonBorder from '../../../../components/Button/AppButtonBorder';
import styles from './styles';
import {BallIndicator} from 'react-native-indicators';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import HeaderAtom from '../../../../components/Header/Header/Header';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {serviceOrderAsyncThunk} from '../../../../redux/asyncThunk/orderAsyncThunk';
import HeaderList from '../../../../components/Header/HeaderList/HeaderList';
import {getVehicleThunk} from '../../../../redux/asyncThunk/addVehicleAsyncThunk/getVehicleTypeAsyncThunk';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ServiceInfo from '../../reports/ServiceInfo';
import {moderateScale} from 'react-native-size-matters';
import moment from 'moment';
import PayNotification from '../../../../components/atoms/ModalComponent/payMentAlert';

const OrderReportDetail = () => {
  const routes = useRoute();
  const state = routes.params?.state;
  let paymentDate = new Date();
  console.log(paymentDate);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [orderDetails, setOrderDetails] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState({
    join: [
      'order_items',
      'order_items.service',
      'vehicle',
      'vehicle_brand',
      'vehicle_model',
      'customerAddress',
      'service_provider',
      'service_provider.business',
      'service_provider.business.owner',
      'service_provider.business.business_address',
    ],
  });

  const [vehicleInfo, setvehicleInfo] = useState([]);
  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getOrderDetails();
    }, []),
  );
  const getOrderDetails = async () => {
    await dispatch(
      serviceOrderAsyncThunk.getOrderDetailsById({
        ...pageData,
        id: state?.orderId,
      }),
    )
      .unwrap()
      .then(res => {
        console.log(res, 'orderResponse');
        dispatch(
          getVehicleThunk.getVehicleDetailsThunk({
            id: res?.data?.vehicle?.id,
          }),
        )
          .unwrap()
          .then(res => {
            setvehicleInfo(res?.data);
            setLoading(false);
          });
        setOrderDetails(res?.data);
        setOrderStatus(res?.data);
        console.log(res, 'kkkkkkkkkkkkkkkkk');
      })
      .catch(err => {
        setLoading(false);
      });
  };

  const handleInvoiceDownload = () => {
    let fileName = 'Sample Pdf';

    const fileUrl = 'https://www.africau.edu/images/default/sample.pdf';
    let dirs = ReactNativeBlobUtil.fs.dirs;
    ReactNativeBlobUtil.config({
      fileCache: true,
      appendExt: 'pdf',
      path: `${dirs.DocumentDir}/${fileName}`,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        title: fileName,
        description: 'File downloaded by download manager.',
        mime: 'application/pdf',
      },
    })
      .fetch('GET', fileUrl)
      .then(res => {
        // in iOS, we want to save our files by opening up the saveToFiles bottom sheet action.
        // whereas in android, the download manager is handling the download for us.
        if (Platform.OS === 'ios') {
          const filePath = res.path();
          let options = {
            type: 'application/pdf',
            url: filePath,
            saveToFiles: true,
          };
          Share.open(options)
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log('BLOB ERROR -> ', err));
  };
  console.log();
  const handlePayment = () => {
    const updatedOrderStatus = {
      ...orderStatus,
      amount: orderStatus?.remaining_price,
      payment_transaction_id: '123456',
      status: 'paid',
      order_id: state?.orderId,
      payment_date: paymentDate,

      order_items: orderStatus.order_items.map(orderItem => {
        console.log(orderItem);
        return {
          ...orderItem,

          // {...orderItem,order.payment_date:paymentDate,}

          status: 'PAID', // Replace 'NEW_STATUS_VALUE' with the desired status value for each order item
        };
      }),
    };

    console.log('orderDEtails', updatedOrderStatus);

    dispatch(
      serviceOrderAsyncThunk.changeOrderStatus({
        updatedOrderStatus,
      }),
    )
      .unwrap()
      .then(res => {
        console.log(res, 'checking for the url of donwload');
        if (res?.status === 201) {
          navigation.navigate(ROUTES.ORDER_REPORTS);
          Toast.show({
            type: 'success',
            text1: 'Payment done successfully',
          });
        }
      })
      .catch(err => {});
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.indicatorStyle}>
          <BallIndicator color={COLORS.ORANGE} />
        </View>
      ) : (
        <>
          <HeaderAtom
            backImage={IMAGES.arrow}
            imageBack={IMAGES.arrow}
            title="Order Details"
            onPress={() => {
              navigation.navigate(ROUTES.HOME);
            }}
          />
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => getOrderDetails()}
              />
            }>
            <View style={styles.headerContainer}>
              <HeaderList
                imageLocation={IMAGES.location}
                title={orderDetails?.customerAddress?.line1}
              />
            </View>

            <View style={styles.containerStyle}>
              <Text style={styles.serviceTextStyle}>
                #Order No. {orderDetails?.id?.slice(0, 8)}
              </Text>
              <View style={styles.btnContainer}>
                <AppButtonBorder title={orderDetails?.status} />
              </View>
            </View>
            <View style={styles.serviceDateContainer}>
              <Text style={styles.serviceDateTextStyle}>
                Service Date & Time:
                {`${moment(orderDetails?.date).format('LL')} ${' '}`}
                {moment(orderDetails?.time_slot_start, 'hh:mm').format(
                  'hh:mm A',
                )}{' '}
                To{' '}
                {moment(orderDetails?.time_slot_end, 'hh:mm').format('hh:mm A')}
              </Text>
            </View>
            {orderDetails?.status == 'PENDING' ? (
              <View style={styles.serviceInfo}>
                {/* <Text style={styles.serviceTextStyle}>Service Name</Text>
                <Text style={styles.serviceTextStyle}>
                  {orderDetails?.order_items &&
                    orderDetails?.order_items[0]?.service?.name}
                </Text> */}
              </View>
            ) : (
              <>
                <View style={{marginTop: 10}}>
                  <Text style={styles.serviceProvider}>
                    Service Provider Details
                  </Text>
                </View>
                <View style={styles.carWashContainer}>
                  <View style={styles.carWashInnerContainer}>
                    <Text style={styles.serviceTextStyle}>
                      {/* {orderDetails?.service_provider?.business?.name} */}
                      Name :
                    </Text>
                    <Text style={styles.phoneTextStyle}>
                      {orderDetails?.order_items &&
                        orderDetails?.service_provider?.business?.owner
                          ?.full_name}
                    </Text>
                  </View>

                  {orderDetails.status != 'PENDING' && (
                    <View>
                      <View style={styles.carWashInnerContainer}>
                        <Text style={styles.serviceTextStyle}>
                          {/* {orderDetails?.service_provider?.business?.name} */}
                          Email :
                        </Text>
                        <Text style={styles.emailTextStyle}>
                          {orderDetails?.order_items &&
                            orderDetails?.service_provider?.business?.owner
                              ?.email}
                        </Text>
                      </View>
                      <View style={styles.carWashInnerContainer}>
                        <Text style={styles.serviceTextStyle}>
                          {/* {orderDetails?.service_provider?.business?.name} */}
                          Phone Number :
                        </Text>
                        <Text style={styles.phoneTextStyle}>
                          {orderDetails?.order_items &&
                            orderDetails?.service_provider?.business?.phone1}
                        </Text>
                      </View>
                      <View style={styles.carWashInnerContainer}>
                        <Text style={styles.serviceTextStyle}>Address :</Text>
                        <Text style={styles.addressLineTextStyle}>
                          {orderDetails?.order_items &&
                            orderDetails?.service_provider?.business
                              ?.business_address?.line1}
                        </Text>
                      </View>
                      <View style={styles.carWashInnerContainer}>
                        <Text style={styles.serviceTextStyle}>
                          {/* {orderDetails?.service_provider?.business?.name} */}
                          Remarks :
                        </Text>
                        <Text style={styles.remarkTextStyle}>
                          {orderDetails?.order_items &&
                            orderDetails?.provider_remark}
                        </Text>
                      </View>
                      <View style={styles.carWashInnerContainer}>
                        <Text style={styles.serviceTextStyle}>
                          {/* {orderDetails?.service_provider?.business?.name} */}
                          Accepted Date :
                        </Text>
                        <Text style={styles.phoneTextStyle}>
                          {orderDetails?.order_items &&
                            orderDetails?.accepted_date}
                        </Text>
                      </View>
                      <View style={styles.carWashContainer}></View>
                    </View>
                  )}
                </View>
              </>
            )}
            <View style={{marginTop: 10}}>
              <Text style={styles.serviceProvider}>Service Details</Text>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.cardHeadContainer}>
                <Text style={styles.serviceTextName}>Service Name</Text>
                <Text style={styles.servicePriceTextStyle}>Service Price</Text>
              </View>
              <View style={{flexGrow: 0}}>
                <FlatList
                  nestedScrollEnabled
                  showsVerticalScrollIndicator={false}
                  viewOffset={10}
                  scrollEventThrottle={16}
                  data={orderDetails?.order_items}
                  renderItem={({item}) => <ServiceInfo item={item} />}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
            <View style={{bottom: moderateScale(30)}}>
              <View style={{marginTop: 10}}>
                <Text style={styles.serviceProvider}>Vehicle Details</Text>
              </View>
              <View style={styles.infomationContainer}>
                <View style={styles.carDetailsStyle}>
                  <Text style={styles.carName}>
                    {vehicleInfo?.vehicle_brand?.name}
                    {vehicleInfo?.vehicle_model?.name}
                  </Text>
                  <Text style={styles.carName}>
                    Reg ID {orderDetails?.vehicle?.registration_number}
                  </Text>
                </View>

                <View style={styles.carImageContainer}>
                  <Image
                    resizeMode="contain"
                    style={styles.carImage}
                    source={IMAGES.audi}
                  />
                </View>
              </View>
            </View>
            {orderDetails?.remark && (
              <View>
                <View style={styles.serviceRequestContainer}>
                  <Text style={styles.serviceRequestTextStyle}>
                    Service Request Remarks
                  </Text>
                </View>
                <View style={styles.serviceMarksContainer}>
                  <Text numberOfLines={3} style={styles.serviceTextReqest}>
                    {orderDetails?.remark}
                  </Text>
                </View>
              </View>
            )}
            {orderDetails.status != 'PENDING' && (
              <View style={styles.priceContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    ...styles.serviceStyle,
                  }}>
                  <Text style={styles.headerText}>Service Total</Text>
                  <Text style={styles.headerText}>
                    RM.
                    {orderDetails?.order_items && orderDetails?.total_price}
                  </Text>
                </View>
                <View style={styles.serviceStyle}>
                  <Text style={styles.headerText}>Convenience Charges</Text>
                  <Text style={styles.headerText}>RM. 100</Text>
                </View>
                <View style={styles.serviceStyle}>
                  <Text style={styles.headerText}>Service Amount Payable</Text>
                  <Text style={styles.headerText}>
                    RM.
                    {orderDetails?.order_items &&
                      +orderDetails?.total_price + 100}
                  </Text>
                </View>
                <View style={styles.serviceStyle}>
                  <Text style={styles.serviceTextStyle}>Payment Mode</Text>
                  <View style={styles.btnOnlineContainer}>
                    <AppButtonBorder title={'Online'} />
                  </View>
                </View>
              </View>
            )}
            {orderDetails.status == 'PENDING' && (
              <View style={styles.serviceTextContainer}>
                <Text style={styles.serviceTextStyle}>
                  Currentely your order is pending state . We will notify when
                  service provider accepted your order
                </Text>
              </View>
            )}
            {orderDetails.status != 'PENDING' && (
              <View>
                <View style={styles.payContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.headerText}>Pay Using</Text>
                    <Pressable
                      style={[styles.payButton, {width: 80}]}
                      onPress={() => handleInvoiceDownload()}>
                      <Text style={styles.buttonTextStyle}>Download</Text>
                    </Pressable>
                  </View>
                  <View style={styles.payBox}>
                    <View style={styles.radioContainer}>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles.radioButton}>
                        <View style={styles.radioButtonIcon} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.imageBox}>
                      <Image
                        style={styles.cardImageStyle}
                        source={IMAGES.payCard}
                      />
                      <Text style={styles.paymentText}>
                        Pay Via Debit/Credit Card
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.Payment}>
                  <View style={styles.priceBox}>
                    <View style={styles.washTextStyle}>
                      <Text style={styles.carText}>Car Wash</Text>
                      <Text style={styles.carTextStyle}>
                        RM {orderDetails?.total_price}
                      </Text>
                    </View>
                    {orderDetails?.status === 'PAYMENT_DONE' ? (
                      <View style={styles.payButtonContainer}>
                        <Pressable
                          disabled
                          style={styles.paidButton}
                          onPress={() => handlePayment()}>
                          <Text style={styles.buttonTextStyle}>Paid</Text>
                        </Pressable>
                      </View>
                    ) : (
                      <View style={styles.payButtonContainer}>
                        <Pressable
                          style={styles.payButton}
                          onPress={() => handlePayment()}>
                          <Text style={styles.buttonTextStyle}>Pay</Text>
                        </Pressable>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            )}
          </KeyboardAwareScrollView>
        </>
      )}
    </View>
  );
};
export default OrderReportDetail;
