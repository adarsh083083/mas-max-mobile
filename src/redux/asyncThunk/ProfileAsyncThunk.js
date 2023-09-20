import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../constants/redux.constant';
import {UserProfileService} from '../services/profile.service/profile.service';

export class UserprofileAsyncThunk {
  constructor() {
    this.userProfileService = new UserProfileService();
  }

  updateUserProfile = createAsyncThunk(
    ASYNC_ROUTES.UPDATE_USER_PROFILE,
    async (payload, {rejectWithValue}) => {
      console.log(payload, 'here is the payload ');
      try {
        const response = await this.userProfileService.updateUserProfileService(
          payload,
        );

        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
}

export const userProfileAsyncThunk = new UserprofileAsyncThunk();
