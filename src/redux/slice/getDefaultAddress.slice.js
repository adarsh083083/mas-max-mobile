import {createSlice} from '@reduxjs/toolkit';
import {getAddressListThunk} from '../asyncThunk/getAddressAsyncThunk/getAddressListThunk';
import {THUNK_STATUS} from '../constants/redux.constant';

let initialState = {
  data: [],
  isLoading: false,
  isError: false,
  status: null,
};

const getDefaultAddressSlice = createSlice({
  name: 'getDefaultAddressSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        getAddressListThunk.getDefaultAddressByIdThunk.pending,
        (state, action) => {
          state.status = THUNK_STATUS.LOADING;
          state.isLoading = true;
          state.isError = false;
        },
      )
      .addCase(
        getAddressListThunk.getDefaultAddressByIdThunk.fulfilled,
        (state, action) => {
          state.status = THUNK_STATUS.SUCCESS;
          state.data = action.payload?.data;
          state.isLoading = false;
          state.isError = false;
        },
      )
      .addCase(
        getAddressListThunk.getDefaultAddressByIdThunk.rejected,
        (state, action) => {
          state.status = THUNK_STATUS.FAILED;
          state.isLoading = false;
          state.isError = true;
        },
      );
  },
});
export const getDefaultAddress = state => state.status;
export default getDefaultAddressSlice.reducer;
