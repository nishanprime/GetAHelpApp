import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';
import {COLORS} from '../constants/theme';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Button light onPress={() => navigation.navigate('GetStarted')}>
          <Text> Get Started </Text>
        </Button>
      </View>
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
});
