import React, {useState} from 'react';
import {StyleSheet, View, Image, Alert} from 'react-native';
import {Input, Item, Label, Textarea, Button, Text, H1} from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';
import {registerUser} from '../api/user';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const onRegister = async () => {
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      password2 === '' ||
      bloodGroup === '' ||
      currentAddress === ''
    ) {
      alert('Please Fill all the details as required');
    } else if (password !== password2) {
      alert('Password must match');
    } else {
      setLoading(true);
      //register
      let isSuccess = await registerUser({
        name,
        email,
        password,
        bloodGroup,
        currentAddress,
      });

      setLoading(false);

      if (isSuccess) {
        Alert.alert(
          'Register Success',
          'You have been registered successfully, Please login to continue.',
          [{text: 'OK', onPress: () => navigation.navigate('Login')}],
        );
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
          <H1>Get Started</H1>
          <Text>Register here to get started with us.</Text>
        </View>
      </View>
      <View style={styles.formStyle}>
        <Label>Name</Label>
        <Item regular>
          <Input
            placeholder="full name (Required) "
            onChangeText={text => setName(text)}
          />
        </Item>
        <Label>Email</Label>
        <Item regular>
          <Input
            placeholder="email (Required) "
            onChangeText={text => setEmail(text)}
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
        <Label>Confirm password</Label>
        <Item regular>
          <Input
            placeholder="confirm password (Required) "
            secureTextEntry={true}
            onChangeText={text => setPassword2(text)}
          />
        </Item>
        <Label>Blood group</Label>
        <DropDownPicker
          items={[
            {
              label: 'A RhD positive (A+)',
              value: 'A RhD positive (A+)',
            },
            {
              label: 'A RhD negative (A-)',
              value: 'A RhD negative (A-)',
            },
            {
              label: 'B RhD positive (B+)',
              value: 'B RhD positive (B+)',
            },
            {
              label: 'B RhD negative (B-)',
              value: 'B RhD negative (B-)',
            },
            {
              label: 'O RhD positive (O+)',
              value: 'O RhD positive (O+)',
            },
            {
              label: 'O RhD negative (O-)',
              value: 'O RhD negative (O-)',
            },
            {
              label: 'AB RhD positive (AB+)',
              value: 'AB RhD positive (AB+)',
            },
            {
              label: 'AB RhD negative (AB-)',
              value: 'AB RhD negative (AB-)',
            },
          ]}
          defaultValue={bloodGroup}
          containerStyle={{height: 50}}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          onChangeItem={item => setBloodGroup(item.value)}
          placeholder="blood group (Required) "
        />
        <Label>Current address</Label>
        <Textarea
          rowSpan={5}
          bordered
          placeholder="current address  (Required) "
          onChangeText={text => setCurrentAddress(text)}
        />
      </View>
      <Button block onPress={onRegister} disabled={loading}>
        <Text>{loading ? 'Processing...' : 'Register'}</Text>
      </Button>
    </View>
  );
};

export default Register;

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
