import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getUserProfileService,
  googleSignInService,
  userLogoutService,
} from '../services/auth.services';
import {ASYNC_ROUTES} from '../constants/redux.constant';

export const googleSigninThunk = createAsyncThunk(
  ASYNC_ROUTES.GOOGLE_SIGN_IN,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await googleSignInService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getUserProfile = createAsyncThunk(
  ASYNC_ROUTES.GET_USER_PROFILE,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getUserProfileService(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const userLogoutThunk = createAsyncThunk(
  ASYNC_ROUTES.USER_LOG_OUT,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await userLogoutService(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// api/v1/oauth/logout
