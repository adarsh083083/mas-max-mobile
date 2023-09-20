import {View, SafeAreaView, FlatList, RefreshControl} from 'react-native';
import React, {useState} from 'react';
import {COLORS, IMAGES} from '../../../constants';
import styles from './styles';
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import ItemReports from './ItemReports';
import HeaderAtom from '../../../components/Header/Header/Header';
import SearchInput from '../../../components/atoms/searchInput/searchInput';
import {serviceOrderAsyncThunk} from '../../../redux/asyncThunk/orderAsyncThunk';
import {useDispatch, useSelector} from 'react-redux';
import ItemSkelaton from './ItemSkelaton';
import {Image} from 'react-native';
import {Text} from 'react-native';

let navigation = '';
const OrderReports = () => {
  const {userProfileInfo} = useSelector(state => state.googleSignIn);
  const data = useSelector(state => state?.orderReports);
  const id = userProfileInfo?.id;
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      getOrderList();
    }, []),
  );
  const dispatch = useDispatch();

  const getOrderList = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(serviceOrderAsyncThunk.getOrderList({id}))
        .unwrap()
        .then(res => {
          setOrderList(res?.data?.data);
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
        });
    }, 500);
  };
  const theme = useTheme();
  const {colors} = theme;
  navigation = useNavigation();
  const skeletonData = Array.from({length: 6}); // create an array of length 9

  const renderItem = () => <ItemSkelaton />; // render a SkeletonHomeItem component
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <HeaderAtom
        backImage={IMAGES.arrow}
        imageBack={IMAGES.arrow}
        title={'Order Report'}
        onPress={() => navigation.goBack()}
      />
      <View
        style={{
          ...styles.flexViewFab,
          flexDirection: 'row',
          width: '100%',
        }}>
        <SearchInput
          placeholderTextColor={COLORS.PRIMARY_BLACK}
          source={IMAGES.search}
          placeholder="Search Order Reports ..."
          underlineColor="transparent"
        />
      </View>
      <View>
        {orderList?.length ? (
          <View>
            {loading ? (
              <FlatList
                contentContainerStyle={styles.flatListStyle}
                data={skeletonData} // use the skeleton data instead of searchList
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            ) : (
              <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={() => getOrderList()}
                  />
                }
                contentContainerStyle={styles.flatListStyle}
                data={orderList}
                renderItem={({item}) => <ItemReports item={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
              />
            )}
          </View>
        ) : (
          <View style={styles.orderContainer}>
            <Image style={styles.orderImgae} source={IMAGES?.box} />
            <Text style={styles.orderText}>Order is Empty !</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default OrderReports;
