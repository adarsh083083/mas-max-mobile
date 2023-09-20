import {createSlice} from '@reduxjs/toolkit';
import {getVehicleAsyncThunk} from '../../asyncThunk/getVehiclesAsyncThunk/getVehicleAsyncThunk';
import {THUNK_STATUS} from '../../constants';

let initialState = {
  data: [],
  isLoading: false,
  isError: false,
  vehicleListStatus: null,
};

const getVehicleListSlice = createSlice({
  name: 'getVehicleList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getVehicleAsyncThunk.pending, (state, action) => {
        state.vehicleListStatus = THUNK_STATUS.LOADING;
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getVehicleAsyncThunk.fulfilled, (state, action) => {
        state.vehicleListStatus = THUNK_STATUS.SUCCESS;
        state.data = action.payload?.data?.data;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getVehicleAsyncThunk.rejected, (state, action) => {
        state.vehicleListStatus = THUNK_STATUS.FAILED;
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export const getVehicleListState = state => state.vehicleListStatus;
export default getVehicleListSlice.reducer;
