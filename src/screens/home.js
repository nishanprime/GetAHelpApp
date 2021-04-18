import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <Text onPress={() => navigation.navigate('Register')}>Home</Text>
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
