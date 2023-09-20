import React, {useCallback, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs(true);
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import axios from 'axios';
import AppNavigation from './src/navigations/AppNavigation/AppNavigation';
import AuthNavigation from './src/navigations/AuthNavigation/AuthNavigation';
import {persistor, store} from './src/redux/store';
import MainNavigation from './src/navigations/MainNavigation/MainNavigation';
import NetInfo from '@react-native-community/netinfo';
import NoInternetModal from './src/components/atoms/ModalComponent/NoInternetModel';
import {getUserProfile} from './src/redux/asyncThunk/authAsyncThunk';
import Toast from 'react-native-toast-message';

import {
  requestUserPermission,
  NotificationListener,
} from './src/utils/pushnotification_helper';
import PushNotification from './src/components/atoms/ModalComponent/pushNotification';
import {NavigationContainer} from '@react-navigation/native';

const Routes = () => {
  const {accessToken, userProfileInfo} = useSelector(
    state => state.googleSignIn,
  );
  let loginStatus = userProfileInfo?.is_profile_completed;
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
    dispatch(getUserProfile())
      .unwrap()
      .then(res => {});
  }, [accessToken, loginStatus]);

  return (
    <>
      {accessToken ? (
        !loginStatus ? (
          <MainNavigation />
        ) : (
          <AppNavigation />
        )
      ) : (
        <AuthNavigation />
      )}
    </>
  );
};
const App = () => {
  const [serviceDetails, setServiceDetails] = useState('');
  const [orderId, setOrderId] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isOffline, setOfflineStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestUserPermission();
    NotificationListener(setServiceDetails, setModalVisible, setOrderId);
  }, []);

  const baseurl = 'https://masmax-staging-api.trioocean.com/api/v1';
  axios.defaults.baseURL = baseurl;
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    getNetWorkInfo();
    return () => removeNetInfoSubscription();
  }, [isOffline]);

  const getNetWorkInfo = useCallback(() => {
    setLoading(true);
  }, []);

  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
        {isOffline ? (
          <>
            {/* <NotificationController /> */}
            <NoInternetModal show={isOffline} isRetrying={loading} />
          </>
        ) : null}
        <Toast />
        <PushNotification
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          serviceDetails={serviceDetails}
          orderId={orderId}
        />
      </NavigationContainer>
    </>
  );
};

export default App;
