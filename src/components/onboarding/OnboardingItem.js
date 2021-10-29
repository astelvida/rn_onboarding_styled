import React from 'react';
import {StyleSheet, Text, Image, useWindowDimensions, View} from 'react-native';
import {COLORS} from '../constants/theme';

const OnboardingItem = ({item}) => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={{
          uri:
            item?.imageUri ??
            require('../../assets/new-onboarding/sugar-icon.jpg'),
        }}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    color: COLORS.pink,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontWeight: '300',
    paddingHorizontal: 30,
    color: COLORS.magnesium,
    fontSize: 16,
    textAlign: 'center',
  },
});
