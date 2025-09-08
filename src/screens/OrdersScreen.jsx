import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import OrderHeader from '../componentes/OrderHeader';
import DowenArrowIcon from '../assets/OrderSvg/DowenArrow';
import { OrderStyles } from '../ui/OrderStyle';
import OrderDetailList from '../componentes/OrderDetailList';
import PlusIcon from '../assets/OrderSvg/PluseIcon';
import { useNavigation } from '@react-navigation/native';

const OrdersScreen = () => {
  const navigation = useNavigation()
  const ordersArray = [
    { id: 1, order: 991264, date: "12-04-2025 | 1:04 PM", name: "Cup Cake - Large Cotton", status: "Inprocess" },
    { id: 2, order: 991265, date: "11-04-2025 | 3:20 PM", name: "Chocolate Cake - Medium", status: "Completed" },
    { id: 3, order: 991266, date: "10-04-2025 | 12:15 PM", name: "Vanilla Cake - Small", status: "Rejected" },
    { id: 4, order: 991267, date: "09-04-2025 | 5:45 PM", name: "Strawberry Cake - Large", status: "Inprocess" },
  ];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={OrderStyles.container}>
        <OrderHeader />
        <View style={OrderStyles.historyContainer}>
          <Text style={OrderStyles.historyHeading}>Order History</Text>
          <TouchableOpacity style={OrderStyles.monthHistory}>
            <Text style={OrderStyles.monthText}>This month</Text>
            <DowenArrowIcon />
          </TouchableOpacity>
        </View>
        <OrderDetailList tag={"Inprocess"} />
        <OrderDetailList tag={"Completed"} />
        <OrderDetailList tag={"Rejected"} />
        <OrderDetailList tag={"Inprocess"} />
      </ScrollView>
      <TouchableOpacity style={styles.fab} activeOpacity={0.8} onPress={()=>navigation.navigate("ItemForm")}>
        <PlusIcon/>
      </TouchableOpacity>
    </View>
  );
};
export default OrdersScreen;
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 100,
    right: 20,
    backgroundColor: "#18191B",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  fabText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});