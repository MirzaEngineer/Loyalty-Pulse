import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FormStyles } from '../ui/BuyItemFormStyle';

export default function SelectPyment({ title, selected, onIconPress }) {
  return (
    <View style={FormStyles.paymentSelect}>
      {/* Sirf icon clickable */}
      <TouchableOpacity onPress={onIconPress}>
        <View
          style={[
            Circle.container,
            selected && Circle.selected
          ]}
        />
      </TouchableOpacity>

      {/* Text normal, click nahi hoga */}
      <Text style={FormStyles.paymentSelectTitle}>{title}</Text>
    </View>
  );
}

const Circle = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#e6e9efe7',
    borderRadius: 100,
    backgroundColor: 'transparent',
  },
  selected: {
    backgroundColor: '#E85D43',
    borderColor: '#E85D43',
  },
});
