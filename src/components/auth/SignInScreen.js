import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function SignInScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // const { signIn } = React.useContext(AuthContext)

  function createUser({email, password}) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  }

  function signIn({email, password}) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
           auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((error) => {
              console.error(error);
            });
        }
      });
  }

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({email, password})} />
    </View>
  );
}
