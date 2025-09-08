import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SuccessModal({ visible, onClose, onScanAgain }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalBox}>
          <Text style={styles.modalTitle}>✅ Scan Successful</Text>
          <Text style={styles.modalText}>
            Your QR code has been scanned successfully.
          </Text>

          <View style={styles.modalBtns}>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#E85D43' }]}
              onPress={onClose}
            >
              <Text style={styles.btnText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#333' }]}
              onPress={onScanAgain}
            >
              <Text style={styles.btnText}>Scan Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: { fontSize: 20, fontWeight: '700', marginBottom: 10, color: '#333' },
  modalText: { fontSize: 14, textAlign: 'center', color: '#666', marginBottom: 20 },
  modalBtns: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  btn: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: { color: 'white', fontWeight: '600', fontSize: 16 },
});
