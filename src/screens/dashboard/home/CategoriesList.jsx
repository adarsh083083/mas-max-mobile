import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import HeaderAtom from '../../../components/Header/Header/Header';
import {IMAGES} from '../../../constants';
import ItemServiceList from './ItemServiceList';
import {serviceCategoriesThunk} from '../../../redux/asyncThunk/servicesCategroiesthunk';
import styles from './styles';
import ItemServicSkelaton from './itemServiceSkelaton';
import {Image} from 'react-native';
const CategroiesList = () => {
  const [loading, setLoading] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const routes = useRoute();
  const {id, sub_category} = routes?.params;
  useFocusEffect(
    React.useCallback(() => {
      CategoriesList();
    }, []),
  );

  const CategoriesList = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(serviceCategoriesThunk.getCategoriesList({id}))
        .unwrap()
        .then(res => {
          setCategoriesList(res?.data?.data);
          setLoading(false);
        })
        .catch(err => {});
    }, 500);
  };
  return (
    <>
      <View>
        <HeaderAtom
          backImage={IMAGES.arrow}
          imageBack={IMAGES.arrow}
          title={'Service List'}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.subCategoryContainer}>
          <Text style={styles.subCategoryText}>
            {sub_category.charAt(0).toUpperCase() + sub_category.slice(1)}
          </Text>
        </View>
      </View>
      {loading ? (
        <View>
          <FlatList
            data={categoriesList}
            renderItem={({item}) => <ItemServicSkelaton item={item} />}
          />
        </View>
      ) : categoriesList?.length ? (
        <FlatList
          data={categoriesList}
          renderItem={({item}) => <ItemServiceList item={item} />}
        />
      ) : (
        <View style={styles.servicesContainer}>
          <Image style={styles.servicesImage} source={IMAGES.services} />
          <Text style={styles.servicesText}>No Services Available!</Text>
        </View>
      )}
    </>
  );
};

export default CategroiesList;
