import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import Sussess from '../assets/ok.jpg'
import StarIcon from '../assets/SVGLOGOS/StarSVG';
import BarCodeIcon from '../assets/TabIcon/BarCodeSvgIcon';
import ArrowIcon from '../assets/ProfileSvg/ArrowSvgIcon';
import { useNavigation } from '@react-navigation/native';
import PointStarIcon from '../assets/ScannSvg/PointStar';

const SuccessPopup = ({ visible, amount, name, number, onClose,newScan }) => {
    const navigation = useNavigation()
    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.popup}>
                    {/* <Image source={require('../assets/successgif.gif')} style={styles.gif} /> */}
                    {/* <Image source={Sussess} style={styles.gif}/> */}
                    <Image source={Sussess} style={styles.gif} />


                    <Text style={styles.title}>You have earned</Text>
                    <View style={styles.pointCard}>
                        <View style={{
                            backgroundColor:"#FFF",
                            opacity:0.7
                        }}>
                            <PointStarIcon/>

                        </View>
                    
                        <Text style={styles.pointNumber}>125 Points</Text>
                    </View>
                    <View style={styles.totalPointWrapper}>
                        <Text style={styles.totalTitel}>Your Total Points:</Text>
                        <Text style={styles.totalNumber}>12,500</Text>

                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.replace("ScanModal")}
                        >
                            <Text style={styles.btnText}>Scan Next Item</Text>
                            <BarCodeIcon />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            style={styles.history}
                            onPress={() => navigation.navigate("Home", { screen: "Layout" })}
                        >
                            <Text style={styles.historyText}>Go Scan History</Text>
                            <ArrowIcon />
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        </Modal>
    );
};

export default SuccessPopup;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(24,25,27,0.80)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    popup: {
        paddingTop: 0,
        paddingRight: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        alignSelf: 'stretch',
        backgroundColor: "#FFF",
        borderRadius: 16,

    },
    gif: {
        width: 141,
        height: 141
    },
    title: {
        color: '#18191B',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 32,
    },
    pointCard: {
        backgroundColor: "#FFE9E5",
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderRadius: 16
    },
    pointNumber: {
        fontSize: 28,
        fontWeight: "600",
        color: "#18191B"
    },
    totalPointWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",   
    paddingBottom: 8,               
    marginBottom: 8                 
},
    totalTitel: {
        fontSize: 16,
        fontWeight: "600",
        color: "#18191B"
    },
    totalNumber: {
        fontSize: 16,
        fontWeight: "600",
        color: "#E85D43"
    },
    button: {
        backgroundColor: "#E85D43",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 100,
        justifyContent: "center",
        alignSelf: "stretch",
        paddingVertical: 16,
        paddingHorizontal: 90,
        gap: 8
    },
    btnText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFF",

    },
    history: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginVertical:10
    },
    historyText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#18191B",
    },
});
