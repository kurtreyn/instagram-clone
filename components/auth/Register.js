import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { auth } from '../../src/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigate }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);

  function registerUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  async function onSignup() {
    setLoading(true);

    try {
      await registerUser(emailRef.current.value, passwordRef.current.value);
      Alert.alert('Registration was successful');
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <View>
      <TextInput placeholder="name" autoCapitalize="none" ref={nameRef} />
      <TextInput placeholder="email" autoCapitalize="none" ref={emailRef} />
      <TextInput
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        ref={passwordRef}
      />
      <TouchableOpacity onPress={onSignup}>
        <Button title="Sign Up" />
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
