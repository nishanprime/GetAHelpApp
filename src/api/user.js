import axios from 'axios';
import {Alert} from 'react-native';
const API_URL = 'https://getahelp.herokuapp.com';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const registerUser = async formData => {
  try {
    let response = await axios.post(
      `${API_URL}/users/register`,
      JSON.stringify(formData),
      config,
    );

    if (response.data?.user) {
      return true;
    } else {
      Alert.alert('Register Failed', 'Unexpected Error Occured!');
      return false;
    }
  } catch (error) {
    error?.response?.data?.errors?.map(message =>
      Alert.alert('Register Failed', message),
    );
    return false;
  }
};

export const loginUser = async formData => {
  try {
    const response = await axios.post(
      `${API_URL}/users/login`,
      JSON.stringify(formData),
      config,
    );

    if (response.data?.user?.email) {
      await AsyncStorage.setItem('email', response.data?.user?.email);
      return true;
    } else {
      Alert.alert('Login Failed', 'Unexpected Error Occured!');
      return false;
    }
  } catch (error) {
    error?.response?.data?.errors?.map(message =>
      Alert.alert('Login Failed', message),
    );
    return false;
  }
};
