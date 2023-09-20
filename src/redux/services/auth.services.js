import Axios from 'axios';
import {METHODS, SERVICE_ROUTES} from '../constants/services.constant';

export const googleSignInService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GOOGLE_SIGN_IN,
      method: METHODS.POST,
      data,
    };
    console.log(config, 'config file login');
    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getUserProfileService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_USER_PROFILE,
      method: METHODS.GET,
    };
    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const userLogoutService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.USER_LOG_OUT,
      method: METHODS.POST,
      data,
    };
    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// userLogoutService
