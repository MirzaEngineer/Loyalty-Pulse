import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
} from 'react-native';
import BtnArrowIcon from '../assets/OrderSvg/BtnArroeIcon';
import SwipButton from './SwipButton';
import SwipeConfirmButton from './SwipeConfirmButton';

export default function OrderConfirmationModel({
    visible,
    onClose,
    onConfirm,
    productName,
    cartons,
    unit,
    paymentMethod,
    orderAmount,
    tax,
}) {
    const totalAmount = orderAmount + tax;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    {/* Header */}
                    <Text style={styles.header}>Order Confirmation</Text>

                    {/* Order Details */}
                    <View style={styles.detailsBox}>
                        <DetailRow label="Product / Suppliers" value={productName} bold />
                        <DetailRow label="Number of Carton" value={cartons} />
                        <DetailRow label="Order Unit" value={unit} bold />
                        <DetailRow label="Payment Method" value={paymentMethod} bold />
                    </View>

                    {/* Amounts */}
                    <View style={styles.amountRow}>
                        <Text style={styles.amountLabel}>Order Amount (PKR)</Text>
                        <Text style={styles.amountValue}>{orderAmount.toLocaleString()}</Text>
                    </View>
                    <View style={styles.amountRow}>
                        <Text style={styles.amountLabel}>Tax/Fee (PKR)</Text>
                        <Text style={styles.amountValue}>{tax.toLocaleString()}</Text>
                    </View>

                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Total Amount</Text>
                        <Text style={styles.totalValue}>{totalAmount.toLocaleString()}</Text>
                    </View>
                    {/* Swip BTN */}
                    <SwipButton/>
                    {/* Swip BTN */}
                    {/* <SwipeConfirmButton onSwipeSuccess={onConfirm} /> */}




                    {/* Back Button */}
                    <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
                        <Text style={{ color: '#18191B', fontSize: 16, fontWeight: "600", textAlign: 'center' }}>{` < Back`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

function DetailRow({ label, value, bold }) {
    return (
        <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>{label}</Text>
            <Text style={[styles.detailValue, bold && { fontWeight: 'bold' }]}>
                {value}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#00000066',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 16,
        padding: 16
    },
    container: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 10,
            },
            android: { elevation: 5 },
        }),
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    detailsBox: {
        backgroundColor: '#F1F6F9',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        flexDirection: "column",
        gap: 16,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    detailLabel: {
        fontSize: 14,
        color: '#555',
    },
    detailValue: {
        fontSize: 14,
        color: '#111',
    },
    amountRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
        paddingVertical: 10
    },
    amountLabel: { fontSize: 12, fontWeight: "400", color: '#5C6670' },
    amountValue: { fontSize: 16, fontWeight: "600", color: '#111' },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
        borderTopWidth: 1,
        borderColor: '#eee',
        paddingVertical: 18,
        borderBottomWidth: 1
    },
    totalLabel: { fontSize: 16, fontWeight: '400', color: '#5C6670' },
    totalValue: { fontSize: 20, fontWeight: '600', color: '#E85D43' },

    confirmBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E85D43',
        paddingVertical: 12,
        borderRadius: 100,
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
    },

    confirmText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },

});
