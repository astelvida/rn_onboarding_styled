import React, {useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, View, Animated} from 'react-native';
import { introSlides } from '../../data/onboarding';
import NextButton from './NextButton';
import OnboardingItem from './Onboar]dingItem';
import Paginator from './Paginator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboarding = () => {
  const introSlidesRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const scrollTo = async () => {
    if (currentIndex < introSlides.length - 1) {
      introSlidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      await AsyncStorage.setItem('@viewedOnboarding', true)
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={introSlides}
          renderItem={({item}) => <OnboardingItem item={item} />}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          bounces={false}
          keyExtractor={(item, index) => index.toString()}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged.current}
          viewabilityConfig={viewabilityConfig}
          ref={introSlidesRef}
        />
      </View>
      <Paginator data={introSlides} scrollX={scrollX} />
      <NextButton
        onPress={scrollTo}
        percentage={(currentIndex + 1) * (100 / introSlides.length)}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
