import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const initialState = {
  uid: '',
  displayName: '',
  avatar: '', //auth.photoURL

  age: '',
  currentWeight: '',
  targetWeight: '',

  error: false,
  loading: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      return {...state, ...action.payload, error: false};
    },
  },
});

export const {updateProfile} = profileSlice.actions;

export default profileSlice.reducer;
