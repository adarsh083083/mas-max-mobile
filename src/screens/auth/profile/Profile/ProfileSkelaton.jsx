import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IMAGES, ROUTES} from '../../../../constants';
import HeaderAtom from '../../../../components/Header/Header/Header';
import AppButtonColored from '../../../../components/Button/AppButtonColored';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../../redux/slice/auth.slice';
import SweetAlert from 'react-native-sweet-alert';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {getUserProfile} from '../../../../redux/asyncThunk/authAsyncThunk';
import axios from 'axios';
import {getAddressListThunk} from '../../../../redux/asyncThunk/getAddressAsyncThunk/getAddressListThunk';
import Toast from 'react-native-toast-message';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ProfileSkelaton = () => {
  const dispatch = useDispatch();
  const [defaultAddress, setDefaultAddress] = useState('');
  const {userProfileInfo, accessToken} = useSelector(
    state => state?.googleSignIn,
  );
  const data = useSelector(state => state?.getDefaultAddress);
  const id = userProfileInfo?.id;
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
    GoogleSignin.signOut();
    Toast.show({
      type: 'success',
      text1: 'Logged Out',
    });
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
      <SkeletonPlaceholder>
        <View style={styles.ProfileContainer}>
          <Image
            style={styles.ProfileImage}
            source={{uri: userProfileInfo?.avatar}}
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
              <Text style={styles.addressText}>
                {data?.data[0]?.is_default
                  ? data?.data[0]?.is_default
                    ? data?.data[0]?.state +
                      ' ' +
                      data?.data[0]?.city +
                      ' ' +
                      data?.data[0]?.country
                    : 'Malaysia'
                  : 'Malaysia'}
              </Text>
            </View>
            {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.ADD_ADDRESS, {id});
            }}
            style={styles.editImageContainer}>
            <Image
              resizeMode="contain"
              style={styles.editImage}
              source={IMAGES.edit}
            />
          </TouchableOpacity> */}
          </View>
          <View style={styles.dobContainer}>
            <View style={styles.dobInnerContainer}>
              <View style={styles.dobImageBox}>
                <Image style={styles.dobImage} source={IMAGES.calander} />
              </View>
            </View>
            <View style={styles.dobTextContainer}>
              <Text style={styles.dobHeading}>DOB</Text>
              <Text style={styles.dobText}>{userProfileInfo?.dob}</Text>
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
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};
export default ProfileSkelaton;
