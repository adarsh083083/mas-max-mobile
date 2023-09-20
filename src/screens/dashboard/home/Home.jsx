import {
  View,
  Image,
  SafeAreaView,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  TextInput,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './styles';
import {COLORS, IMAGES, ROUTES} from '../../../constants';
import AppButtonColored from '../../../components/Button/AppButtonColored';
import HeaderList from '../../../components/Header/HeaderList/HeaderList';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import CategoriesServicesItem from './CategoriesServicItem';
import {serviceCategoriesThunk} from '../../../redux/asyncThunk/servicesCategroiesthunk';
import {getAddressListThunk} from '../../../redux/asyncThunk/getAddressAsyncThunk/getAddressListThunk';
import axios from 'axios';
import SkelatonHomeItem from './SkelatonHomeItem';
import Swiper from 'react-native-swiper';
import {moderateScale} from 'react-native-size-matters';

const Home = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [searchList, setSearchedList] = useState(categories);
  const [refreshing, setRefreshing] = useState(false);
  const [defaultAddress, setDefaultAddress] = useState('');
  const [address, setAddress] = useState();
  const {accessToken} = useSelector(state => state.googleSignIn);
  const {data} = useSelector(state => state?.getDefaultAddress);

  const images = [
    {id: 1, image: IMAGES.banner},
    {id: 2, image: IMAGES.banner},
    {id: 3, image: IMAGES.banner},
  ];

  useFocusEffect(
    React.useCallback(() => {
      ServiceCategories();
      getDefaultAddress();
    }, []),
  );
  const ServiceCategories = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    dispatch(serviceCategoriesThunk.getServiceCategories())
      .unwrap()
      .then(res => {
        setCategories(res?.data?.data);
        setSearchedList(res.data.data);
      })
      .catch(err => {});
  };

  useEffect(() => {
    setAddress('');
  }, [address]);
  const dispatch = useDispatch();

  const getDefaultAddress = () => {
    dispatch(getAddressListThunk.getAddressListThunk())
      .unwrap()
      .then(res => {
        setDefaultAddress(res?.data);
      })
      .catch(error => {});
    dispatch(getAddressListThunk.getDefaultAddressByIdThunk())
      .unwrap()
      .then(res => {
        setDefaultAddress(res?.data);
      })
      .catch(error => {});
  };

  const [serviceList, setServiceList] = useState([]);
  const [pageData, setPageData] = useState({
    limit: 10,
    offset: 0,
    page: 1,
    q: '',
  });
  const [loading, setLoading] = useState(true);
  const serviceHandler = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(serviceCategoriesThunk.getServiceListThunk(pageData))
        .unwrap()
        .then(res => {
          setServiceList(res?.data?.data);
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
        });
    }, 500);
  };
  const flatListRef = useRef(null);

  // Function to update the height of the FlatList

  useEffect(() => {
    serviceHandler();
  }, [pageData]);

  const skeletonData = Array.from({length: 12});

  const renderItem = () => <SkelatonHomeItem />;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.ADD_ADDRESS_LIST)}>
        <HeaderList imageLocation={IMAGES.location} title={data[0]?.line1} />
      </TouchableOpacity>

      <View style={{zIndex: 999}}>
        <View style={{zIndex: 2, marginBottom: 25}}>
          <TextInput
            style={styles.textInputSearch}
            value={pageData?.q}
            onChangeText={text => setPageData({...pageData, q: text})}
            placeholder="Search Services ..."
            autoCorrect={false}
            autoCapitalize="none"
            placeholderTextColor={COLORS.PRIMARY_BLACK}
          />
          {pageData?.q !== '' && (
            <FlatList
              showsVerticalScrollIndicator={false}
              style={
                serviceList.length > 1
                  ? styles.autoCompleteStyle
                  : styles.autoCompleteDefaultStyle
              }
              data={serviceList}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(ROUTES.SERVICE_DETAILS, {id: item?.id})
                  }
                  style={styles.serviceListContainer}>
                  <View style={styles.serviceNameStyle}>
                    <Text style={styles.itemNameStyle}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          )}
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={ServiceCategories}
          />
        }>
        {/*********** View Request Services *********/}
        <View style={{height: moderateScale(200)}}>
          <Swiper
            activeDotColor={COLORS.ORANGE}
            dotStyle={{top: moderateScale(20)}}
            activeDotStyle={{top: moderateScale(20)}}>
            {images.map(item => {
              return (
                <View>
                  <Image
                    resizeMode="cover"
                    source={item.image}
                    style={{
                      width: '100%',
                      height: 180,
                    }}
                  />
                </View>
              );
            })}
          </Swiper>
        </View>

        <View style={styles.requestContainer}>
          <AppButtonColored title={'Request Services'} />
        </View>
        {/*********** View Value And Services *********/}
        {loading ? (
          <View style={styles.valueContainer}>
            <FlatList
              data={skeletonData} // use the skeleton data instead of searchList
              numColumns={3} // set numColumns to 3 for a 3x3 grid
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        ) : (
          <View style={styles.valueContainer}>
            <ScrollView>
              <FlatList
                data={searchList}
                extraData={searchList}
                renderItem={({item}) =>
                  item?.children?.length ? (
                    <View style={styles.mechanicalTextsContainer}>
                      <Text
                        numberOfLines={2}
                        style={styles.mechanicalTextStyle}>
                        {item.name}
                      </Text>
                      <FlatList
                        horizontal
                        extraData={item?.children}
                        showsHorizontalScrollIndicator={false}
                        data={item?.children}
                        renderItem={({item}) => (
                          <CategoriesServicesItem item={item} />
                        )}
                        keyExtractor={item => item._id}
                      />
                    </View>
                  ) : null
                }
                keyExtractor={item => item._id}
              />
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
