import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import HomeIcon from '../assets/TabIcon/HomeSvgIcon';
import LayoutIcon from '../assets/TabIcon/LayoutSvgIcon';
import BarCodeIcon from '../assets/TabIcon/BarCodeSvgIcon';
import ProfileIcon from '../assets/TabIcon/ProfileSvgIcon';
import OrderIcon from '../assets/TabIcon/OrderSvgIcon';

const CustomTabBar = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Home Button */}
      <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
        <View style={styles.iconBG}>
          <HomeIcon/>
        </View>
      </TouchableOpacity>

     {/* Settings Button */}
      <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Layout')}>
        <LayoutIcon/>
      </TouchableOpacity>

      {/* Center Scan Button */}
      <TouchableOpacity style={styles.centerButtonWrapper} onPress={() => navigation.navigate('ScanModal')}>
        <View style={styles.centerIcon}>
          {/* <Icon name="scan" size={24} color="#fff" /> */}
          <BarCodeIcon/>
        </View>
      </TouchableOpacity>
       {/* Orders Button */}
      <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Orders')}>
        <OrderIcon/>
      </TouchableOpacity>

      {/* Profile Button */}
      <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>
        <ProfileIcon/>
      </TouchableOpacity>

      

    </View>
  );
};

export default CustomTabBar;
const styles = StyleSheet.create({
  container: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  borderRadius: 100,
  borderBottomWidth: 1,
  borderBottomColor: "rgba(0, 0, 0, 0.10)",
  padding: 8,
  position: 'absolute',
  bottom: 2,
  left: 10,
  right: 10,
  justifyContent: 'space-around',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 6 }, 
  shadowOpacity: 0.1,
  shadowRadius: 6,

  elevation: 6, // Android ke liye bhi same effect
},

  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  centerButtonWrapper: {
    // top: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerIcon: {
    backgroundColor: '#C43400',
    width:60,
    height:60,
    padding:8,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:100,
    // flexDirection:"column",

  },
  iconBG:{
    width:60,
    height:60,
    backgroundColor:"#F1F6F9",
    paddingHorizontal:13,
    paddingVertical:8,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:100
  }
  
});
