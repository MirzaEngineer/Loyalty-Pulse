import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import CubeLogoSvg from '../assets/SVGLOGOS/CubeLogo';
import SideArroeIcon from '../assets/SVGLOGOS/SideArrow';
import CashLogoSVG from '../assets/SVGLOGOS/CashLogo';

const RedeemTab = ({navigation}) => {
    return (
        <View>
            <Text style={RedeemStyles.heddingTital}>Select Option to Redeem</Text>

            <TouchableOpacity onPress={() => navigation.navigate("BuyItem")}>
                <View style={RedeemStyles.barContainer}>
                    <View style={RedeemStyles.leftSide}>
                        <View style={RedeemStyles.logoBG}>
                            <CubeLogoSvg />
                        </View>
                        <View>
                            <Text style={RedeemStyles.barTital}>Buy Item</Text>
                            <Text style={RedeemStyles.barDiscription}>You can use your earned points to{"\n"} purchase any items you like. </Text>
                        </View>

                    </View>
                    <View>
                        <SideArroeIcon />
                    </View>


                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("RedeemCash")}>
                <View style={RedeemStyles.barContainer}>
                    <View style={RedeemStyles.leftSide}>
                        <View style={RedeemStyles.logoBG}>
                            <CashLogoSVG />
                        </View>
                        <View>
                            <Text style={RedeemStyles.barTital}>Redeem to Cash</Text>
                            <Text style={RedeemStyles.barDiscription}>Convert Your Earned Points Into{"\n"} Real Cash</Text>
                        </View>

                    </View>
                    <View>
                        <SideArroeIcon />
                    </View>


                </View>
            </TouchableOpacity>
        </View>
    );
};

export default RedeemTab;

const RedeemStyles = StyleSheet.create({
    heddingTital: {
        color: "#18191B",
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 24

    },
    barContainer: {
        backgroundColor: "#FFF",
        padding: 16,
        marginTop: 16,
        marginHorizontal: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#E6E9EF",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between"
    },
    leftSide: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    logoBG: {
        width: 64,
        height: 64,
        backgroundColor: "#FFE9E5",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    barTital: {
        color: "#18191B",
        fontSize: 14,
        fontWeight: "600",
    },
    barDiscription: {
        color: "#5C6670",
        fontSize: 12,
        fontWeight: "400",
    },
})
