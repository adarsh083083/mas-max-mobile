import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../../constants/redux.constant';
import {VehicleService} from '../../services/addVehicle.service/vehicleType.services';

export class VehicleTypeAsyncThunk {
  constructor() {
    this.vehicleService = new VehicleService();
  }
  getVehicleTypeAsyncThunk = createAsyncThunk(
    ASYNC_ROUTES.GET_VEHICLE_TYPE,
    async (payload, {rejectWithValue}) => {
      try {
        const response = await this.vehicleService.getVehicleTypeService(
          payload,
        );
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );

  getVehicleBrandAsyncThunk = createAsyncThunk(
    ASYNC_ROUTES.GET_VEHICLE_BRAND,
    async (payload, {rejectWithValue}) => {
      try {
        const response = await this.vehicleService.getVehicleBrandService(
          payload,
        );
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );

  addVehicleAsyncThunk = createAsyncThunk(
    ASYNC_ROUTES.ADD_VEHICLE,
    async (payload, {rejectWithValue}) => {
      try {
        const response = await this.vehicleService.addVehicleService(payload);
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );

  getModalByIdAsyncThunk = createAsyncThunk(
    ASYNC_ROUTES.GET_VEHICLE_MODAL,
    async (payload, {rejectWithValue}) => {
      try {
        const response = await this.vehicleService.getVehicleModalService(
          payload,
        );
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  updateVehicleAsyncThunk = createAsyncThunk(
    ASYNC_ROUTES.UPDATE_VEHICLE_BY_ID,
    async (payload, {rejectWithValue}) => {
      try {
        const response = await this.vehicleService.updateVehicleService(
          payload,
        );
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );

  getVehicleDetailsThunk = createAsyncThunk(
    ASYNC_ROUTES.GET_VEHICLE_DETAILS,
    async (payload, {rejectWithValue}) => {
      try {
        const response = await this.vehicleService.getVehicleDetailsService(
          payload,
        );
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
}

export const getVehicleThunk = new VehicleTypeAsyncThunk();
