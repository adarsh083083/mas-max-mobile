import Axios from 'axios';
import {
  METHODS,
  SERVICE_ROUTES,
  replaceUrl,
} from '../../constants/services.constant';

export function GetCityServices(state_id, pageData) {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.GET_CITY, {state_id, pageData}),
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
}
