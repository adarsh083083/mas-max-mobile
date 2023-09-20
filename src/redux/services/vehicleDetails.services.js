import Axios from 'axios';
import {
  METHODS,
  SERVICE_ROUTES,
  replaceUrl,
} from '../constants/services.constant';

export class VehicleDetailsService {
  getVehicleDetailsServices = ({id}) => {
    return new Promise((resolve, reject) => {
      let config = {
        url: replaceUrl(SERVICE_ROUTES.GET_VEHICLE_DETAILS_BY_ID, {id}),
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
