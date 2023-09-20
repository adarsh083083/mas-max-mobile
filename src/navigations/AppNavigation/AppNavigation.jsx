import {ROUTES} from '../../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchServiceProvider from '../../screens/dashboard/searchService/SearchServiceProvider';
import {NavigationContainer} from '@react-navigation/native';
import {
  AddAddressList,
  AddVehicle,
  BottomTabs,
  CategroiesList,
  ConfirmLocation,
  EditProfile,
  GetLocation,
  Login,
  OrderPlaced,
  OrderReportDetail,
  OrderReports,
  OrderSummary,
  ServiceDetails,
  TimeSlots,
  UpdateVehicle,
  Vehicles,
} from '../../screens';
import AddAddress from '../../screens/auth/profile/AddAddress/AddAddress';
import SearchServiceNotFound from '../../screens/dashboard/searchService/SearchServiceNotFount';
import SearchAddress from '../../screens/auth/profile/SearchAddress/SearchAddress';
import {Provider as PaperProvider} from 'react-native-paper';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <PaperProvider>
      <Stack.Navigator
        initialRouteName={ROUTES.HOME}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.HOME} component={BottomTabs} />
        <Stack.Screen
          name={ROUTES.SERVICE_DETAILS}
          component={ServiceDetails}
        />
        <Stack.Screen name={ROUTES.VEHICLES} component={Vehicles} />

        <Stack.Screen name={ROUTES.ORDER_REPORTS} component={OrderReports} />
        <Stack.Screen
          name={ROUTES.ORDER_REPORT_DETAIL}
          component={OrderReportDetail}
        />
        <Stack.Screen name={ROUTES.ORDER_SUMMARY} component={OrderSummary} />
        <Stack.Screen
          name={ROUTES.SEARCH_SERVICE_PROVIIDER}
          component={SearchServiceProvider}
        />
        <Stack.Screen
          name={ROUTES.SEARCH_SERVICE_NOT_FOUND}
          component={SearchServiceNotFound}
        />
        <Stack.Screen name={ROUTES.ORDER_PLACED} component={OrderPlaced} />
        <Stack.Screen name={ROUTES.TIME_SLOTS} component={TimeSlots} />
        <Stack.Screen name={ROUTES.EDIT_PROFILE} component={EditProfile} />
        <Stack.Screen name={ROUTES.ADD_VEHICLE} component={AddVehicle} />
        <Stack.Screen name={ROUTES.ADD_ADDRESS} component={AddAddress} />
        <Stack.Screen name={ROUTES.SEARCH_ADDRESS} component={SearchAddress} />
        <Stack.Screen
          name={ROUTES.ADD_ADDRESS_LIST}
          component={AddAddressList}
        />
        <Stack.Screen name={ROUTES.GET_LOCATION} component={GetLocation} />
        <Stack.Screen
          name={ROUTES.CONFIRM_LOCATION}
          component={ConfirmLocation}
        />
        <Stack.Screen
          name={ROUTES.CATEGROIES_LIST}
          component={CategroiesList}
        />
        <Stack.Screen name={ROUTES.UPDATE_VEHICLE} component={UpdateVehicle} />
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      </Stack.Navigator>
    </PaperProvider>
  );
};
export default AppNavigation;
