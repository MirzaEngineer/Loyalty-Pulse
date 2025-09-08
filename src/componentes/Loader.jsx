// componentes/Loader.jsx
import React from 'react';
import { Modal, View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const Loader = ({ visible }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <ActivityIndicator size="large" color="#ff5733" />
          <Text style={styles.text}>Loading app...</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)', // 👈 yahan opacity zyada kar di
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    // padding: 30,
    paddingTop:50,
    width:140,
    height:170,
    borderRadius: 16,
    alignItems: 'center',
  },
  text: {
    marginTop: 30,
    color: 'black',
    fontSize: 16,
    textAlign:"center"
  },
});
