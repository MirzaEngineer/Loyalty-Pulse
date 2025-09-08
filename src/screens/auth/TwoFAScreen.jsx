import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Pressable, Image, Alert } from 'react-native';
import LinearBackground from '../../componentes/LinearBackground';
import { LoginStyles } from '../../ui/LoginStyles';
import CustomInput from '../../componentes/CustomeInput';
import Button from '../../componentes/Button';
import Loader from '../../componentes/Loader';
import { TwoFAStyle } from '../../ui/TwoFAStyle';

const TwoFAScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const handleResend = () => {
    Alert.alert("Resend Code")
    console.log("Resend Code clicked");
  };
  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };
  const handleVerify = () => {
    const isComplete = otp.every((digit) => digit.trim() !== "");
    if (!isComplete) {
      Alert.alert("Incomplete", "Please enter all 6 digits.");
      return;
    }
    const fullOtp = otp.join("");
    console.log("OTP:", fullOtp);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Home");
    }, 1000);
  };
  return (
    <LinearBackground>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={LoginStyles.mainContainer}>
        <View style={LoginStyles.card}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: 130, borderRadius: 10, height: 140, marginBottom: 20 }}
              source={{
                uri: "https://img.freepik.com/premium-vector/otp-authentication-secure-verification_7087-3082.jpg",
              }}
            />
          </View>
          <Text style={TwoFAStyle.title}>Authentication</Text>
          <Text style={TwoFAStyle.subtitle}>
            Enter the 6 digit code that has been sent on your email
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {otp.map((value, index) => (
              <CustomInput
                key={index}
                value={value}
                setFun={(text) => handleChange(text, index)}
                variant="otp"
                keyboardType="number-pad"
              />
            ))}
          </View>
          <Button
            title="Verify Code"
            onPres={handleVerify}
            style={{ marginTop: 30, marginBottom: 30 }}
          />
          <Pressable onPress={handleResend}>
            <Text style={TwoFAStyle.bottomText}>
              Didn’t get code?  <Text style={TwoFAStyle.resend}>Resend Code</Text>
            </Text>
          </Pressable>
        </View>
      </View>
      <Loader visible={loading} />
    </LinearBackground>
  );
};
export default TwoFAScreen;
