import React from 'react';
import { View, StyleSheet } from 'react-native';
import SwipeButton from 'react-native-swipe-button';
// import SwipeButton from './SwipButton';
// import SwipeButton from 'rn-swipe-button'
// import SwipeButton from 'rn-swipe-button';
import BtnArrowIcon from '../assets/OrderSvg/BtnArroeIcon';

const SwipeConfirmButton = ({ onSwipeSuccess }) => {
  return (
    <SwipeButton
      disabled={false}
      swipeSuccessThreshold={70} 
      height={56}
      width="100%"
      title="Slide to Confirm Order"
      titleFontSize={16}
      titleColor="#fff"
      railBackgroundColor="#E85D43"
      railBorderRadius={100}
      railFillBackgroundColor="#28a745" 
      thumbIconBackgroundColor="#fff"
      thumbIconComponent={() => (
        <View style={styles.iconWrapper}>
          <BtnArrowIcon />
        </View>
      )}
      onSwipeSuccess={onSwipeSuccess}
    />
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SwipeConfirmButton;
