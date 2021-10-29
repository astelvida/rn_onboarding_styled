import {createSlice} from '@reduxjs/toolkit';
// import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// {
//   uid: '',
//   displayName: '',
//   email: '',
//   photoURL: '',
//   providerId: '',
// }
const initialState = {
  user: null,
  initialized: false,
  error: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload;
      !state.initialized && (state.initialized = true);
    },
  },
});

export const {setAuthUser} = authSlice.actions;

export const checkAuth = () => (dispatch) =>
  auth().onAuthStateChanged(function (user) {
    dispatch(setAuthUser(user));
  });

// export const emailSignIn = (email, password) => (dispatch) => {
//   return auth()
//     .signInWithEmailAndPassword(eail, password)
//     .catch((error) => {
//       const {code, message} = error;
//       dispatch(error({code, message}));
//     });
// };

// export const emailSignUp = (email, password) => (dispatch) => {
//   return auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(({user}) => {
//       // return dispatch(createUser({email, password}));
//     })
//     .catch((error) => {
//       const {code, message} = error;
//       dispatch(error({code, message}));
//     });
// };

// export function signOut() {
//   return auth().signOut();
// }
// // import faker from 'faker';

// // const users = await firestore().collection('Users').get();
// // const user = await firestore().collection('Users').doc('ABC').get();

// function getUserProfile() {
//   const user = auth().currentUser;
//   if (user !== null) {
//     const {displayName, email, photoURL, uid, providerId} = user;
//     return {displayName, email, photoURL, uid, providerId};
//   }
// }

// function getUserProfileProvider() {
//   const user = auth().currentUser;
//   if (user !== null) {
//     user.providerData.forEach((profile) => {
//       console.log('Sign-in provider: ' + profile.providerId);
//       console.log('  Provider-specific UID: ' + profile.uid);
//       console.log('  Name: ' + profile.displayName);
//       console.log('  Email: ' + profile.email);
//       console.log('  Photo URL: ' + profile.photoURL);
//     });
//   }
//   // [END auth_get_user_profile_provider]
// }

// function updateUserProfile(profile = {}) {
//   const user = auth().currentUser;
//   return user && user.updateProfile(profile);
// }

// function updateUserEmail(email) {
//   const user = auth().currentUser;
//   return user.updateEmail(email);
// }
export default authSlice.reducer;
