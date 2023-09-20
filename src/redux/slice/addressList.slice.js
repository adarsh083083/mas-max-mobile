import {createSlice} from '@reduxjs/toolkit';
import {THUNK_STATUS} from '../constants/redux.constant';
import {addAddressThunk} from '../asyncThunk/AddAddressAsyncThunk/addAddressAsyncThunk';

let initialState = {
  data: [],
  isLoading: false,
  isError: false,
  status: null,
};

const addressListSlice = createSlice({
  name: 'AddressList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        addAddressThunk.updateAddressByIdThunk.pending,
        (state, action) => {
          state.status = THUNK_STATUS.LOADING;
          state.isLoading = true;
          state.isError = false;
        },
      )
      .addCase(
        addAddressThunk.updateAddressByIdThunk.fulfilled,
        (state, action) => {
          state.status = THUNK_STATUS.SUCCESS;
          state.data = action.payload?.data;
          state.isLoading = false;
          state.isError = false;
        },
      )
      .addCase(
        addAddressThunk.updateAddressByIdThunk.rejected,
        (state, action) => {
          state.status = THUNK_STATUS.FAILED;
          state.isLoading = false;
          state.isError = true;
        },
      );
  },
});
export const AddressList = state => state.status;
export default addressListSlice.reducer;
