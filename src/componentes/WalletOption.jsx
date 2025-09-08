import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const WalletOption = ({
  walletKey,
  label,
  selectedWallet,
  onSelect,
  styles,
}) => {
  const isSelected = selectedWallet === walletKey;

  return (
    <View>
      <TouchableOpacity
        style={styles.selectPayment}
        onPress={() => onSelect(walletKey)}
      >
        <Text style={styles.jazzText}>{label}</Text>
        <View
          style={[
            styles.radioOuter,
            isSelected && styles.radioOuterSelected,
          ]}
        >
          {isSelected && <View style={styles.radioInner} />}
        </View>
      </TouchableOpacity>

      {isSelected && (
        <View style={styles.walletDetailsCard}>
          <Text style={styles.label}>Wallet Holder Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Wallet Holder Name"
          />
          <Text style={styles.label}>Wallet / Account Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Account Number"
            keyboardType="phone-pad"
          />
        </View>
      )}
    </View>
  );
};

export default WalletOption;
