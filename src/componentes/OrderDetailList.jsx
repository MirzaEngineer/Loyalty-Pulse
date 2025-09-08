import React from 'react'
import { OrderStyles } from '../ui/OrderStyle'
import { Text, View } from 'react-native'
import OrderBoxIcon from '../assets/OrderSvg/OrderBox'

const OrderDetailList = ({ tag }) => {
    return (
        <View style={OrderStyles.orderList}>
            <View style={OrderStyles.left}>
                <View style={OrderStyles.iconBG}>
                    <OrderBoxIcon />
                </View>

                <View style={OrderStyles.detailWrappe}>
                    <View style={OrderStyles.wrappe}>
                        <Text style={OrderStyles.orderNum}>Order #: 991264</Text>
                        <Text style={OrderStyles.orderDate}>12-04-2025 | 1:04 PM</Text>
                    </View>
                    <Text style={OrderStyles.orderTitle}>Cup Cake - Large Cotton</Text>
                </View>
            </View>
            <View>
                <Text 
                style={[
        OrderStyles.tagText,
        tag === "Completed" && { color: "#4CAF50", borderColor: "#4CAF50" },
        tag === "Rejected" && { color: "#F44336", borderColor: "#F44336" },
        tag === "Inprocess" && { color: "#EAAA15", borderColor: "#FFCB00" },
      ]}
                
                >{tag}</Text>
        </View>
      </View >
  )
}

export default OrderDetailList
