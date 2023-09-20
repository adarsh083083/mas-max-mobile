import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import {COLORS, IMAGES, ROUTES} from '../../constants/index';
import {
  EditProfile,
  Home,
  OrderReports,
  Profile,
  Vehicles,
} from '../../screens/index';
import styles from './styles';
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={ROUTES.HOME}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.ORANGE,
          tabBarInactiveTintColor: COLORS.WHITE_SECONDARY,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: COLORS.ORANGE,
            height: 80,
          },
        }}>
        {/****************** Home TabBar ******************/}
        <Tab.Screen
          name={ROUTES.HOME}
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={[
                    styles.tabViewStyle,
                    {backgroundColor: focused ? COLORS.WHITE : null},
                  ]}>
                  <Image
                    style={[
                      styles.tabHomeImageStyle,
                      {tintColor: focused ? COLORS.ORANGE : COLORS.WHITE},
                    ]}
                    source={IMAGES.home}
                  />
                </View>
              );
            },
          }}
        />
        {/****************** Vehicle TabBar ******************/}
        <Tab.Screen
          name={ROUTES.VEHICLES}
          component={Vehicles}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={[
                    styles.tabViewStyle,
                    {backgroundColor: focused ? COLORS.WHITE : null},
                  ]}>
                  <Image
                    resizeMode="contain"
                    style={[
                      styles.tabImageStyle,
                      {tintColor: focused ? COLORS.ORANGE : COLORS.WHITE},
                    ]}
                    source={IMAGES.wheel}
                  />
                </View>
              );
            },
          }}
        />
        {/****************** Reports TabBar ******************/}
        <Tab.Screen
          name={ROUTES.ORDER_REPORTS}
          component={OrderReports}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={[
                    styles.tabViewStyle,
                    {backgroundColor: focused ? COLORS.WHITE : null},
                  ]}>
                  <Image
                    style={[
                      styles.reportImageStyle,
                      {tintColor: focused ? COLORS.ORANGE : COLORS.WHITE},
                    ]}
                    source={IMAGES.reports}
                  />
                </View>
              );
            },
          }}
        />

        {/****************** Profile TabBar ******************/}
        <Tab.Screen
          name={ROUTES.PROFILE}
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={[
                    styles.tabViewStyle,
                    {backgroundColor: focused ? COLORS.WHITE : null},
                  ]}>
                  <Image
                    style={[
                      styles.tabImageStyle,
                      {tintColor: focused ? COLORS.ORANGE : COLORS.WHITE},
                    ]}
                    source={IMAGES.profile}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};
export default BottomTabs;
