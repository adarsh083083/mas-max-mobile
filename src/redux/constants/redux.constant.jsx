//============Async Routes ============================
export const ASYNC_ROUTES = {
  GOOGLE_SIGN_IN: 'googleSignIn',
  USER_LOG_OUT: 'user_logout',
  GET_CITY: 'getCity',
  GET_STATE: 'getState',

  // =================profile routes===================
  GET_USER_PROFILE: 'profile/getuserProfile',
  UPDATE_USER_PROFILE: 'profile/UpdateProfile',
  GET_USER_STATE: 'userState',

  //==================Add vehicle routes===============
  GET_VEHICLE_TYPE: 'getVehicleType',
  GET_VEHICLE_DETAILS: 'getVehicleDetails',
  GET_VEHICLE_LIST: 'getAllVehicleList',
  GET_VEHICLES: 'getVehicle',
  GET_VEHICLE_BRAND: 'getVehicleBrand',
  ADD_VEHICLE: 'addVehicle',
  GET_VEHICLE_MODAL: 'getVehicleModal',
  DELETE_VEHICLE_BY_ID: 'deleteVehicleById',
  UPDATE_VEHICLE_BY_ID: 'updateVehicleById',
  GET_VEHICLE_BY_ID: 'getVehicleById',
  //==============addAddress===========================
  ADD_ADDRESS: 'address/AddNewAddress',
  UPDATE_ADDRESS: 'UpdateAddress',
  GET_ADDRESS_LIST: 'getAddressList',
  GET_ADDRESS_BY_ID: 'getAddressById',
  UPDATE_ADDRESS_BY_ID: 'updateAddressById',
  DELETE_ADDRESS_BY_ID: 'deleteAddressById',
  SET_DEFAULT_ADDRESS_BY_ID: 'setDefaultAddressById',
  GET_DEFAULT_ADDRESS_BY_ID: 'getDefaultAddressById',

  //==================GET_SERVICE_DETAILS==============
  GET_SERVICE_DETAILS_BY_ID: 'getServiceDetailsById',
  GET_SERVICE_DETAILS: 'getserviceDetails',
  GET_VEHICLE_DETAILS_BY_ID: 'getVehicleDetailsById',
  // GET_SERVICE_CATEGORIES: 'getServiceCategories',
  // GET_ALL_SERVICE_CATERGORIES: 'getAllServiceCategories',
  GET_SERVICE_CATEGORIES: 'getServiceDetails',
  GET_CATEGORIES_LIST: 'getCategoriesList',
  GET_SERVICE_LIST: 'getServiceList',

  //====================ORDER========================
  CREATE_SERVICES_ORDER: 'createServiceOrder',
  GET_ORDER_LIST: 'getOrderList',
  GET_ORDER_DETAILS_BY_ID: 'getOrderDetailsById',
  CHANGE_ORDER_STATUS: 'changeOrderStatus',
};

//====================Thunk Status=====================
export const THUNK_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed',
};
