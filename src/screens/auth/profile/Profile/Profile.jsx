import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, IMAGES, ROUTES} from '../../../../constants';
import HeaderAtom from '../../../../components/Header/Header/Header';
import AppButtonColored from '../../../../components/Button/AppButtonColored';
import {useDispatch, useSelector} from 'react-redux';
import {logout, reset} from '../../../../redux/slice/auth.slice';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  getUserProfile,
  userLogoutThunk,
} from '../../../../redux/asyncThunk/authAsyncThunk';
import axios from 'axios';
import {getAddressListThunk} from '../../../../redux/asyncThunk/getAddressAsyncThunk/getAddressListThunk';
import moment from 'moment-timezone';
import Toast from 'react-native-toast-message';
const Profile = () => {
  const dispatch = useDispatch();
  const [defaultAddress, setDefaultAddress] = useState('');
  const {userProfileInfo, accessToken} = useSelector(
    state => state?.googleSignIn,
  );

  const defaultAdd = useSelector(state => state?.getDefaultAddress);
  let loginStatus = userProfileInfo?.is_profile_completed;

  useEffect(() => {
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
    dispatch(getUserProfile())
      .unwrap()
      .then(res => {});
  }, [accessToken, loginStatus]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(userLogoutThunk())
      .unwrap()
      .then(res => {
        if (res) {
          dispatch(reset());
          GoogleSignin.signOut();
          navigation.navigate(ROUTES.LOGIN);
          Toast.show({
            type: 'success',
            text1: 'Logged Out',
          });
        }
      })
      .catch(err => {});
  };

  useEffect(() => {
    getDefaultAddress();
  }, []);

  const getDefaultAddress = () => {
    dispatch(getAddressListThunk.getAddressListThunk())
      .unwrap()
      .then(res => {
        setDefaultAddress(res?.data);
      })
      .catch(error => {});
  };
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View>
        <HeaderAtom
          backImage={IMAGES.arrow}
          imageBack={IMAGES.arrow}
          title="Profile"
          imageRightArrow={IMAGES.signout}
          onPress={() => navigation.goBack()}
          onSkip={() => handleLogout()}
        />
      </View>
      <View style={styles.ProfileContainer}>
        <Image
          style={styles.ProfileImage}
          source={{uri: userProfileInfo?.avatar_url}}
        />
        <Text style={styles.name}>
          {userProfileInfo?.first_name} {userProfileInfo?.last_name}
        </Text>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 24.08}}>
        <View style={styles.emailContainer}>
          <View style={styles.emailInnerContainer}>
            <View style={styles.emailImageBox}>
              <Image style={styles.emailImage} source={IMAGES.message} />
            </View>
          </View>
          <View style={styles.emailTextContainer}>
            <Text style={styles.emailHeading}>Email</Text>
            <Text style={styles.emailText}>{userProfileInfo?.email}</Text>
          </View>
        </View>
        <View style={styles.phoneContainer}>
          <View style={styles.phoneInnerContainer}>
            <View style={styles.phoneImageBox}>
              <Image style={styles.phoneImage} source={IMAGES.phone} />
            </View>
          </View>
          <View style={styles.phoneTextContainer}>
            <Text style={styles.phoneHeading}>Phone</Text>
            <Text style={styles.phoneText}>
              {userProfileInfo?.mobile_number}
            </Text>
          </View>
        </View>
        <View style={styles.addressContainer}>
          <View style={styles.addressInnerContainer}>
            <View style={styles.addressImageBox}>
              <Image style={styles.addressImage} source={IMAGES.location} />
            </View>
          </View>
          <View style={styles.addressTextContainer}>
            <Text style={styles.addressHeading}>Address</Text>
            <Text numberOfLines={2} style={styles.addressText}>
              {defaultAdd?.data[0]?.line1}
            </Text>
          </View>
        </View>
        <View style={styles.dobContainer}>
          <View style={styles.dobInnerContainer}>
            <View style={styles.dobImageBox}>
              <Image style={styles.dobImage} source={IMAGES.calander} />
            </View>
          </View>
          <View style={styles.dobTextContainer}>
            <Text style={styles.dobHeading}>DOB</Text>
            <Text style={styles.dobText}>
              {moment(userProfileInfo?.dob).format('DD/MM/YYYY')}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.ButtonContainer}>
        <View style={styles.button}>
          <AppButtonColored
            title={'Update Profile'}
            onPress={() => navigation.navigate(ROUTES.EDIT_PROFILE)}
          />
        </View>
        <Text style={styles.versionStyle}>Version - 1.0.0</Text>
      </View>
    </View>
  );
};
export default Profile;
