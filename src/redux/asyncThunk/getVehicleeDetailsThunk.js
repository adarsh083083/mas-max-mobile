import {createAsyncThunk} from '@reduxjs/toolkit';
import {VehicleDetailsService} from '../services/vehicleDetails.services';
import {ASYNC_ROUTES} from '../constants/redux.constant';

export class VehicleDetailsAsyncThunk {
  constructor() {
    this.serviceDetailsServices = new VehicleDetailsService();
  }
  getVehicleDetailsById = createAsyncThunk(
    ASYNC_ROUTES.GET_VEHICLE_DETAILS_BY_ID,
    async ({id}, {rejectWithValue}) => {
      try {
        const response =
          await this.serviceDetailsServices.getVehicleDetailsServices({id});
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
}

export const vehicleDetailsAsyncThunk = new VehicleDetailsAsyncThunk();
