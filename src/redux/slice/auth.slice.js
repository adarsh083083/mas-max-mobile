import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {THUNK_STATUS} from '../constants/redux.constant';
import {getUserProfile, googleSigninThunk} from '../asyncThunk/authAsyncThunk';

const initialState = {
  user: null,
  accessToken: null,
  userProfileInfo: null,
  authStatus: null,
  isLoading: false,
  keepUserLoggedIn: false,
  profileStatus: null,
  isError: false,
  returned: [],
};
const googleSignInSlice = createSlice({
  name: 'googleAuth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.accessToken = '';
      state.user = '';
      state = initialState;
      AsyncStorage.removeItem('accessToken');
    },
    reset: () => {
      return initialState;
    },
  },
  extraReducers: bulilder => {
    // googleSign
    bulilder.addCase(googleSigninThunk.pending, (state, action) => {
      state.authStatus = THUNK_STATUS.LOADING;
      state.isLoading = true;
      state.isError = false;
    });
    bulilder.addCase(googleSigninThunk.fulfilled, (state, action) => {
      state.authStatus = THUNK_STATUS.SUCCESS;
      state.user = action?.payload?.data;
      state.accessToken = action.payload?.data?.tokens?.access_token;
      state.isLoading = false;
      state.isError = false;
      state.keepUserLoggedIn = true;
    });
    bulilder.addCase(googleSigninThunk.rejected, (state, action) => {
      state.authStatus = THUNK_STATUS.FAILED;
      state.isLoading = false;
      state.isError = true;
    });
    // userProfile
    bulilder.addCase(getUserProfile.pending, (state, action) => {
      state.profileStatus = THUNK_STATUS.LOADING;
      state.isLoading = true;
      state.isError = false;
    });
    bulilder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.profileStatus = THUNK_STATUS.SUCCESS;
      state.userProfileInfo = action.payload?.data;
      state.isLoading = false;
      state.isError = false;
    });
    bulilder.addCase(getUserProfile.rejected, (state, action) => {
      state.profileStatus = THUNK_STATUS.FAILED;
      state.isLoading = false;
      state.isError = false;
    });
  },
});

export const {addToken, logout, reset} = googleSignInSlice.actions;
export const authState = state => state.authStatus;
export default googleSignInSlice.reducer;
