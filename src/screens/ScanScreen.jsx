import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Vibration } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { RNCamera } from 'react-native-camera';
import Loader from '../componentes/Loader';
import SuccessModal from '../componentes/SuccessModal';  
import SuccessPopup from '../componentes/SuccessPopup';
import { styles } from '../ui/ScannStyle';

export default function ScanScreen() {
  const navigation = useNavigation();
  const [isScanning, setIsScanning] = useState(false);
  const [scanned, setScanned] = useState(false); 
  const [loading, setLoading] = useState(false);  
  const [successModal, setSuccessModal] = useState(false);

  const handleScanSuccess = (e) => {
    if (scanned) return; 
    setScanned(true);
    console.log('QR Data:', e.data);
    Vibration.vibrate(200);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsScanning(false);
      setScanned(false); 
      setSuccessModal(true);  
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {isScanning ? (
        <RNCamera
          style={styles.cameraFill}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
          onBarCodeRead={handleScanSuccess}
        />
      ) : (
        <LinearGradient
          colors={['#000000', '#E85D43', '#000000']}
          locations={[0, 0.5, 1]}
          start={{ x: 0.5, y: 0.3 }}
          end={{ x: 0.5, y: 0.9 }}
          style={styles.cameraFill}
        />
      )}

      <View style={StyleSheet.absoluteFill}>
        <Text style={styles.headText}>Scan QR Code</Text>

        <View style={styles.scannContainer}>
          <View style={styles.instructionWrapper}>
            <Text style={styles.instructionText}>
              Bring QR code within the scan box
            </Text>
          </View>

          <TouchableOpacity
            style={styles.scanBox}
            activeOpacity={0.9}
            onPress={() => {
              setIsScanning(true);
              setScanned(false); 
            }}
          >
            {!isScanning && (
              <Text style={styles.tapText}>Tap to Scan</Text>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeBtn}
        >
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
      </View>
      <Loader visible={loading} />
      <SuccessPopup
        visible={successModal}
        onClose={() => {
          setSuccessModal(false);
          navigation.goBack();
        }}
        onScanAgain={() => {
          setSuccessModal(false);
          setIsScanning(true);
        }}
      />
    </View>
  );
}

