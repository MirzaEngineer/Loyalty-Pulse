import React from 'react'
import { View,Pressable,Text, StyleSheet } from 'react-native'
import { styles } from '../ui/styles'

const Button = ({title,style,onPress,onPres}) => {
  return (
    <Pressable style={[styles.button,style]} 
    onPress={onPres}
    // onPress={()=>
      
    //   navigation.navigate("TwoStep")}
    >
              <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
  )
}

export default Button
