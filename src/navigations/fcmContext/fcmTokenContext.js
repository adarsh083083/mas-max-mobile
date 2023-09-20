import React, {createContext, useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';

export const FCMTokenContext = createContext();

export const FCMTokenProvider = ({children}) => {
  const [fcmToken, setFCMToken] = useState(null);

  const saveFCMToken = token => {
    setFCMToken(token);
  };
  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await messaging().getToken();
        setFCMToken(token);
      } catch (error) {}
    };

    getToken();
  }, []);

  return (
    <FCMTokenContext.Provider value={{fcmToken, saveFCMToken}}>
      {children}
    </FCMTokenContext.Provider>
  );
};
