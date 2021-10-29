import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeTabs = (props) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {/* <Text>Welcome {props.email}</Text> */}
    </View>
  );
}

export default HomeTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
