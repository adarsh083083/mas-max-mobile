//==================Here is the SERVICE ROUTES=======================
export const SERVICE_ROUTES = {
  //AUTH
  GOOGLE_SIGN_IN: '/oauth/google/login',
  GET_USER_PROFILE: '/profile',
  USER_LOG_OUT: '/oauth/logout',
  UPDATE_USER_PROFILE: '/profile/',
  GET_STATE: '/shared/address/states',
  GET_CITY: '/shared/address/states/:state_id/cities',
  //Add Vehicles
  GET_VEHICLE_TYPE: '/shared/vehicle/types',
  GET_VEHICLE_BRAND: '/shared/vehicle/brands',
  ADD_VEHICLES: '/vehicles',
  GET_VEHICLES: '/vehicles',
  GET_VEHICLES_MODAL: 'shared/vehicle/brands/:brand_id/models',
  GET_VEHICLES_DETAILS: 'vehicles/:id/?join=vehicle_brand&join=vehicle_model',
  DELETE_VEHICLE_BY_ID: '/vehicles/:id',
  UPDATE_VEHICLE_BY_ID: '/vehicles/:id',
  GET_VEHICLE_BY_ID: '/vehicles/:id',
  //==================AddAddress==================================
  ADD_ADDRESS: '/address',
  UPDATE_ADDRESS: '/address',
  GET_ADDRESS_LIST: '/address?filter=is_default||$eq||false',
  GET_ADDRESS_BY_ID: '/address/:id',
  UPDATE_ADDRESS_BY_ID: '/address/:id',
  DELETE_ADDRESS_BY_ID: '/address/:id',
  SET_DEFAULT_ADDRESS_BY_ID: '/address/:id',
  GET_DEFAULT_ADDRESS_BY_ID: '/address?filter=is_default||$eq||true',
  //==================GetServiceCategories========================
  // GET_SERVICE_CATEGORIES: '/services',
  GET_ALL_SERVICE_CATERGORIES:
    '/service-categories?filter=parent_id||$isnull&join=children',
  GET_SERVICE_CATEGORIES:
    '/service-categories?filter=parent_id||$isnull&join=children',

  GET_CATEGORIES_LIST: '/services?filter=service_category_id||$eq||:id',
  //==================Get ServiceDetails==========================
  GET_SERVICE_DETAILS_BY_ID: '/services/:id/',
  GET_VEHICLE_DETAILS_BY_ID: '/vehicles/:id',
  GET_SERVICE_LIST: '/services',

  //===================ORDER===============
  CREATE_SERVICES_ORDER: '/order',
  GET_ORDER_LIST: '/order?filter=user_id||$eq||:id&join=order_items.service',
  GET_ORDER_DETAILS_BY_ID: '/order/:id',
  CHANGE_ORDER_STATUS: '/transaction',
};
//===================Here is the Methods==============================
export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
};
// ==================Here Is The  ReplaceUrl code======================
export const replaceUrl = (url, data) => {
  var regex = new RegExp(':(' + Object.keys(data).join('|') + ')', 'g');
  return url?.replace(regex, (m, $1) => data[$1] || m);
};
