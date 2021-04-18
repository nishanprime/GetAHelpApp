import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Input, Item, Label, Button, Text, H1} from 'native-base';
import {loginUser} from '../api/user';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onRegister = async () => {
    if (email === '' || password === '') {
      alert('Please Fill all the details as required');
    } else {
      setLoading(true);
      //register
      let isSuccess = await loginUser({
        email,
        password,
      });

      setLoading(false);

      if (isSuccess) {
        navigation.navigate('Home');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topStyle}>
        <Image
          source={require('../images/logo.png')}
          style={styles.logoStyle}
        />
        <View style={{alignContent: 'flex-start', marginTop: 20}}>
          <H1>Login</H1>
          <Text>Login to get started.</Text>
        </View>
      </View>
      <View style={styles.formStyle}>
        <Label>Email</Label>
        <Item regular>
          <Input
            placeholder="email (Required) "
            onChangeText={text => setEmail(text)}
            autoCapitalize="none"
          />
        </Item>
        <Label>Password</Label>
        <Item regular>
          <Input
            placeholder="password (Required) "
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </Item>
      </View>
      <Button block onPress={onRegister} disabled={loading}>
        <Text>{loading ? 'Processing...' : 'Login'}</Text>
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  topStyle: {
    justifyContent: 'space-between',
  },
  logoStyle: {
    height: 60,
    width: 60,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  formStyle: {
    marginVertical: 50,
  },
});
