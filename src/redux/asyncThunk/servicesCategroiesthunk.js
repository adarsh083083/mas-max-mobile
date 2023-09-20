import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../constants/redux.constant';
import {ServiceCategoriesService} from '../services/serviceCategories.services';
import {METHODS, SERVICE_ROUTES} from '../constants/services.constant';

export class ServicesCategoriesThunk {
  constructor() {
    this.serviceCategoriesServices = new ServiceCategoriesService();
  }
  getServiceCategories = createAsyncThunk(
    ASYNC_ROUTES.GET_SERVICE_CATEGORIES,
    async (payload, {rejectWithValue}) => {
      try {
        const response =
          await this.serviceCategoriesServices.getServiceCategoriesService(
            payload,
          );

        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  getCategoriesList = createAsyncThunk(
    ASYNC_ROUTES.GET_CATEGORIES_LIST,
    async ({id}, {rejectWithValue}) => {
      try {
        const response =
          await this.serviceCategoriesServices.getCategoriesListService({
            id,
          });
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  getServiceDetails = createAsyncThunk(
    ASYNC_ROUTES.GET_SERVICE_DETAILS_BY_ID,
    async ({id}, {rejectWithValue}) => {
      try {
        const response =
          await this.serviceCategoriesServices.getServiceDetailsService({id});
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  getServiceListThunk = createAsyncThunk(
    ASYNC_ROUTES.GET_SERVICE_LIST,
    async (payload, {rejectWithValue}) => {
      try {
        const response = await this.serviceCategoriesServices.GetAllServiceList(
          payload,
        );
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
  getServiceDetailsThunk = createAsyncThunk(
    ASYNC_ROUTES.GET_SERVICE_DETAILS,
    async (payload, {rejectWithValue}) => {
      try {
        const response = await this.serviceCategoriesServices.GetServiceDetails(
          payload,
        );
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
}

export const serviceCategoriesThunk = new ServicesCategoriesThunk();
