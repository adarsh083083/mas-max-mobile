import {Alert} from 'react-native';
import {store} from '../redux/store';
import {serviceCategoriesThunk} from '../redux/asyncThunk/servicesCategroiesthunk';
import messaging from '@react-native-firebase/messaging';
import {useContext, useEffect} from 'react';
import {FCMTokenContext} from '../navigations/fcmContext/fcmTokenContext';
import {userProfileAsyncThunk} from '../redux/asyncThunk/ProfileAsyncThunk';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    GetFcmToken();
  }
};

export const GetFcmToken = async setDevice_token => {
  const fcmtoken = await messaging().getToken();
  return fcmtoken;
};

export const NotificationListener = (
  setServiceDetails,
  setModalVisible,
  setOrderId,
) => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    Alert.alert(JSON.stringify(remoteMessage), 'background state');

    // console.log(
    //   'Notification caused app to open from background state:',
    //   remoteMessage.notification,
    // );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      // if (remoteMessage) {
      //   Alert.alert(JSON.stringify(remoteMessage), 'quit state');
      // }
    });
  messaging().onMessage(async remoteMessage => {
    const data = JSON.parse(remoteMessage.notification?.body);
    setOrderId(data?.id);
    const id = data?.order_items[0]?.service_id;
    const serviceDetails = '';
    store
      .dispatch(serviceCategoriesThunk.getServiceDetailsThunk({id}))
      .unwrap()
      .then(res => {
        setServiceDetails(prev => res?.data);
        setModalVisible(true);
      })
      .catch(err => {});
  });
};

export const useFCMToken = () => {
  const {saveFCMToken} = useContext(FCMTokenContext);

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await messaging().getToken();
        saveFCMToken(token);
      } catch (error) {}
    };

    getToken();
  }, [saveFCMToken]);

  return null; // or you can return the token if needed
};
