import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchSvgIcon from '../assets/SVGLOGOS/SearchSvgIcon';

const CustomInputItem = () => {
  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#999"
      />
      <SearchSvgIcon/>
      
    </View>
  );
};

export default CustomInputItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E4EBF0',
    marginHorizontal: 20,
    marginVertical: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  input: {
    flex: 1, 
    marginLeft: 8,
    fontSize: 16,
    color: '#000',
  },
});
