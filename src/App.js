import React, {useState, useEffect} from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Spinner from './components/common/Spinner';
import OnboardingScreen from './components/onboarding/OnboardingScreen';
import SignInScreen from './components/auth/SignInScreen';
import HomeTabs from './components/navigation/HomeTabs';

import store from './redux/store';
const Stack = createStackNavigator();

function AppNavigator() {
  // const dispatch = useDispatch()
  const { user, initialized } = useSelector(state => state.auth)

  if (!initialized) return <Spinner/>

  return (
    <NavigationContainer>
      {!user ? (
        <Stack.Navigator>
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeTabs} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// const [loading, setLoading] = useState(true);
// const [viewedOnboarding, setViewedOnboarding] = useState(false);
// async function checkOnboarding() {
//   try {
//     const value = await AsyncStorage.getItem('@viewedOnboarding');
//     if (value) setViewedOnboarding(true);
//   } catch (error) {
//     console.log('@check viewedOnboarding', error);
//   } finally {
//     setLoading(false);
//   }
// }
