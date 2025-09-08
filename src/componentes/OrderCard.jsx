import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const OrderCard = ({title,number}) => {
    return (
        <View style={CardStyles.box}>
            <Text style={CardStyles.boxTitle}>{title}</Text>
            <Text style={CardStyles.boxNum}>{number}</Text>

        </View>
    )
}

export default OrderCard

const CardStyles = StyleSheet.create({

    box: {
        padding: 16,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,
        flex: 1,
        backgroundColor: "#F2F3F6",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#E6E9EF"
    },
    boxTitle: {
        color: "#5C6670",
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 14,
        textAlign:"center",

    },
    boxNum:{
        color: "#18191B",
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '600',
        textAlign:"center",
    }
})