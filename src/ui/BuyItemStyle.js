import { StyleSheet } from "react-native";

export const BuyItemStyles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 7,
        // borderWidth: 1
    },
    headerTitle: {
        color: "#18191B",
        fontSize: 20,
        fontWeight: "600"
    },
    iconBG: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C5C7D0",
        gap: 8
    },
    ItemContainer: {
        // backgroundColor:"red",
        padding: 16,
        marginTop: 10,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16,
        alignSelf: "stretch"
    },
    cardItem: {
        width: 173,
        backgroundColor: "#FFF",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E6E9EF",
        padding: 8,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    imageWH: {
        width: 157,
        height: 96,
        borderRadius: 4,
    },
    cardDescription: {
        overflow: "hidden",
        marginVertical: 16,
        color: "#18191B",
        fontSize: 11,
        fontWeight: "400",
        alignSelf: "stretch"
    },
    productDetail: {
        backgroundColor: "#FFF",
        alignSelf: "stretch",
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#C5C7D0",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    detailText: {
        color: "#18191B",
        fontSize: 14,
        fontWeight: "600",
    }
});
