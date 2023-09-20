import {View, Text, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from '../login/styles';
import InstagramLogin from 'react-native-instagram-login';
import {COLORS, IMAGES, ROUTES} from '../../../../src/constants/index';
import AppButton from '../../../components/Button/AppButton';
import messaging from '@react-native-firebase/messaging';
import {useDispatch} from 'react-redux';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {BallIndicator} from 'react-native-indicators';
import {
  getUserProfile,
  googleSigninThunk,
} from '../../../redux/asyncThunk/authAsyncThunk';
import {userProfileAsyncThunk} from '../../../redux/asyncThunk/ProfileAsyncThunk';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [deviceToken, setDeviceToken] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const insRef = useRef();
  const [accessTokens] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '264410728086-m9vj0ebrl43gkg77t2aermh4rkrjue1u.apps.googleusercontent.com',
    });
  }, []);
  const DeviceFcmToken = async () => {
    const fcmtoken = await messaging().getToken();
    setDeviceToken(fcmtoken);
  };
  useEffect(() => {
    DeviceFcmToken();
  }, []);

  const googleLogin = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const token = await GoogleSignin.getTokens();

      if (!token) {
        throw new Error('Access token not found');
      }
      console.log(token, 'here is the otken');
      await dispatch(googleSigninThunk({token: token?.accessToken}))
        .unwrap()
        .then(res => {
          console.log(res, 'myLoginRespone');
          if (res) {
            dispatch(getUserProfile())
              .unwrap()
              .then(res => {
                switch (res?.data?.is_profile_completed) {
                  case false:
                    navigation.navigate(ROUTES.EDIT_PROFILE);
                    break;
                  case true:
                    navigation.navigate(ROUTES.HOME);
                    break;
                  default:
                    break;
                }

                dispatch(
                  userProfileAsyncThunk.updateUserProfile({
                    device_token: deviceToken,
                  }),
                )
                  .unwrap()
                  .then(res => {
                    console.log(res, 'hello');
                  });
              });
          }
        })
        .catch(err => {
          console.log(err, 'here is the login errror');
        });
    } catch (error) {
      if (
        error.code !== statusCodes.SIGN_IN_CANCELLED &&
        error.code !== statusCodes.IN_PROGRESS &&
        error.code !== statusCodes.PLAY_SERVICES_NOT_AVAILABLE
      ) {
        // handle other errors here
      }
    }
    setLoading(false);
  };

  return (
    /******** logoContainer *******/
    <View style={styles.container}>
      {loading ? (
        <View style={styles.indicatorStyle}>
          <BallIndicator color={COLORS.ORANGE} />
        </View>
      ) : (
        <>
          <View style={styles.imageContainer}>
            <Image style={styles.logoImage} source={IMAGES.logo} />
          </View>
          <View style={styles.socialContainer}>
            <Text style={styles.getStartedText}>Lets Get Started</Text>
            <View style={styles.socialButtons}>
              <AppButton
                image={IMAGES.mail}
                title={'Sign With Gmail'}
                onPress={() => googleLogin()}
              />
              <AppButton
                image={IMAGES.instagram}
                title={'Sign With Instagram'}
                onPress={() => {
                  insRef?.current?.show();
                }}
              />
            </View>
            {accessTokens ? (
              <View></View>
            ) : (
              <InstagramLogin
                ref={insRef}
                appId="889601695588354"
                appSecret="aac75783ca858c93758372ec29fe2fc4"
                redirectUrl="https://tools.pingdom.com/"
                scopes={['user_profile', 'user_media']}
                onLoginSuccess={data => handleLogin(data)}
                // onLoginFailure={data}
              />
            )}
          </View>
        </>
      )}
    </View>
  );
};
export default Login;
