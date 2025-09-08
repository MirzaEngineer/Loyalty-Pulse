import React, { useState } from 'react';
import {View,Text,StyleSheet,TextInput,Pressable,Alert,StatusBar,} from 'react-native';
import LinearBackground from '../../componentes/LinearBackground';
import CustomInput from '../../componentes/CustomeInput';
import { styles } from '../../ui/styles';
import { LoginStyles } from '../../ui/LoginStyles';
import Button from '../../componentes/Button';

const SignInScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handelEmail = (text) => {
    setEmail(text)
  }
  const handelPassword = (text) => {
    setPassword(text)
  }
  const handleLogin = () => {
    if (email === "" || password === "") {
      console.log("Please fill all fields");
      return;
    }
    navigation.navigate("TwoStep");
  };
  return (
    <LinearBackground
    // colors={['#e6d9d6ff', '#dca77eff']}
    >
      {/* <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" /> */}

      <View style={LoginStyles.mainContainer}>
        <View style={LoginStyles.card}>
        <Text style={LoginStyles.title}>Login</Text>

        <Text style={LoginStyles.subtitle}>
          Please enter your email address{'\n'}and password below.
        </Text>

        <CustomInput
          value={email}
          setFun={handelEmail}
          plac="Enter email address" keyboardType="email-address" />
        <CustomInput
          value={password}
          setFun={handelPassword}
          plac="Enter password" secure={true} />
        <View style={LoginStyles.row}>
          <Pressable style={LoginStyles.checkboxContainer} onPress={() => setChecked(!checked)}>
            <View style={[LoginStyles.circle, checked && LoginStyles.circleChecked]}>
              {checked && <Text style={LoginStyles.checkmark}>✓</Text>}
            </View>
            <Text style={LoginStyles.label}>Remember me</Text>
          </Pressable>
          <Pressable onPress={() => Alert.alert("Forget Password")}>
            <Text style={LoginStyles.forgot}>Forgot password?</Text>
          </Pressable>
        </View>
        <Button onPres={handleLogin} title="Sign In" />
      </View>
      </View>
    </LinearBackground>

  );
};

export default SignInScreen;

