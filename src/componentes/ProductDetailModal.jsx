import React from 'react';
import { Modal, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import StarIcon from '../assets/SVGLOGOS/StarSVG'; // if needed
import Image2 from '../assets/img2.png';
import Button from './Button';

const ProductDetailModal = ({ visible, onClose, product }) => {
//   if (!product) return null;

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>

          {/* Header row with title and close */}
          <View style={styles.topRow}>
            <Text style={styles.topTitle}>Product Details</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
          </View>

          {/* Product image */}
          <Image source={Image2} style={styles.productImage} />

          {/* Product Title */}
          <Text style={styles.title}>This is the title of product</Text>

          {/* Description */}
          <Text style={styles.subtitle}>Description</Text>
          <Text style={styles.description}>
            Take your music anywhere! This compact, powerful portable speaker delivers crisp,
            booming sound with long battery life—perfect for adventures, parties, or chilling at home.
            Water-resistant and built to last!
          </Text>

          {/* Price Row */}
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Price</Text>
            <View style={styles.priceRight}>
              <StarIcon />
              <Text style={styles.price}>400</Text>
            </View>
          </View>

          {/* Buy Button */}
          <TouchableOpacity style={styles.buyButton}>
            {/* <Text style={styles.buyText}>Buy With {product.price} Points</Text> */}
            <Button title={"Buy With 400 Points"}/>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ProductDetailModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  topTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#18191B',
  },
  closeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#999',
  },
  productImage: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#18191B',
  },
  subtitle: {
    marginTop: 12,
    fontWeight: '600',
    fontSize: 13,
    color: '#888',
  },
  description: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#E6E9EF",
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  priceLabel: {
    fontWeight: '600',
    fontSize: 14,
  },
  priceRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6, 
  },
  price: {
    color: '#18191B',
    fontWeight: '600',
    fontSize:14,
  },
  buyButton: {
    marginTop:16,
  },
  buyText: {
    color: '#fff',
    fontWeight: '700',
  },
});
