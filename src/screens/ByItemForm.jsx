import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Alert } from 'react-native';
import BackArrowIcon from '../assets/SVGLOGOS/BackArrowSvgIcon';
import { useNavigation } from '@react-navigation/native';
import { BuyItemStyles } from '../ui/BuyItemStyle';
import GoldRap from '../assets/goldrap.png';
import RedRap from '../assets/redrap.png';
import BagImage from '../assets/orderbag.png';
import CustomPicker from '../componentes/SelectInput';
import { FormStyles } from '../ui/BuyItemFormStyle';
import SelectPyment from '../componentes/SelectPyment';
import OrderConfirmationModel from '../componentes/OrderConfirmationModel';

const ByItemForm = () => {
    const navigation = useNavigation();
    const [cartons, setCartons] = useState('');
    const [selectUnit, setSelectUnit] = useState("Small");
    const units = ['Small', 'Medium', 'Large'];
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [modelActive, setModelActive] = useState(false);

    return (
        <ScrollView style={FormStyles.container} contentContainerStyle={{ paddingBottom: 20 }}>
            <View style={FormStyles.header}>
                <View style={BuyItemStyles.iconBG}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackArrowIcon />
                    </TouchableOpacity>
                </View>
                <Text style={BuyItemStyles.headerTitle}>Buy Item</Text>
            </View>
            <View style={FormStyles.imagesRow}>
                <View style={FormStyles.sideImages}>
                    <Image source={GoldRap} style={FormStyles.smallImage} />
                    <Image source={RedRap} style={FormStyles.smallImage} />
                </View>
                <Image source={BagImage} style={FormStyles.mainImage} />

                <View style={FormStyles.sideImages}>
                    <Image source={GoldRap} style={FormStyles.smallImage} />
                    <Image source={RedRap} style={FormStyles.smallImage} />
                </View>
            </View>
            <Text style={[FormStyles.formTitle, { marginTop: 16 }]}>New Order</Text>
            <View style={{ marginBottom: 12 }}>
                <Text style={FormStyles.label}>Product / Suppliers</Text>
                <CustomPicker />
            </View>
            <View style={{ marginBottom: 12 }}>
                <Text style={FormStyles.label}>Number of Carton</Text>
                <TextInput
                    style={FormStyles.input}
                    value={cartons}
                    onChangeText={setCartons}
                    keyboardType="numeric"
                    placeholder="0"
                />
            </View>
            <Text style={FormStyles.orderTitel}>Order Unit</Text>
            <View style={FormStyles.unitBar}>
                {units.map((unit) => {
                    const selectedUnit = selectUnit === unit;
                    return (
                        <TouchableOpacity
                            key={unit}
                            style={[FormStyles.unitButton, selectedUnit && FormStyles.unitButtonSelected]}
                            onPress={() => setSelectUnit(unit)}
                        >
                            <Text
                                style={[FormStyles.unitButtonText, selectedUnit && FormStyles.unitButtonTextSelected]}
                            >
                                {unit}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <Text style={FormStyles.paymentTitel}>Payment Method</Text>
            <SelectPyment
                title="COD"
                selected={selectedPayment === 'COD'}
                onIconPress={() => setSelectedPayment('COD')}
            />
            <SelectPyment
                title="Cash"
                selected={selectedPayment === 'Cash'}
                onIconPress={() => setSelectedPayment('Cash')}
            />
            {selectedPayment ? (
                <>
                    <TouchableOpacity
                        style={FormStyles.placeBtn}
                        onPress={() => setModelActive(true)}
                    >
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                            Place Order
                        </Text>
                    </TouchableOpacity>

                    <OrderConfirmationModel
                        visible={modelActive}
                        onClose={() => setModelActive(false)}
                        productName="Product 1"
                        cartons={cartons || 0}
                        unit={selectUnit}
                        paymentMethod={selectedPayment}
                        orderAmount={10500}
                        tax={200}
                        onConfirm={() => {
                            setModelActive(false);
                            Alert.alert(
                                'Order Placed',
                                `Your order with ${selectedPayment} payment method is placed!`
                            );
                        }}
                    />


                </>
            ) : (
                <Text style={[FormStyles.endText, { marginTop: 20 }]}>Place Order</Text>
            )}

        </ScrollView>
    );
};

export default ByItemForm;
