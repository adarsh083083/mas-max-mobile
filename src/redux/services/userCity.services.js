import Axios from 'axios';
import {SERVICE_ROUTES} from '../constants/services.constant';

export const getUserStateService = payload => {
  const {state_id} = payload;

  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.GET_USER_PROFILE, {state_id: state_id}),
      method: METHODS.GET,
      data,
    };
    Axios.request(config)
      .then(res => {})
      .catch(err => {
        reject(err);
      });
  });
};
