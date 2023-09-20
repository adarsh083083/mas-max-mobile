import {createSlice} from '@reduxjs/toolkit';
import {getAddressListThunk} from '../asyncThunk/getAddressAsyncThunk/getAddressListThunk';
import {THUNK_STATUS} from '../constants/redux.constant';

let initialState = {
  getAddress: [],
  isLoading: false,
  isError: false,
  status: null,
};

const getAddressSlice = createSlice({
  name: 'getAddressSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        getAddressListThunk.getAddressListThunk.pending,
        (state, action) => {
          state.status = THUNK_STATUS.LOADING;
          state.isLoading = true;
          state.isError = false;
        },
      )
      .addCase(
        getAddressListThunk.getAddressListThunk.fulfilled,
        (state, action) => {
          state.status = THUNK_STATUS.SUCCESS;
          state.getAddress = action.payload?.data;
          state.isLoading = false;
          state.isError = false;
        },
      )
      .addCase(
        getAddressListThunk.getAddressListThunk.rejected,
        (state, action) => {
          state.status = THUNK_STATUS.FAILED;
          state.isLoading = false;
          state.isError = true;
        },
      );
  },
});
export const getAddressList = state => state.status;
export default getAddressSlice.reducer;
