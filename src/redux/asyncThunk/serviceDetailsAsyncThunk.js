// import {createAsyncThunk} from '@reduxjs/toolkit';
// import {ASYNC_ROUTES} from '../constants/redux.constant';
// import {ServiceDetailsService} from '../services/servicesDetails.services';

// export class ServicesDetailsAsyncThunk {
//   constructor() {
//     this.serviceDetailsServices = new ServiceDetailsService();
//   }
//   getServiceDetails = createAsyncThunk(
//     ASYNC_ROUTES.GET_SERVICE_DETAILS_BY_ID,
//     async (payload, {rejectWithValue}) => {
//       const {id} = payload;

//       try {
//         const response =
//           await this.serviceDetailsServices.getServiceDetailsServices({id});
//         return response;
//       } catch (err) {
//         return rejectWithValue(err);
//       }
//     },
//   );
//   getVehicleDetailsById = createAsyncThunk(
//     ASYNC_ROUTES.GET_VEHICLE_DETAILS_BY_ID,
//     async ({id}, {rejectWithValue}) => {
//       try {
//         const response =
//           await this.serviceDetailsServices.getVehicleDetailsServices({id});
//         return response;
//       } catch (err) {
//         return rejectWithValue(err);
//       }
//     },
//   );

//   getServiceCategoriesDetails = createAsyncThunk(
//     ASYNC_ROUTES.GET_SERVICE_DETAILS,
//     async (payload, {rejectWithValue}) => {
//       try {
//         const response =
//           await this.serviceDetailsServices.getCategoriesDetailsServices(
//             payload,
//           );
//         return response;
//       } catch (err) {
//         return rejectWithValue(err);
//       }
//     },
//   );
//   getCategoriesList = createAsyncThunk(
//     ASYNC_ROUTES.GET_CATEGORIES_LIST,
//     async ({service_id}, {rejectWithValue}) => {
//       try {
//         const response =
//           await this.serviceDetailsServices.getCategoriesListServices({
//             service_id,
//           });
//         return response;
//       } catch (err) {
//         return rejectWithValue(err);
//       }
//     },
//   );
// }

// export const serviceDetailsAsyncThunk = new ServicesDetailsAsyncThunk();
