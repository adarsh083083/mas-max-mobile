import {Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../../../constants/colors';
import MyTextInput from '../../../../components/atoms/InputText/inputAtom';
import DatePicker from 'react-native-date-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import * as yup from 'yup';
import {Formik} from 'formik';
import ModalComp from '../../../../components/atoms/ModalComponent/ImagePickerComponent';
import HeaderAtom from '../../../../components/Header/Header/Header';
import {IMAGES, ROUTES} from '../../../../constants';
import AppButtonColored from '../../../../components/Button/AppButtonColored';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {userProfileAsyncThunk} from '../../../../redux/asyncThunk/ProfileAsyncThunk';
import Toast from 'react-native-toast-message';
import {getUserProfile} from '../../../../redux/asyncThunk/authAsyncThunk';
import {MaterialIndicator} from 'react-native-indicators';
import {objectToFormData} from '../../../../utils/formDataHalper';
import moment from 'moment';

const EditProfile = () => {
  const {userProfileInfo} = useSelector(state => state?.googleSignIn);
  const [selectedImage, setSelectedImage] = useState('');
  const [date, setDate] = useState(
    userProfileInfo?.dob ? new Date(userProfileInfo.dob) : new Date(),
  );
  const [isLoading, setIsLoading] = useState(false);
  let loginStatus = userProfileInfo?.is_profile_completed;
  const [open, setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageFile, setImageFile] = useState();
  const navigation = useNavigation();
  console.log(imageFile?.type, 'here is the image file');
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    first_name: yup
      .string()
      .required('First name is required')
      .matches(/^[a-zA-Z]+$/, 'Invalid first name'),
    last_name: yup
      .string()
      .required('Last name is required')
      .matches(/^[a-zA-Z]+$/, 'Invalid last name'),
    mobile_number: yup
      .string()
      .matches(/^[0-9]{10}$/, 'Invalid mobile number')
      .required('Mobile number is required'),
  });

  const [initialValues, setIntialValues] = useState({
    first_name: '',
    last_name: '',
    mobile_number: '',
    dob: '',
    device_token: '',
    // avatar: '',
  });
  console.log(initialValues, 'here is the intialValue');
  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };

  const onSubmit = async values => {
    // setIsLoading(true);
    delete values.last_login_at;
    delete values.last_login_ip;

    const modifyObj = {
      ...values,
      dob: moment(date).format('YYYY-MM-DD'),
    };

    const data = objectToFormData(modifyObj);
    console.log(data, 'here is the data');
    console.log('selectedImage', selectedImage);
    if (selectedImage) {
      data.append('avatar', {
        uri: selectedImage,
        name: imageFile?.name,
        type: imageFile?.type,
      });
    } else {
      // data.append('avatar', {
      //   uri: selectedImage,
      //   name: imageFile?.name,
      //   type: imageFile?.type,
      // });
    }

    dispatch(userProfileAsyncThunk.updateUserProfile(data))
      .unwrap()
      .then(res => {
        setIsLoading(false);
        if (res) {
          Toast.show({
            type: 'success',
            text1: 'Profile Updated successfully',
          });
          dispatch(getUserProfile())
            .unwrap()
            .then(res => {});

          {
            !userProfileInfo?.is_profile_completed
              ? navigation.navigate(ROUTES.ADD_VEHICLE, {userProfileInfo})
              : navigation.navigate(ROUTES.PROFILE, {userProfileInfo});
          }
        } else {
          setIsLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Something went wrong',
          });
        }
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  // useEffect(() => {
  //   setIntialValues(userProfileInfo);
  // }, [userProfileInfo]);
  useEffect(() => {
    setIntialValues({
      ...userProfileInfo, // Include other fields from userProfileInfo
      avatar: userProfileInfo?.avatar, // Add the avatar field
    });
  }, [userProfileInfo]);

  return (
    <View style={styles.container}>
      {loginStatus === false ? (
        <HeaderAtom title="Update Profile" />
      ) : (
        <HeaderAtom
          backImage={IMAGES.arrow}
          imageBack={IMAGES.arrow}
          title="Update Profile"
          onPress={() => navigation.goBack()}
        />
      )}

      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={async values => onSubmit(values)}>
        {({values, handleChange, errors, handleSubmit}) => (
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.ImageStyle}
                source={{
                  uri: selectedImage
                    ? selectedImage
                    : userProfileInfo?.avatar_url,
                }}
              />
              <View>
                <TouchableOpacity
                  style={{backgroundColor: 'orange'}}
                  onPressIn={() => showModal()}>
                  <Image style={styles.IconStyle} source={IMAGES.edit_icon} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.user_name}>
              {userProfileInfo?.first_name} {userProfileInfo?.last_name}
            </Text>
            <View style={styles.inputContainer}>
              <View style={styles.marginStyle}>
                <MyTextInput
                  style={styles.inputField}
                  mode="outlined"
                  label="First Name"
                  placeholder="Update Your Name"
                  outlineStyle={styles.outLineStyles}
                  underlineStyle={styles.underLineStyle}
                  outlineColor={COLORS.PRIMARY_SECONDARY_BLACK}
                  activeOutlineColor={COLORS.ORANGE}
                  textColor={COLORS.SECONDARY_GREY}
                  contentStyle={styles.textInput}
                  value={values?.first_name}
                  onChangeText={handleChange('first_name')}
                  onBlur={() => handleBlur('first_name')}
                />

                {errors?.first_name ? (
                  <Text style={styles.errorStyle}>{errors.first_name}</Text>
                ) : null}
              </View>

              <View style={styles.marginStyle}>
                <MyTextInput
                  style={styles.inputField}
                  mode="outlined"
                  label="Last Name"
                  placeholder="Update Your Name"
                  outlineStyle={styles.outLineStyles}
                  underlineStyle={styles.underLineStyle}
                  outlineColor={COLORS.PRIMARY_SECONDARY_BLACK}
                  activeOutlineColor={COLORS.ORANGE}
                  textColor={COLORS.SECONDARY_GREY}
                  contentStyle={styles.textInput}
                  value={values?.last_name}
                  onChangeText={handleChange('last_name')}
                  onBlur={() => handleBlur('last_name')}
                />

                {errors?.last_name ? (
                  <Text style={styles.errorStyle}>{errors.last_name}</Text>
                ) : null}
              </View>

              <View style={styles.marginStyle}>
                <MyTextInput
                  mode={'outlined'}
                  label="Email Address"
                  placeholder="Update Your Email"
                  outlineStyle={styles.outLineStyles}
                  underlineStyle={styles.underLineStyle}
                  outlineColor={COLORS.PRIMARY_SECONDARY_BLACK}
                  activeOutlineColor={COLORS.ORANGE}
                  textColor={COLORS.SECONDARY_GREY}
                  contentStyle={styles.textInput}
                  style={styles.inputField}
                  editable={false}
                  value={userProfileInfo?.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => handleBlur('email')}
                />
              </View>
              <View style={styles.marginStyle}>
                <MyTextInput
                  mode="outlined"
                  label="Mobile Number"
                  placeholder="Update Your Phone"
                  outlineStyle={styles.outLineStyles}
                  underlineStyle={styles.underLineStyle}
                  outlineColor={COLORS.PRIMARY_SECONDARY_BLACK}
                  activeOutlineColor={COLORS.ORANGE}
                  textColor={COLORS.SECONDARY_GREY}
                  contentStyle={styles.textInput}
                  keyboardType={'numeric'}
                  style={styles.inputField}
                  value={values?.mobile_number}
                  onChangeText={handleChange('mobile_number')}
                  onBlur={() => handleBlur('mobile_number')}
                />
                {errors?.mobile_number ? (
                  <Text style={styles.errorStyle}>{errors?.mobile_number}</Text>
                ) : null}
              </View>
              <View style={styles.marginStyle}>
                <MyTextInput
                  mode="outlined"
                  label="DOB"
                  onPressIn={() => setOpen(true)}
                  placeholder="Select Your Date of Birth"
                  outlineStyle={styles.outLineStyles}
                  underlineStyle={styles.underLineStyle}
                  outlineColor={COLORS.PRIMARY_SECONDARY_BLACK}
                  activeOutlineColor={COLORS.ORANGE}
                  textColor={COLORS.SECONDARY_GREY}
                  contentStyle={styles.textInput}
                  style={styles.inputField}
                  value={date.toLocaleDateString()}
                  onChangeText={handleChange('dob')}
                  editable={false}
                />

                <TouchableOpacity
                  onPress={e => setOpen(true)}
                  style={styles.DatePicker}>
                  <Image
                    resizeMode="contain"
                    style={styles.dateImage}
                    source={IMAGES.datePiker}
                  />
                </TouchableOpacity>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode="date"
                  onDateChange={() => setDate(date)}
                  onConfirm={date => {
                    setDate(date);
                    setOpen(false);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>
              {!isLoading ? (
                <View style={styles.BtnContainer}>
                  <View style={styles.button}>
                    <AppButtonColored
                      loading={isLoading}
                      title={'Submit'}
                      onPress={handleSubmit}
                    />
                  </View>
                </View>
              ) : (
                <View style={styles.BtnContainer}>
                  <View style={styles.button}>
                    <AppButtonColored
                      loading={isLoading}
                      title={
                        <View style={styles.indicatorStyle}>
                          <MaterialIndicator size={20} color={COLORS.WHITE} />
                        </View>
                      }
                      onPress={handleSubmit}
                    />
                  </View>
                </View>
              )}
            </View>
            <ModalComp
              selectedImage={selectedImage}
              imageFile={imageFile}
              setImageFile={setImageFile}
              setSelectedImage={setSelectedImage}
              initialValues={initialValues}
              setIntialValues={setIntialValues}
              imageCancel={IMAGES.cancel}
              imageCamera={IMAGES.camera}
              imageGallery={IMAGES.gallery}
              visible={modalVisible}
              onCancel={hideModal}
              camera={'Choose from camera'}
              gallery={'Choose from gallery'}
              onRequestClose={modalVisible}
            />
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </View>
  );
};
export default EditProfile;
