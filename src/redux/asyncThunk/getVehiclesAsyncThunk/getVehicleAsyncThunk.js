import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../../constants';
import {
  deleteVehicleByIdService,
  getVehicleByIdService,
  getVehicleService,
  updateVehicleByIdService,
} from '../../services/getVehicles.service/getVehicle.service';

export const getVehicleAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_VEHICLE_LIST,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getVehicleService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const deleteVehicleByIdThunk = createAsyncThunk(
  ASYNC_ROUTES.DELETE_VEHICLE_BY_ID,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await deleteVehicleByIdService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const UpdateVehicleByIdThunk = createAsyncThunk(
  ASYNC_ROUTES.UPDATE_VEHICLE_BY_ID,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await updateVehicleByIdService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getVehicleByIdThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_VEHICLE_BY_ID,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getVehicleByIdService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
