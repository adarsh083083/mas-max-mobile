import Axios from 'axios';
import {METHODS, SERVICE_ROUTES} from '../../constants/services.constant';

export class UserProfileService {
  updateUserProfileService = data => {
    return new Promise((resolve, reject) => {
      let config = {
        url: SERVICE_ROUTES.UPDATE_USER_PROFILE,
        method: METHODS.PATCH,
        headers: {'Content-Type': 'multipart/form-data'},
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
}
