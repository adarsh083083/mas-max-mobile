import Axios from 'axios';
import {
  METHODS,
  replaceUrl,
  SERVICE_ROUTES,
} from '../../constants/services.constant';

export class VehicleService {
  getVehicleTypeService = () => {
    return new Promise((resolve, reject) => {
      let config = {
        url: SERVICE_ROUTES.GET_VEHICLE_TYPE,
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

  getVehicleBrandService = () => {
    return new Promise((resolve, reject) => {
      let config = {
        url: SERVICE_ROUTES.GET_VEHICLE_BRAND,
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
  addVehicleService = data => {
    return new Promise((resolve, reject) => {
      let config = {
        url: SERVICE_ROUTES.ADD_VEHICLES,
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
  getVehicleModalService = data => {
    const {brand_id} = data;
    return new Promise((resolve, reject) => {
      let config = {
        url: replaceUrl(SERVICE_ROUTES.GET_VEHICLES_MODAL, {brand_id}),
        method: METHODS.GET,
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
  updateVehicleService = data => {
    const {id, vehicleInfo} = data;
    return new Promise((resolve, reject) => {
      let config = {
        url: replaceUrl(SERVICE_ROUTES.UPDATE_VEHICLE_BY_ID, {id}),
        method: METHODS.PATCH,
        data: vehicleInfo,
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

  getVehicleDetailsService = data => {
    const {id, vehiclePageData} = data;
    return new Promise((resolve, reject) => {
      let config = {
        url: replaceUrl(SERVICE_ROUTES.GET_VEHICLES_DETAILS, {id}),
        method: METHODS.GET,
        params: vehiclePageData,
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
