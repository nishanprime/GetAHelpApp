import React from 'react';
import {StyleSheet, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.containerStyle}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
