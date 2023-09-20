import Axios from 'axios';
import {
  METHODS,
  SERVICE_ROUTES,
  replaceUrl,
} from '../../constants/services.constant';
import {replace} from 'lodash';

export function getVehicleService(params) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_VEHICLES,
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
export function deleteVehicleByIdService({id}) {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.DELETE_VEHICLE_BY_ID, {id}),
      method: METHODS.DELETE,
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

export function getVehicleByIdService({id}) {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.GET_VEHICLE_BY_ID, {id}),
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
