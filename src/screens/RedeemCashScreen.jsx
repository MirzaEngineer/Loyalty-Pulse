import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import BackArrowIcon from '../assets/SVGLOGOS/BackArrowSvgIcon';
import EquilIcon from '../assets/SVGLOGOS/EquilSvgIcon';
import Button from '../componentes/Button';
import SideArroeIcon from '../assets/SVGLOGOS/SideArrow';
import WhiteArrowIcon from '../assets/SVGLOGOS/WhiteArrowSvgIcon';
import { RedeemStyles } from '../ui/RedeemStyle';
import Loader from '../componentes/Loader';
import SuccessPopup from '../componentes/SuccessPopup';

const RedeemCashScreen = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleProceed = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true),
        console.log("Processing complete");
    }, 2000);
  };
  return (
    <View>
      <ScrollView>
        <View style={RedeemStyles.header}>
          <View style={RedeemStyles.iconBG}>
            <BackArrowIcon />
          </View>
          <Text style={RedeemStyles.headTitle}>Redeem to Cash</Text>
        </View>
        <View style={RedeemStyles.cashContainer}>
          <Text style={RedeemStyles.cashTitle}>Ready to Redeem Cash?</Text>
          <Text style={RedeemStyles.cashDescription}>
            Convert your points to cash in just a couple steps.
          </Text>
        </View>
        <View style={RedeemStyles.boxContainer}>
          <View style={RedeemStyles.left}>
            <Text style={RedeemStyles.cardText}>Available Points</Text>
            <Text style={RedeemStyles.cardNumber}>12,500</Text>
          </View>
          <View style={RedeemStyles.center}>
            <EquilIcon />
          </View>
          <View style={RedeemStyles.right}>
            <Text style={RedeemStyles.cardText}>Equivalent (PKR)</Text>
            <Text style={[RedeemStyles.cardNumber, { color: "#1EA765" }]}>6,700</Text>
          </View>
        </View>
        <View style={RedeemStyles.inputContainer}>
          <View style={RedeemStyles.leftInput}>
            <Text>Yoyr Points</Text>
            <TextInput style={RedeemStyles.input} placeholder='Enter Points' />
          </View>
          <View style={RedeemStyles.center}>
            <EquilIcon />
          </View>
          <View style={RedeemStyles.rightInput}>
            <Text >Your Amount(PKR)</Text>
            <TextInput style={RedeemStyles.input} placeholder='0' />
          </View>
        </View>
        <View style={RedeemStyles.cashWalletWrapper}>
          <Text style={RedeemStyles.textStyle}>Select Wallet</Text>
          <TouchableOpacity
            style={RedeemStyles.selectPayment}
            onPress={() => setSelectedWallet('jazzcash')}
          >
            <Text style={RedeemStyles.jazzText}>JazzCash</Text>
            <View
              style={[
                RedeemStyles.radioOuter,
                selectedWallet === 'jazzcash' && RedeemStyles.radioOuterSelected,
              ]}
            >
              {selectedWallet === 'jazzcash' && <View style={RedeemStyles.radioInner} />}
            </View>
          </TouchableOpacity>
          {selectedWallet === 'jazzcash' && (
            <View style={RedeemStyles.walletDetailsCard}>
              <Text style={RedeemStyles.label}>Wallet Holder Name</Text>
              <TextInput
                style={RedeemStyles.input}
                placeholder="Enter Wallet Holder Name"
              />
              <Text style={RedeemStyles.label}>Wallet / Account Number</Text>
              <TextInput
                style={RedeemStyles.input}
                placeholder="Enter Account Number"
                keyboardType="phone-pad"
              />
            </View>
          )}
          <TouchableOpacity
            style={RedeemStyles.selectPayment}
            onPress={() => setSelectedWallet('easypaisa')}
          >
            <Text style={RedeemStyles.jazzText}>EasyPaisa</Text>
            <View
              style={[
                RedeemStyles.radioOuter,
                selectedWallet === 'easypaisa' && RedeemStyles.radioOuterSelected,
              ]}
            >
              {selectedWallet === 'easypaisa' && <View style={RedeemStyles.radioInner} />}
            </View>
          </TouchableOpacity>

          {selectedWallet === 'easypaisa' && (
            <View style={RedeemStyles.walletDetailsCard}>
              <Text style={RedeemStyles.label}>Wallet Holder Name</Text>
              <TextInput
                style={RedeemStyles.input}
                placeholder="Enter Wallet Holder Name"
              />
              <Text style={RedeemStyles.label}>Wallet / Account Number</Text>
              <TextInput
                style={RedeemStyles.input}
                placeholder="Enter Account Number"
                keyboardType="phone-pad"
              />
            </View>
          )}
        </View>
        <View>
          <View>
            <TouchableOpacity onPress={handleProceed} style={RedeemStyles.button}>
              <Text style={RedeemStyles.buttonTitel}>Proceed</Text>
              <WhiteArrowIcon />
            </TouchableOpacity>
          </View>
          {isLoading && <Loader />}
          <SuccessPopup
            visible={showSuccess}
            amount="1890"
            name="Jakob Rizza"
            number="03035610661"
            onClose={() => setShowSuccess(false)}
          />
        </View>
        <View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RedeemCashScreen;

