import {ROUTES} from '../../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddVehicle,
  BottomTabs,
  EditProfile,
  Login,
  OrderPlaced,
  OrderReportDetail,
  OrderReports,
  OrderSummary,
  ServiceDetails,
  TimeSlots,
  Vehicles,
} from '../../screens';
import SearchServiceNotFound from '../../screens/dashboard/searchService/SearchServiceNotFount';
import SearchServiceProvider from '../../screens/dashboard/searchService/SearchServiceProvider';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName={ROUTES.EDIT_PROFILE}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.EDIT_PROFILE} component={EditProfile} />
      {/* <Stack.Screen name={ROUTES.SEARCH_ADDRESS} component={SearchAddress} /> */}
      <Stack.Screen name={ROUTES.ADD_VEHICLE} component={AddVehicle} />
      <Stack.Screen name={ROUTES.HOME} component={BottomTabs} />
      <Stack.Screen name={ROUTES.VEHICLES} component={Vehicles} />
      <Stack.Screen name={ROUTES.ORDER_REPORTS} component={OrderReports} />
      <Stack.Screen name={ROUTES.SERVICE_DETAILS} component={ServiceDetails} />
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
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
export default MainNavigation;
