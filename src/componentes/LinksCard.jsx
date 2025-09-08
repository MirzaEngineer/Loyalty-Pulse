import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CashRedeemIcon from '../assets/ProfileSvg/CashSvgIcon'
import ArrowIcon from '../assets/ProfileSvg/ArrowSvgIcon'

const LinksCard = ({title,icon,style}) => {
  return (
    <View style={[CardStyles.box,style]}>
        <View style={CardStyles.boxColumn}>
            {/* <CashRedeemIcon/> */}
            {icon}
            <Text>{title}</Text>
        </View>
        <ArrowIcon/>
      
    </View>
  )
}

export default LinksCard
const CardStyles = StyleSheet.create({
  box: {
    width: '48%', // Fixed 172.5 ki jagah
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: "#F1F6F9",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E6E9EF",
    marginBottom: 12, // spacing between rows
  },
  boxColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 16,
    flex: 1
  }
});
