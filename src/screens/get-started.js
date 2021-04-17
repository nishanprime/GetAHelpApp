import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS} from '../constants/theme';

const data = [
  {
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../images/bg_1.png'),
    bg: '#59b2ab',
  },
  {
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../images/bg_2.png'),
    bg: '#febe29',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nextButton: {
    backgroundColor: COLORS.primary,
    padding: 5,
  },
});

const GetStarted = () => {
  const renderItem = ({item}) => {
    return <ImageBackground style={styles.container} source={item.image} />;
  };
  const keyExtractor = item => item.title;

  const getStarted = () => {
    alert('Completed');
  };

  return (
    <View style={{flex: 1}}>
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        onDone={getStarted}
      />
    </View>
  );
};

export default GetStarted;
