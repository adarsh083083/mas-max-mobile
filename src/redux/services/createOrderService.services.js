import Axios from 'axios';
import {
  METHODS,
  SERVICE_ROUTES,
  replaceUrl,
} from '../constants/services.constant';

export class ServiceOrderService {
  CreateServiceOrderServices = payload => {
    return new Promise((resolve, reject) => {
      let config = {
        url: SERVICE_ROUTES.CREATE_SERVICES_ORDER,
        method: METHODS.POST,
        data: payload.modifyData,
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
  getOrderListServices = ({id}) => {
    return new Promise((resolve, reject) => {
      let config = {
        url: replaceUrl(SERVICE_ROUTES.GET_ORDER_LIST, {id}),
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
  getOrderDetailsServices = data => {
    const {id, ...params} = data;

    return new Promise((resolve, reject) => {
      let config = {
        url: replaceUrl(SERVICE_ROUTES.GET_ORDER_DETAILS_BY_ID, {id}),
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
  };

  changeOrderStatusServices = payload => {
    const {updatedOrderStatus} = payload;

    return new Promise((resolve, reject) => {
      let config = {
        url: SERVICE_ROUTES.CHANGE_ORDER_STATUS,
        method: METHODS.POST,
        data: updatedOrderStatus,
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
