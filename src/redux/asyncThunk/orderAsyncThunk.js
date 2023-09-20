import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../constants/redux.constant';
import {ServiceOrderService} from '../services/createOrderService.services';

export class ServiceOrderAsyncThunk {
  constructor() {
    this.serviceOrderServices = new ServiceOrderService();
  }
  CreateServiceOrder = createAsyncThunk(
    ASYNC_ROUTES.CREATE_SERVICES_ORDER,
    async (payload, {rejectWithValue}) => {
      try {
        const response =
          await this.serviceOrderServices.CreateServiceOrderServices(payload);
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  getOrderList = createAsyncThunk(
    ASYNC_ROUTES.GET_ORDER_LIST,
    async ({id}, {rejectWithValue}) => {
      try {
        const response = await this.serviceOrderServices.getOrderListServices({
          id,
        });
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  getOrderDetailsById = createAsyncThunk(
    ASYNC_ROUTES.GET_ORDER_DETAILS_BY_ID,
    async (payload, {rejectWithValue}) => {
      try {
        const response =
          await this.serviceOrderServices.getOrderDetailsServices(payload);
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  changeOrderStatus = createAsyncThunk(
    ASYNC_ROUTES.CHANGE_ORDER_STATUS,
    async (payload, {rejectWithValue}) => {
      console.log(payload, 'orderupdate status');
      try {
        const response =
          await this.serviceOrderServices.changeOrderStatusServices(payload);
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
}

export const serviceOrderAsyncThunk = new ServiceOrderAsyncThunk();
