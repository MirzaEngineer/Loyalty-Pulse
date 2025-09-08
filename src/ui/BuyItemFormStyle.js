import { StyleSheet } from "react-native";

export const FormStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        // paddingVertical: 24,
        // paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    imagesRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    sideImages: {
        justifyContent: "space-between",
        alignItems: "center",
        height: 160,
        marginHorizontal: -38
    },
    smallImage: {
        width: 50,
        height: 50,
        resizeMode: "contain"
    },
    mainImage: {
        width: 210,
        height: 180,
        resizeMode: "contain"
    },
    formTitle: {
        color: "#18191B",
        //   fontFamily: "Plus Jakarta Sans", 
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 22,
        paddingVertical: 10
    },
    input: {
        paddingVertical: 20,

        borderWidth: 1,
        borderColor: '#E4EBF0',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#FFF',
        marginTop: 6,
    },
    orderTitel: {
        color: "#000",
        // marginTop: 10,
        marginVertical: 10,
        fontSize: 14,
        fontWeight: "400"
    },
    unitBar: {
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        alignSelf: 'stretch',
        borderRadius: 100,
        backgroundColor: '#E6E9EF',
        justifyContent: 'space-between',
    },
    unitButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E6E9EF',
    },
    unitButtonSelected: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E6E9EF',
    },
    unitButtonText: {
        color: '#18191B',
        fontWeight: '500',
    },
    unitButtonTextSelected: {
        color: '#FF6600',
    },
    paymentTitel: {
        color: '#000',
        // fontFamily: 'Plus Jakarta Sans', 
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 14,
        marginVertical: 6
    },
    paymentSelect: {
        backgroundColor: "#FFF",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E4EBF0",
        padding: 16,
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        marginTop: 10

    },
    paymentSelectTitle: {
        color: '#000',
        // fontFamily: 'Plus Jakarta Sans',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 14
    },
    endText: {
        color: '#A7B2BA', // Neutrals-Gray-300 ka hex
        // fontFamily: 'Plus Jakarta Sans',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 16,
        textAlign: "center",
        marginVertical: 20
    },
    placeBtn: {
        backgroundColor: '#E85D43',
        paddingVertical: 16,
        paddingHorizontal: 24,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 100
    }


})
