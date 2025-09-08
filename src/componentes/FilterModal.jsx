import React, { useState } from 'react';
import { Modal, FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Button from './Button';

const FilterModal = ({ visible, onClose }) => {
  // const handleDateChange = (date) => {
  //   console.log('Selected Date:', date);
  // };
  const data = [{
    id: 1,
    title: "This month"
  },
  {
    id: 2,
    title: "Last week",
  },
  {
    id: 3,
    title: "Last month"
  },
  ]
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <View style={ModelDesign.masterContainer}>
        <View style={ModelDesign.container}>

          {/* Header */}
          <View style={ModelDesign.header}>
            <Text style={ModelDesign.headerTitle}>Filters</Text>
            <TouchableOpacity onPress={() => onClose()}>
              <Text style={ModelDesign.closeIcon}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Modal Body */}
          <View style={ModelDesign.itemBar}>
            <Text style={ModelDesign.barText}>this month</Text>
            <Text>⭕</Text>
          </View>
          {/* <View style={ModelDesign.itemBar}>
            <Text style={ModelDesign.barText}>Last week</Text>
            <Text>⭕</Text>
          </View>
          <View style={ModelDesign.itemBar}>
            <Text style={ModelDesign.barText}>Last month</Text>
            <Text>⭕</Text>
          </View> */}
          <View style={ModelDesign.itemClander}>
            <View style={ModelDesign.calanderFlex}>
              <Text style={ModelDesign.barText}>Calander</Text>
              <Text>⭕</Text>
            </View>

            <View >
              <Calendar />
              {/* <Calendar onSelectDate={handleDateChange} /> */}
            </View>
          </View>
            <Button title="Apple Filters" style={{marginTop:10}} />



          {/* <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={ModelDesign.itemBar}>
                <Text style={ModelDesign.barText}>{item.title}</Text>
                <Text>⭕</Text>
              </View>
            )}
            ListFooterComponent={
              <View style={ModelDesign.calanderCard}>
                <View>
                  <Text>calendar</Text>
                  <View/>
              </View>
            }
          /> */}
          {/* <View style={ModelDesign.calanderCard}>
            <Text>calendar</Text>
          </View> */}
        </View>
      </View>

    </Modal>
  );
};

export default FilterModal;

const ModelDesign = StyleSheet.create({
  masterContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: 'rgba(24, 25, 27, 0.80)'
  },
  container: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 600,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  closeIcon: {
    fontSize: 20,
    color: '#E82004',
  },
  itemBar: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#E6E9EF",
    padding: 16,
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  barText: {
    color: "#18191B",
    fontSize: 14,
    fontWeight: "400"
  },
  // calanderCard: {
  //   backgroundColor: "#FFF",
  //   padding: 16,
  //   borderWidth: 1,
  //   borderRadius: 16,
  //   borderColor: "red",
  //   marginTop: 10
  // },
  itemClander: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#E6E9EF",
    padding: 16,
    marginTop: 10,
  },
  calanderFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },

})