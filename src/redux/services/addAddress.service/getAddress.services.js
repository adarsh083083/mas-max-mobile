import Axios from 'axios';
import {
  METHODS,
  SERVICE_ROUTES,
  replaceUrl,
} from '../../constants/services.constant';

export class GetAddressService {
  getAddressServices = () => {
    return new Promise((resolve, reject) => {
      let config = {
        url: SERVICE_ROUTES.GET_ADDRESS_LIST,
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

  deleteAddressByIdServices = ({id}) => {
    return new Promise((resolve, reject) => {
      let config = {
        url: replaceUrl(SERVICE_ROUTES.DELETE_ADDRESS_BY_ID, {id}),
        method: METHODS.DELETE,
        id,
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
  setDefaultAddressByIdServices = data => {
    const {id} = data;
    return new Promise((resolve, reject) => {
      let config = {
        url: replaceUrl(SERVICE_ROUTES.SET_DEFAULT_ADDRESS_BY_ID, {id}),
        method: METHODS.PATCH,
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
  getDefaultAddressByIdServices = () => {
    return new Promise((resolve, reject) => {
      let config = {
        url: SERVICE_ROUTES.GET_DEFAULT_ADDRESS_BY_ID,
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
}
