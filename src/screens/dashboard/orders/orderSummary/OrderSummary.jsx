import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import {IMAGES, ROUTES} from '../../../../constants';
import CustomRating from '../../../../components/atoms/Rating/CustomRating';
import HeaderAtom from '../../../../components/Header/Header/Header';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import HeaderList from '../../../../components/Header/HeaderList/HeaderList';
const OrderSummary = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.HeaderContainer}>
        <HeaderAtom
          backImage={IMAGES.arrow}
          imageBack={IMAGES.arrow}
          title="Order Summary"
          onPress={() => {
            navigation.navigate(ROUTES.HOME);
          }}
        />
      </View>
      <HeaderList
        imageLocation={IMAGES.locate}
        title="Bandar Bukit Puchong Selangor"
        subTitle="Bandar Bukit Puchong Selangor 205, Krishna Business Center, Scheme
        54 PU4, Indore,"
      />
      <View style={styles.carWashContainer}>
        <View style={styles.carWashInnerContainer}>
          <Text style={styles.carWorkTextStyle}>The CarWorkshop</Text>
          <Text style={styles.carWashTextStyle}>Car wash</Text>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingInnerContainer}>
            <CustomRating />
          </View>
          <View>
            <Text style={styles.rmTextOneStyle}>RM 79</Text>
          </View>
        </View>
      </View>
      <Text style={styles.serviveDateStyle}>
        Service Date & Time: 21st Feb 2023
      </Text>
      <View style={styles.infomationContainer}>
        <View style={styles.carDetailsStyle}>
          <Text style={styles.carName}>Baleno</Text>
          <Text style={styles.carName}>MH 04 CD 1234</Text>
          <Text style={styles.carRegId}>Reg ID: 1421451223</Text>
        </View>
        <View style={styles.carImageContainer}>
          <Image style={styles.carImage} source={IMAGES.car} />
        </View>
      </View>
      <View style={styles.priceContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.headerText}>Service Total</Text>
          <Text style={styles.headerText}>RM. 2,499</Text>
        </View>
        <View style={styles.serviceStyle}>
          <Text style={styles.headerText}>Convenience Charges</Text>
          <Text style={styles.headerText}>RM. 100</Text>
        </View>
        <View style={styles.serviceStyle}>
          <Text style={styles.headerText}>Service Amount Payable</Text>
          <Text style={styles.headerText}>RM. 2,599</Text>
        </View>
        <View style={styles.serviceStyle}>
          <Text style={styles.headerText}>Service Amount Payable</Text>
          <Text style={styles.headerText}>RM. 2599</Text>
        </View>
      </View>
      <View style={styles.payContainer}>
        <Text style={styles.headerText}>Pay Using</Text>
        <View style={styles.payBox}>
          <View style={styles.radioContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.radioButton}>
              <View style={styles.radioButtonIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.imageBox}>
            <Image style={styles.cardImageStyle} source={IMAGES.payCard} />
            <Text style={styles.paymentText}>Pay Via Debit/Credit Card</Text>
          </View>
        </View>
      </View>
      <View style={styles.priceBox}>
        <View style={styles.washTextStyle}>
          <Text style={styles.carText}>Car Wash</Text>
          <Text style={styles.carTextStyle}>RM 2,599</Text>
        </View>
        <View style={styles.payButtonContainer}>
          <Pressable
            style={styles.payButton}
            onPress={() => navigation.navigate(ROUTES.ORDER_PLACED)}>
            <Text style={styles.buttonTextStyle}>Pay</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default OrderSummary;
