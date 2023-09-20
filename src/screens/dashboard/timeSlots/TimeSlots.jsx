import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import HorizontalCalendar from '../../../components/HorizontalCalendar/HorizontalCalendar';
import {COLORS, FONTS, IMAGES, ROUTES} from '../../../constants';
import {useNavigation, useRoute} from '@react-navigation/native';
import AppButtonColored from '../../../components/Button/AppButtonColored';
import styles from './styles';
import HeaderList from '../../../components/Header/HeaderList/HeaderList';
import HeaderAtom from '../../../components/Header/Header/Header';
import {
  afterNoonSlots,
  eveningSlots,
  morningSlots,
} from '../../../constants/listData';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {serviceOrderAsyncThunk} from '../../../redux/asyncThunk/orderAsyncThunk';
import {getAddressListThunk} from '../../../redux/asyncThunk/getAddressAsyncThunk/getAddressListThunk';

const TimeSlots = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedIndexOne, setSelectedIndexOne] = useState();
  const [timeNow, setTimeNow] = useState(
    moment(selectedDate, 'h:mm:ss A').format(),
  );
  const start_time =
    selectedIndexOne?.substring(0, 5) +
    ' ' +
    selectedIndexOne?.substring(14, 16);
  const end_time = selectedIndexOne?.substring(8, 16);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const routes = useRoute();
  const navigation = useNavigation();
  const {selectVehicleId, service_id, remark} = routes.params;
  const dispatch = useDispatch();
  const {userProfileInfo} = useSelector(state => state?.googleSignIn);
  const {data} = useSelector(state => state?.getDefaultAddress);

  const handleDateSelection = () => {
    setOpen(true);
  };

  const renderMorningSlotItem = ({item, index}) => {
    const comaparableTime = item.morning_time;
    var CurrentTime = moment();
    let properDate =
      moment(selectedDate).format('YYYY-MM-DD') +
      ' ' +
      comaparableTime.split('-')[0] +
      comaparableTime.split('-')[1].slice(-3);

    properDate = moment(properDate, 'YYYY-MM-DD hh:mm A');
    const expiredTime = CurrentTime > properDate;

    return (
      <View style={styles.containerViewList}>
        <TouchableOpacity
          disabled={expiredTime}
          onPress={() => setSelectedIndexOne(item?.morning_time)}
          style={[
            styles.selectedListItem,
            {
              backgroundColor: expiredTime
                ? '#cfcfcf'
                : selectedIndexOne === item?.morning_time
                ? COLORS.ORANGE
                : COLORS.WHITE,
            },
          ]}>
          <Text
            style={[
              selectedIndexOne === item?.morning_time
                ? styles.itemSelectedText
                : styles.itemSelected,
            ]}>
            {item.morning_time}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  useEffect(() => {
    getDefaultAddress();
  }, []);
  const [defaultAddress, setDefaultAddress] = useState([]);
  const getDefaultAddress = () => {
    dispatch(getAddressListThunk.getDefaultAddressByIdThunk())
      .unwrap()
      .then(res => {
        setDefaultAddress(res?.data);
      })
      .catch(error => {});
  };
  const renderAfternoonSlotItem = ({item, index}) => {
    const comaparableTime = item.afternoon_time;
    var CurrentTime = moment();
    let properDate =
      moment(selectedDate).format('YYYY-MM-DD') +
      ' ' +
      comaparableTime?.split('-')[0] +
      comaparableTime?.split('-')[1].slice(-3);

    properDate = moment(properDate, 'YYYY-MM-DD hh:mm A');
    const expiredTime = CurrentTime > properDate;

    return (
      <View style={styles.containerViewList}>
        <TouchableOpacity
          disabled={expiredTime}
          onPress={() => setSelectedIndexOne(item.afternoon_time)}
          style={[
            styles.selectedListItem,
            {
              backgroundColor: !expiredTime
                ? selectedIndexOne === item?.afternoon_time
                  ? COLORS.ORANGE
                  : COLORS.WHITE
                : '#cfcfcf',
            },
          ]}>
          <Text
            style={[
              selectedIndexOne === item.afternoon_time
                ? styles.itemSelectedText
                : styles.itemSelected,
            ]}>
            {item.afternoon_time}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderEveningSlotItem = ({item, index}) => {
    const comaparableTime = item.evening_time;
    var CurrentTime = moment();
    let properDate =
      moment(selectedDate).format('YYYY-MM-DD') +
      ' ' +
      comaparableTime?.split('-')[0] +
      comaparableTime?.split('-')[1].slice(-3);

    properDate = moment(properDate, 'YYYY-MM-DD hh:mm A');
    const expiredTime = CurrentTime > properDate;

    return (
      <View style={styles.containerViewList}>
        <TouchableOpacity
          disabled={expiredTime}
          onPress={() => setSelectedIndexOne(item.evening_time)}
          style={[
            styles.selectedListItem,
            {
              backgroundColor: !expiredTime
                ? selectedIndexOne === item?.evening_time
                  ? COLORS.ORANGE
                  : COLORS.WHITE
                : '#cfcfcf',
            },
          ]}>
          <Text
            style={[
              selectedIndexOne === item?.evening_time
                ? styles.itemSelectedText
                : styles.itemSelected,
            ]}>
            {item.evening_time}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const modifyData = {
    date: selectedDate,
    time_slot_start: start_time,
    time_slot_end: end_time,
    user_id: userProfileInfo?.id,
    vehicle_id: selectVehicleId,
    customer_address_id: data[0]?.id,
    remark,

    order_items: [
      {
        service_id: service_id,
        added_by: userProfileInfo?.role,
        added_by_id: userProfileInfo?.id,
      },
    ],
  };
  console.log(modifyData, 'creating order....');
  const createOrderHandler = () => {
    dispatch(serviceOrderAsyncThunk.CreateServiceOrder({modifyData}))
      .unwrap()
      .then(res => {
        navigation.navigate(ROUTES.ORDER_PLACED);
      })
      .catch(err => {
        console.log(err, 'order error');
      });
  };
  useEffect(() => {
    setTimeNow(moment(selectedDate, 'h:mm:ss A').format());
  }, [selectedDate]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginHorizontal: 10}}>
        <SafeAreaView>
          <HeaderAtom
            backImage={IMAGES.arrow}
            imageBack={IMAGES.arrow}
            title="Select your preferred Date & Time"
            onPress={() => navigation.navigate(ROUTES.SERVICE_DETAILS)}
          />
          <HeaderList
            imageLocation={IMAGES.location}
            title={defaultAddress[0]?.line1}
          />
          <View style={styles.viewContainer}>
            <Text style={styles.textSelectedPreff}>Select Preferred Date</Text>
            <View style={{marginTop: 8}}>
              <HorizontalCalendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />

              <TouchableOpacity
                onPress={() => handleDateSelection()}
                style={{
                  ...styles.DatePicker,
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Image
                  resizeMode="contain"
                  style={styles.dateImage}
                  source={IMAGES.datePiker}
                />
                {!selectedDate ? (
                  <Text style={{color: COLORS.ORANGE}}>Select Custom Date</Text>
                ) : (
                  <View>
                    <Text style={{color: COLORS.ORANGE}}>
                      Selected Date : {moment(selectedDate).format('LL')}
                    </Text>
                    <Text style={{color: COLORS.LIGHTGRAY, fontSize: 10}}>
                      Tap To Change Date
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
              <DatePicker
                modal
                minimumDate={new Date()}
                open={open}
                date={date}
                mode={'date'}
                onDateChange={() => setSelectedDate(date)}
                onConfirm={date => {
                  setSelectedDate(date);
                  setOpen(false);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
            <View style={styles.viewPickUp}>
              <Text style={styles.textPickUp}>Pick-up Time Slot</Text>
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 23,
                }}>
                <Image
                  style={{width: 24, height: 24}}
                  source={IMAGES.sunrise}
                />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 14,
                    fontFamily: FONTS.POPPINS_MEDIUM,
                    color: COLORS.PRIMARY_BLACK,
                    marginStart: 10,
                  }}>
                  Morning Slots
                </Text>
              </View>
            </View>

            <FlatList
              data={morningSlots}
              renderItem={renderMorningSlotItem}
              numColumns={3}
              contentContainerStyle={styles.container}
              extraData={timeNow}
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 23,
                }}>
                <Image
                  style={{width: 24, height: 24}}
                  source={IMAGES.afternoon}
                />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 14,
                    fontFamily: FONTS.POPPINS_MEDIUM,
                    color: COLORS.PRIMARY_BLACK,
                    marginStart: 10,
                  }}>
                  Afternoon Slots
                </Text>
              </View>
            </View>

            <FlatList
              data={afterNoonSlots}
              selectedDate={moment(selectedDate, 'h:mm:ss A').format()}
              renderItem={renderAfternoonSlotItem}
              numColumns={3}
              contentContainerStyle={styles.container}
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 23,
                }}>
                <Image style={{width: 24, height: 24}} source={IMAGES.sunset} />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 14,
                    fontFamily: FONTS.POPPINS_MEDIUM,
                    color: COLORS.PRIMARY_BLACK,
                    marginStart: 10,
                  }}>
                  Evening Slots
                </Text>
              </View>
              <FlatList
                data={eveningSlots}
                selectedDate={moment(selectedDate, 'h:mm:ss A').format()}
                renderItem={renderEveningSlotItem}
                numColumns={3}
                contentContainerStyle={styles.containerEvening}
              />
            </View>
            <View style={styles.nextBtnStyle}>
              <AppButtonColored
                onPress={() => createOrderHandler()}
                title={'Next'}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};
export default memo(TimeSlots);
