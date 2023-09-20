import {combineReducers} from '@reduxjs/toolkit';
import googleSignInSlice from './auth.slice';
import getVehicleListSlice from './getVehicleSlice/getVehicleList.slice';
import getAddressSlice from './getAddress.slice';
import getDefaultAddressSlice from './getDefaultAddress.slice';
import addressListSlice from './addressList.slice';
import orderReportSlice from './orderReport.slice';

export default combineReducers({
  googleSignIn: googleSignInSlice,
  getVehicle: getVehicleListSlice,
  getAddressList: getAddressSlice,
  getDefaultAddress: getDefaultAddressSlice,
  AddressList: addressListSlice,
  OrderReports: orderReportSlice,
});
