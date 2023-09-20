import Axios from 'axios';
import {
  METHODS,
  SERVICE_ROUTES,
  replaceUrl,
} from '../constants/services.constant';

export class ServiceCategoriesService {
  getServiceCategoriesService = () => {
    return new Promise((resolve, reject) => {
      let config = {
        url: SERVICE_ROUTES.GET_SERVICE_CATEGORIES,
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
  getCategoriesListService = ({id}) => {
    return new Promise((resolve, reject) => {
      let config = {
        url: replaceUrl(SERVICE_ROUTES.GET_CATEGORIES_LIST, {id}),
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
  getServiceDetailsService = ({id}) => {
    return new Promise((resolve, reject) => {
      let config = {
        url: replaceUrl(SERVICE_ROUTES.GET_SERVICE_DETAILS_BY_ID, {id}),
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
  GetAllServiceList = async params => {
    let config = {
      url: SERVICE_ROUTES.GET_SERVICE_LIST,
      method: METHODS.GET,
      params,
    };
    return Axios.request(config);
  };

  GetServiceDetails = async data => {
    const {id} = data;
    let config = {
      url: replaceUrl(SERVICE_ROUTES.GET_SERVICE_DETAILS_BY_ID, {id}),
      method: METHODS.GET,
    };
    return Axios.request(config);
  };
}
