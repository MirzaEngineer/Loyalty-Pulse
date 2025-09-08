import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, ActivityIndicator } from 'react-native';
import BtnArrowIcon from '../assets/OrderSvg/BtnArroeIcon';
import GoodArrow from '../assets/OrderSvg/GoodArrow';
// import GoodIcon from '../assets/OrderSvg/GoodIcon';

const SwipeButton = ({ onConfirm }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const slideAnim = useRef(new Animated.Value(0)).current;
  const maxSlide = 240; // adjust to button width - icon width - padding

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !loading && !success,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // Only respond if horizontal swipe distance > vertical distance
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy) && !loading && !success;
      },
      onPanResponderMove: (_, gestureState) => {
        // Clamp slide between 0 and maxSlide
        let newX = Math.min(Math.max(gestureState.dx, 0), maxSlide);
        slideAnim.setValue(newX);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > maxSlide * 0.7) {
          // Swipe completed
          Animated.timing(slideAnim, {
            toValue: maxSlide,
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setSuccess(true);
              if (onConfirm) onConfirm();
            }, 2000);
          });
        } else {
          // Swipe canceled - reset position
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const backgroundColor = success
    ? '#22BB33'
    : loading
    ? '#f3b8ae'
    : '#E85D43';

  return (
    <View style={[styles.confirmBtn, { backgroundColor }]}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.iconWrapper, { transform: [{ translateX: slideAnim }] }]}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#E85D43" />
        ) : success ? (
          // <GoodIcon />
          // <BtnArrowIcon />
          <GoodArrow/>
        ) : (
          <BtnArrowIcon />
        )}
      </Animated.View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.confirmText}>
          {loading ? 'Confirming...' : success ? "Woohoo, it's done!" : 'Slide to Confirm Order'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmBtn: {
    width: 300,
    height: 56,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    position: 'relative',
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 12,
  },
  confirmText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default SwipeButton;


// import React, { useState } from 'react';
// import { TouchableOpacity, Text, View, ActivityIndicator, StyleSheet } from 'react-native';
// import BtnArrowIcon from '../assets/OrderSvg/BtnArroeIcon';

// const ConfirmOrderButton = ({ onFinalConfirm }) => {
//   const [status, setStatus] = useState('idle'); // idle | loading | success

//   const handlePress = () => {
//     if (status !== 'idle') return;

//     setStatus('loading');

//     setTimeout(() => {
//       setStatus('success');

//       setTimeout(() => {
//         setStatus('idle');
//         onFinalConfirm && onFinalConfirm();
//       }, 1500);
//     }, 2000);
//   };

//   return (
//     <TouchableOpacity
//       style={[
//         styles.button,
//         status === 'loading' && styles.loadingBG,
//         status === 'success' && styles.successBG
//       ]}
//       onPress={handlePress}
//       activeOpacity={0.8}
//     >
//       {/* Left side icon */}
//       <View style={styles.iconContainer}>
//         {status === 'loading' ? (
//           <ActivityIndicator color="#fff" />
//         ) : status === 'success' ? (
//           <Text style={{ fontSize: 18 }}>✅</Text>
//         ) : (
//           <BtnArrowIcon />
//         )}
//       </View>

//       {/* Center text */}
//       <Text style={styles.text}>
//         {status === 'loading'
//           ? 'Confirming...'
//           : status === 'success'
//           ? 'Order Confirmed!'
//           : 'Slide to Confirm Order'}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 20,
//     borderRadius: 30,
//     backgroundColor: '#E85D43', // default orange
//   },
//   iconContainer: {
//     marginRight: 10, // space between icon & text
//   },
//   text: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   loadingBG: {
//     backgroundColor: '#f8b4a5', // light orange when loading
//   },
//   successBG: {
//     backgroundColor: '#28a745', // green when success
//   },
// });

// export default ConfirmOrderButton;
