import { StyleSheet } from "react-native";

export const LayoutStyle = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#E82004",
        borderBottomLeftRadius: 27,
        height: 240,
        borderBottomRightRadius: 27,
        paddingBottom: 20,
    },

    // scrollContent: {
    //     paddingBottom: 60,
    //     paddingTop: 10,
    //     backgroundColor: '#F5F5F5', // Or white, as needed
    //     flexGrow: 1,
    // },


    container: {
        // flex:1
        backgroundColor: "#E82004",
        height: 240,
        // flex:1,
        borderBottomLeftRadius: 27,
        borderBottomRightRadius: 27,
    },
    headTitle: {
        textAlign: "center",
        padding: 40,
        color: "#FFF",
        fontSize: 20,
        fontWeight: "600"
    },
    cardContainer: {
        backgroundColor: "#FFF",
        padding: 16,
        marginHorizontal: 20,
        borderRadius: 20,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    pointCard: {
        backgroundColor: "#FFCDC4",
        padding: 16,
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    pointTitle: {
        color: "#5C6670",
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 8,
    },

    leftSection: {
        flex: 1,
    },

    imageContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
    },

    pointImage: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#E0E0E0",
    },

    pointsText: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#000",
    },
    starWrapper: {
        position: 'absolute',
        top: 10,
        right: 10,
    },

    star1: {
        width: 151,
        height: 151,
        position: 'absolute',
        top: -40,
        right: -40,
    },

    star2: {
        width: 70,
        height: 70,
        position: 'absolute',
        top: -20,
        right: 70,
    },

    star3: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 70,
        right: 5,
    },
    silverContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 17
    },
    levelTag: {
        backgroundColor: "#BFC9CF",
        borderWidth: 1,
        borderColor: "#D8DEE2",
        borderRadius: 4
    },
    levelText: {
        color: "#18191B",
        textAlign: "center",
        fontSize: 13,
        fontWeight: "400",
        padding: 3
    },
    imageFlex: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    silverImage: {
        width: 24,
        height: 24
    },
    silverText: {
        color: "#18191B",
        fontSize: 18,
        fontWeight: "600"
    },
    scanWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 18
    },
    scanText: {
        color: "#5C6670",
        fontSize: 13,
        fontWeight: "400"
    },
    scanNum: {
        color: "#18191B",
        fontSize: 13,
        fontWeight: "400"
    },
    progressContainer: {
        flexDirection: 'row',
        gap: 6,
        marginTop: 10,
    },
    segment: {
        flex: 1,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
        overflow: 'hidden',

    },
    fullOrange: {
        backgroundColor: '#FF912C',
    },

    halfBlack: {
        backgroundColor: '#000',
    },

    empty: {
        backgroundColor: '#DADADA',
    },
    buttonWrapper: {
        backgroundColor: '#BFC9CF',
        marginHorizontal: 20,
        borderRadius: 40,
        marginTop: 17,

        padding: 3
    },
    // btnFlex:{
    //     flexDirection:"row",
    //     alignItems:"center",
    //     justifyContent:"space-between"
    // },
    // buttonBg: {
    //     backgroundColor: "#FFF",
    //     borderRadius: 40,
    //     paddingVertical: 13,
    //     paddingHorizontal: 30,

    // },
    // btnText:{
    //     color:"#E85D43",
    //     fontSize:16,
    //     fontWeight:"600",
    //     textAlign:"center"
    // }
    buttonWrapper: {
        backgroundColor: '#BFC9CF',
        marginHorizontal: 20,
        borderRadius: 40,
        marginTop: 17,
        padding: 4,
    },

    btnFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    buttonItem: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingVertical: 12,
        borderRadius: 40,
        alignItems: 'center',
    },

    buttonActive: {
        backgroundColor: '#FFF',
    },

    btnText: {
        color: '#5C5C5C',
        fontWeight: '600',
    },

    btnTextActive: {
        color: '#E85D43',
    },
    historContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    historyHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    historyTitly: {
        fontSize: 18,
        color: "#18191B",
        fontWeight: "600"

    },
    historyMonth: {
        backgroundColor: '#FFF',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    scanList: {
        backgroundColor: "#FFF",
        marginTop: 17,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        borderRadius: 16,


    },
    // logoBG:{
    //     backgroundColor:"#5C6670",
    //     borderRadius:30,
    //     width:80,
    //     height:80

    // },
    leftSide: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16
    },
    iconWrapper: {
        backgroundColor: '#E6E9EF',
        padding: 8,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    toggalDate: {
        color: "#5C6670",
        fontSize: 12,
        fontWeight: "400"

    },
    toggalTitle: {
        color: "#18191B",
        fontSize: 14,
        fontWeight: "600"
    },
    rightSide: {
        flexDirection: "row",
        gap: 7,
        alignItems: "center"
    },
    ratingNum: {
        color: "#18191B",
        fontSize: 16,
        fontWeight: "600"
    },
    iconStarWrapper: {
        backgroundColor: '#FFE9E5',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
    },

})

