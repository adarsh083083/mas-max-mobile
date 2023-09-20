import {ASYNC_ROUTES} from '../../constants/redux.constant';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {GetStateServices} from '../../services/getState.service/getState.services';

export const getStateAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_STATE,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await GetStateServices(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
