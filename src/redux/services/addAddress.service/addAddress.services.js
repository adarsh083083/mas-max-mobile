import Axios from 'axios';
import {
  SERVICE_ROUTES,
  METHODS,
  replaceUrl,
} from '../../constants/services.constant';
export class AddressService {
  addAddressService = data => {
    return new Promise((resolve, reject) => {
      let config = {
        url: SERVICE_ROUTES.UPDATE_ADDRESS,
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
  getAddressByIdService = ({id}) => {
    return new Promise((resolve, reject) => {
      let config = {
        url: replaceUrl(SERVICE_ROUTES.GET_ADDRESS_BY_ID, {id}),
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
  defaultAddressService = data => {
    return new Promise((resolve, reject) => {
      let config = {
        url: SERVICE_ROUTES.UPDATE_ADDRESS,
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
  UpdateAddressByIdService = data => {
    const id = data?.payload?.id;
    return new Promise((resolve, reject) => {
      let config = {
        url: replaceUrl(SERVICE_ROUTES.UPDATE_ADDRESS_BY_ID, {id}),
        method: METHODS.PATCH,
        data: data?.payload,
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
