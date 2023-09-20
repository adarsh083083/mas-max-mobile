import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../../constants/redux.constant';
import {AddressService} from '../../services/addAddress.service/addAddress.services';

export class AddressAsyncThunk {
  constructor() {
    this.AddressService = new AddressService();
  }

  addAddressThunk = createAsyncThunk(
    ASYNC_ROUTES.ADD_ADDRESS,
    async (payload, {rejectWithValue}) => {
      try {
        const response = await this.AddressService.addAddressService(payload);
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );

  getAddressByIdThunk = createAsyncThunk(
    ASYNC_ROUTES.GET_ADDRESS_BY_ID,
    async (id, {rejectWithValue}) => {
      try {
        const response = await this.AddressService.getAddressByIdService(id);
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  getDefaultAddressThunk = createAsyncThunk(
    ASYNC_ROUTES.GET_ADDRESS,
    async (payload, {rejectWithValue}) => {
      try {
        const response = await this.AddressService.updateAddressService(
          payload,
        );
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  updateAddressByIdThunk = createAsyncThunk(
    ASYNC_ROUTES.UPDATE_ADDRESS_BY_ID,
    async (payload, {rejectWithValue}) => {
      try {
        const response = await this.AddressService.UpdateAddressByIdService({
          payload,
        });
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
}

export const addAddressThunk = new AddressAsyncThunk();
