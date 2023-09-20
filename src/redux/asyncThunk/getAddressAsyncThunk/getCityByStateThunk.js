import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../../constants/redux.constant';
import {GetCityServices} from '../../services/getCity.service/getCity.services';

// getCity
export const getCityByStateThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_CITY,
  async ({state_id, pageData}, {rejectWithValue}) => {
    try {
      const response = await GetCityServices(state_id, pageData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
