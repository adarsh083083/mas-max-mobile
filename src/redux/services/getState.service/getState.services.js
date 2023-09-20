import Axios from 'axios';
import {METHODS, SERVICE_ROUTES} from '../../constants/services.constant';

export function GetStateServices(params) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_STATE,
      method: METHODS.GET,
      params,
    };

    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
