import React from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from '../ui/styles'


const LinearBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={['#FFE9E5', '#E85D43']}

      start={{ x: 0, y: 0 }}
      end={{ x: 1/3, y: -0.1 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  )
}

export default LinearBackground

// const styles = StyleSheet.create({
//   container: {
//   flex: 1,
//   // paddingTop: 50,
//   // paddingHorizontal: 20,
// }
// })
