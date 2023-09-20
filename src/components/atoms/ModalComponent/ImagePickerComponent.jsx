import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import mime from 'mime';
const ModalComp = props => {
  const {
    setIntialValues,
    initialValues,
    selectedImage,
    setSelectedImage,
    setImageFile,
  } = props;
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        camera();
      } else {
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const gallery = async () => {
    setLoading(true);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(res => {
        setLoading(false);
        const formData = new FormData();
        const fileName = res.path.split('/').pop();

        const file = {
          uri: res?.path,
          type: res?.mime,
          name: fileName,
        };
        formData.append('avatar', file);
        setImageFile(file);
        setIntialValues({
          ...initialValues,
          file,
        });

        // const form = new FormData();

        setSelectedImage(res?.path);
        setVisible(false);
        props.onCancel();
      })
      .catch(error => {
        setLoading(false);
        console.warn(error);
      });
  };
  const camera = () => {
    setLoading(true);
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then(res => {
        setSelectedImage(res?.path);
        setLoading(false);

        const fileName = res.path.split('/').pop();

        const file = {
          uri: res?.path,
          type: res?.mime,
          name: fileName,
        };
        setIntialValues({
          ...initialValues,
          file,
        });
        setImageFile(file);
        setVisible(false);
        props.onCancel();
      })
      .catch(error => {
        setLoading(false);
        console.warn(error);
      });
  };
  return (
    <View style={styles.modalContainer}>
      <Modal
        onRequestClose={props.modalVisible}
        visible={props.visible}
        transparent={true}
        animationType="slide">
        <TouchableOpacity
          onPressOut={() => setVisible(true)}
          style={styles.modalInnerView}
          onPressIn={props.onCancel}>
          <View style={styles.modalImageContainer}>
            <TouchableOpacity onPress={props.onCancel} style={styles.btnCancel}>
              <Image
                resizeMode="contain"
                style={styles.imageCancel}
                source={props.imageCancel}
              />
            </TouchableOpacity>
            <View style={styles.cameraContainer}>
              <TouchableOpacity
                style={styles.btnCamera}
                onPress={() => requestCameraPermission()}>
                <Image
                  resizeMode="contain"
                  style={styles.imageCamera}
                  source={props.imageCamera}
                />
                <View style={{marginHorizontal: 6}}></View>
                <Text style={styles.cameraText}>{props.camera}</Text>
              </TouchableOpacity>
              <View style={{marginVertical: 4}}></View>
              <TouchableOpacity
                onPress={() => gallery()}
                style={styles.gallerybtn}>
                <Image
                  resizeMode="contain"
                  style={styles.galleryImage}
                  source={props.imageGallery}
                />
                <View style={{marginHorizontal: 5}}></View>
                <Text style={styles.galleryText}>{props.gallery}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default ModalComp;
