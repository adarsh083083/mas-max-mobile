/**
 * @format
 */

import {Alert, AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import {store} from './src/redux/store';
import {logout} from './src/redux/slice/auth.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.interceptors.response.use(
  response => response,
  error => {
    const {response} = error;
    let errorObj = {error: response};

    switch (response?.status) {
      case 401:
        store?.dispatch(logout());
        AsyncStorage.clear();
      case 404:
      case 403:
        errorObj.error = response?.data?.message;
        break;
      case 400:
        errorObj = {
          errorType: 'fieldError',
          error: response.data,
        };
        break;
      case 422:
        errorObj.error = response.data?.errors;
        break;
      default:
        break;
    }

    return Promise.reject(errorObj);
  },
);

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  // console.log('Message handled in the background!', remoteMessage);
});
AppRegistry.registerComponent(appName, () => App);
