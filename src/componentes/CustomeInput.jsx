import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../ui/styles';

const CustomInput = ({ value, setFun, plac, secure, keyboardType, variant = 'signin' }) => {
    const inputStyle = variant === 'otp' ? styles.otpInput : styles.input;

    

    return (
        <TextInput
            value={value}
            onChangeText={setFun}
            style={inputStyle}
            placeholder={plac}
            placeholderTextColor="#999"
            secureTextEntry={secure}
            keyboardType={keyboardType}
            maxLength={variant === 'otp' ? 1 : undefined} // OTP ke liye 1 character
        />
    );
};

export default CustomInput;
