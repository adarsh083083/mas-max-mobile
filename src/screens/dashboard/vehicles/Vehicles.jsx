import {
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import ItemVehicles from './ItemVehicles';
import {COLORS, IMAGES, ROUTES} from '../../../constants';
import styles from './styles';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
  useTheme,
} from '@react-navigation/native';
import HeaderAtom from '../../../components/Header/Header/Header';
import SearchInput from '../../../components/atoms/searchInput/searchInput';
import {useDispatch, useSelector} from 'react-redux';
import {getVehicleAsyncThunk} from '../../../redux/asyncThunk/getVehiclesAsyncThunk/getVehicleAsyncThunk';
import ItemSkelaton from './ItemSkelaton';
import {Text} from 'react-native';

const Vehicles = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const {data} = useSelector(state => state?.getVehicle);
  const theme = useTheme();
  const {colors} = theme;
  useFocusEffect(
    React.useCallback(() => {
      getVehicleList();
    }, []),
  );

  const [pageData, setPageData] = useState({
    join: ['vehicle_brand', 'vehicle_model'],
  });

  const getVehicleList = () => {
    setLoading(true);
    dispatch(getVehicleAsyncThunk(pageData));
    setLoading(false);
  };
  useFocusEffect(
    useCallback(() => {
      getVehicleList();
    }, [data]),
  );

  const skeletonData = Array.from({length: 6}); // create an array of length 9

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {
        <HeaderAtom
          backImage={IMAGES.arrow}
          imageBack={IMAGES.arrow}
          title={'Vehicle list'}
          onPress={() => navigation.goBack()}
        />
      }
      <View
        style={{
          ...styles.flexViewFab,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <SearchInput
          source={IMAGES.search}
          placeholder="Search Vehicles ..."
          underlineColor="transparent"
          term={search}
          style={{width: '85%'}}
          placeholderTextColor={COLORS.PRIMARY_BLACK}
          onTermChange={txt => {
            setSearch(txt);
            // filterData(txt);
          }}
          onTermSubmit={txt => {
            // filterData(txt);
          }}
          theme={{
            ...theme,
            colors: {...colors, primary: 'transparent'},
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ROUTES.ADD_VEHICLE);
          }}
          style={styles.fabContainer}>
          <Image style={styles.fabImageStyle} source={IMAGES.fab} />
        </TouchableOpacity>
      </View>
      {data?.length ? (
        <View style={styles.container}>
          {loading ? (
            <FlatList
              contentContainerStyle={styles.flatListStyle}
              data={skeletonData} // use the skeleton data instead of searchList
              renderItem={() => <ItemSkelaton />}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <FlatList
              contentContainerStyle={styles.flatListStyle}
              data={data}
              renderItem={({item}) => <ItemVehicles item={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              getVehicleList={getVehicleList}
            />
          )}
        </View>
      ) : (
        <View style={styles.vehicleContainer}>
          <Image style={styles.racImage} source={IMAGES.rac} />
          <Text style={styles.textRac}>Please Add your vehicle !</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Vehicles;
