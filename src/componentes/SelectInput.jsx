import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet, Text } from 'react-native';

const CustomPicker = () => {
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}
        dropdownIconColor="#555"
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="python" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    paddingVertical:7,
    marginVertical:10,
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E4EBF0',
    backgroundColor: '#FFF',
  },
  picker: {
    width: '100%',
    height: 50,
  },
});

export default CustomPicker;
