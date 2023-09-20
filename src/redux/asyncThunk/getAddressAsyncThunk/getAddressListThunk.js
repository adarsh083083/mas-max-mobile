import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../../constants/redux.constant';
import {GetAddressService} from '../../services/addAddress.service/getAddress.services';

export class GetAddressAsyncThunk {
  constructor() {
    this.getAddressServices = new GetAddressService();
  }
  getAddressListThunk = createAsyncThunk(
    ASYNC_ROUTES.GET_ADDRESS_LIST,
    async rejectWithValue => {
      try {
        const response = await this.getAddressServices.getAddressServices();
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  getAddressByIdThunk = createAsyncThunk(
    ASYNC_ROUTES.GET_ADDRESS_BY_ID,
    async ({id}, {rejectWithValue}) => {
      try {
        const response = await this.getAddressServices.getAddressByIdServices({
          id,
        });
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  deleteAddressByIdThunk = createAsyncThunk(
    ASYNC_ROUTES.DELETE_ADDRESS_BY_ID,
    async ({id}, {rejectWithValue}) => {
      try {
        const response =
          await this.getAddressServices.deleteAddressByIdServices({id});
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  setDefaultAddressByIdThunk = createAsyncThunk(
    ASYNC_ROUTES.SET_DEFAULT_ADDRESS_BY_ID,
    async (payload, {rejectWithValue}) => {
      try {
        const response =
          await this.getAddressServices.setDefaultAddressByIdServices(payload);
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  getDefaultAddressByIdThunk = createAsyncThunk(
    ASYNC_ROUTES.GET_DEFAULT_ADDRESS_BY_ID,
    async (payload, {rejectWithValue}) => {
      try {
        const response =
          await this.getAddressServices.getDefaultAddressByIdServices();
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
}

export const getAddressListThunk = new GetAddressAsyncThunk();
