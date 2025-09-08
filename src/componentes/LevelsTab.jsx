import { View, Text, StyleSheet } from 'react-native';
import SilverLog from '../assets/SVGLOGOS/SilverSVG';
import GoldLogo from '../assets/SVGLOGOS/GoldSVG';
import GoldLockIcon from '../assets/SVGLOGOS/GoldLockSVG';
import BluePlatinum from '../assets/SVGLOGOS/BluePlatinumSVG';
import BlueLockIcon from '../assets/SVGLOGOS/BlueLockSVG';
import BarCodeLogo from '../assets/SVGLOGOS/barCodeSVG';
import LineSvgLogo from '../assets/SVGLOGOS/LineSVG';
import DoubleStarLogo from '../assets/SVGLOGOS/DoubleStarSVG';
import FlagLogo from '../assets/SVGLOGOS/FlagSVG';

const LevelsTab = () => {
    return (
        <View style={LevelStyle.container}>
            <View style={LevelStyle.cardContainer}>
                <Text style={LevelStyle.cardTitle}>Levels</Text>
                {/* Silver */}
                <View style={LevelStyle.silverBar}>
                    {/* Left */}
                    <View style={LevelStyle.leftSide}>

                        <View>
                            <SilverLog />
                        </View>

                        <View>
                            <Text style={LevelStyle.barTital}>Silver</Text>
                            <Text style={LevelStyle.barNum}>Required No. Scans: 250</Text>
                        </View>
                    </View>
                    {/* Right */}
                    <View style={LevelStyle.rightSide}>
                        <Text style={LevelStyle.rightText}>Achieved</Text>
                    </View>

                </View>
                {/* SilverEnd */}

                {/* Gold */}

                <View style={LevelStyle.goldBar}>
                    <View style={LevelStyle.leftSide}>

                        <View>
                            <GoldLogo />
                        </View>

                        <View>
                            <Text style={LevelStyle.barTital}>Gold</Text>
                            <Text style={LevelStyle.barNum}>Required No. Scans: 1000</Text>
                        </View>
                    </View>
                    {/* Right */}
                    <View style={LevelStyle.rightSide}>
                        <View style={LevelStyle.lockedWrapper}>
                            <Text style={LevelStyle.goldText}>Locked</Text>
                            <GoldLockIcon />
                        </View>
                    </View>

                </View>
                {/* Gold End */}

                {/* Blue */}
                <View style={LevelStyle.blueBar}>
                    <View style={LevelStyle.leftSide}>

                        <View>
                            <BluePlatinum />
                        </View>

                        <View>
                            <Text style={LevelStyle.barTital}>Platinum</Text>
                            <Text style={LevelStyle.barNum}>Required No. Scans: 2000</Text>
                        </View>
                    </View>
                    {/* Right */}
                    <View style={LevelStyle.rightSide}>
                        <View style={LevelStyle.lockedWrapperBlue}>
                            <Text style={LevelStyle.blueText}>Locked</Text>
                            <BlueLockIcon />
                        </View>
                    </View>

                </View>
                {/* Blue End */}










                <Text style={LevelStyle.footerText}>Level upgrading is depended upon the number of scans you have performed actively.</Text>


            </View>
            {/* ScoundCard */}
            <View style={LevelStyle.cardContainer}>
                <Text style={LevelStyle.cardTitle}>How it works</Text>
                <View style={LevelStyle.workBarContainer}>
                    <View style={LevelStyle.workBar}>
                        <Text style={LevelStyle.workStep}>Step 1</Text>
                        <Text style={LevelStyle.workDiscription}>Scan the QR code which is given on{"\n"} the product box</Text>
                    </View>
                    <BarCodeLogo />
                </View>
                {/* <View style={LevelStyle.linePosition}>
                    <LineSvgLogo/>
                </View> */}
                <View style={LevelStyle.workBarContainer}>
                    <View style={LevelStyle.workBar}>
                        <Text style={LevelStyle.workStep}>Step 2</Text>
                        <Text style={LevelStyle.workDiscription}>Earn points via qr cde scanning from{"\n"} the product box</Text>
                    </View>
                    <DoubleStarLogo/>
                </View>
                <View style={LevelStyle.workBarContainer}>
                    <View style={LevelStyle.workBar}>
                        <Text style={LevelStyle.workStep}>Step 3</Text>
                        <Text style={LevelStyle.workDiscription}>Redeem your point into cash and</Text>
                    </View>
                    <FlagLogo/>
                </View>
                

            </View>
        </View>
    );
};

export default LevelsTab;

const LevelStyle = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#FFF",
        padding: 16,
        flexDirection: "column",
        borderRadius: 20,
        marginHorizontal: 20,
        marginTop: 20

    },
    cardTitle: {
        color: "#18191B",
        fontSize: 18,
        fontWeight: "600",
    },
    silverBar: {
        padding: 14,
        backgroundColor: "#DCE5E8",
        // borderWidth: 1,
        borderColor: "#A7B2BA",
        borderRadius: 8,
        marginTop: 10,
        flexDirection: "row"
    },
    leftSide: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    barTital: {
        color: "#18191B",
        fontSize: 20,
        fontWeight: "600"
    },
    barNum: {
        color: "#5C6670",
        fontSize: 12,
        fontWeight: "400"
    },
    rightSide: {

    },
    rightText: {
        backgroundColor: "#D1FFE9",
        borderRadius: 4,
        // borderWidth:1,
        paddingHorizontal: 4,
        paddingVertical: 2,
        color: "#18191B",
        fontSize: 11,
        fontWeight: "400"
    },
    goldBar: {
        padding: 14,
        backgroundColor: "#F2DD82",
        borderColor: "#F2DD82",
        borderRadius: 8,
        marginTop: 10,
        flexDirection: "row"
    },
    goldText: {

        color: "#EAAA15",
        fontSize: 11,
        fontWeight: "400",
    },
    lockedWrapper: {
        backgroundColor: "#FFF6CD",

        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        borderRadius: 4,
        paddingHorizontal: 4,
        paddingVertical: 2,
    },
    blueBar: {
        padding: 14,
        backgroundColor: "#B9C6FA",
        borderColor: "#3469ED",
        borderRadius: 8,
        marginTop: 10,
        flexDirection: "row"
    },
    blueText: {
        color: "#3469ED",
        fontSize: 11,
        fontWeight: "400",
    },
    lockedWrapperBlue: {
        backgroundColor: "#DCE6FF",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        borderRadius: 4,
        paddingHorizontal: 4,
        paddingVertical: 2,
    },
    footerText: {
        color: "#5C6670",
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 18,
        marginTop: 10
    },
    workBarContainer: {
        marginTop: 10,
        padding: 14,
        gap: 8,
        backgroundColor: "#F1F6F9",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        justifyContent: "space-between"
    },
    workBar: {
        flexDirection: "column",
        gap: 8

    },
    workStep: {
        color: "#18191B",
        fontSize: 18,
        fontWeight: "600"
    },
    workDiscription: {
        color: "#5C6670",
        fontSize: 12,
        fontWeight: "400"
    },
    // linePosition:{
    //     position:"absolute",
    //     bottom:-10,
    //     left:70,
    // }

})