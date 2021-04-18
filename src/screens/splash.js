import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {COLORS} from '../constants/theme';
import {Spinner} from 'native-base';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    const check = async () => {
      let data = await AsyncStorage.getItem('initial');

      if (data) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('GetStarted');
      }
    };

    setTimeout(() => {
      check();
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.logoStyle} />
      <Spinner color="white" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  logoStyle: {
    height: 300,
    width: 300,
  },
});
