import {createSlice} from '@reduxjs/toolkit';
import {THUNK_STATUS} from '../constants/redux.constant';
import {serviceOrderAsyncThunk} from '../asyncThunk/orderAsyncThunk';

let initialState = {
  data: [],
  isLoading: false,
  isError: false,
  status: null,
};

const getOrderReports = createSlice({
  name: 'getOrderReport',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(serviceOrderAsyncThunk.getOrderList.pending, (state, action) => {
        state.status = THUNK_STATUS.LOADING;
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        serviceOrderAsyncThunk.getOrderList.rejected,
        (state, action) => {
          state.status = THUNK_STATUS.SUCCESS;
          state.data = action.payload?.data;
          state.isLoading = false;
          state.isError = false;
        },
      )
      .addCase(
        serviceOrderAsyncThunk.getOrderList.fulfilled,
        (state, action) => {
          state.status = THUNK_STATUS.FAILED;
          state.isLoading = false;
          state.isError = true;
        },
      );
  },
});
export const OrderReport = state => state.status;
export default getOrderReports.reducer;
