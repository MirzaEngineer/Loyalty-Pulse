// import { StyleSheet } from "react-native";

import { StyleSheet } from "react-native";

// export const OrderStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     backgroundColor: '#C43400',
//     height: 240,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     paddingVertical: 24,
//     paddingHorizontal: 16,
//     justifyContent: 'flex-start',
//   },
//   heading: {
//     textAlign: "center",
//     padding: 40,
//     color: "#FFF",
//     fontSize: 20,
//     fontWeight: "600",
//     // marginTop:
//   },
//   whiteCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 16,
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     // iOS shadow
//     shadowColor: '#0D0A2C',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.08,
//     shadowRadius: 6,

//     // Android shadow
//     elevation: 4,

//   },
//   cardRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     gap: 12,
//     marginBottom: 10
//   },
//   cardType: {
//     color: "#5C6670",
//     fontFamily: 'Plus Jakarta Sans',
//     fontSize: 12,
//     fontStyle: 'normal',
//     fontWeight: '400',
//     lineHeight: 20,
//   },
//   cardTitle: {
//     color: "#1E1B39",
//     fontFamily: 'Plus Jakarta Sans',
//     fontSize: 18,
//     fontStyle: 'normal',
//     fontWeight: '600',
//     lineHeight: 20,
//   }

// });



export const OrderStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  historyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 24,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  historyHeading: {
    color: '#18191B',
    // fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 18,
  },
  monthHistory: {
    backgroundColor: "#FFF",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C5C7D0",
    flexDirection: "row",
    gap: 8
  },
  monthText: {
    color: '#18191B',
    // fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
  },
  orderList: {
  backgroundColor: "#FFF",
  padding: 16,
  borderWidth: 1,
  borderRadius: 16,
  marginHorizontal: 16,
  marginVertical: 6, // 🟢 ye line add karo gap ke liye
  borderColor: "#E6E9EF",
  flexDirection: "row",
  justifyContent: "space-between"
},
  iconBG: {
    backgroundColor: "#E6E9EF",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    flexDirection: "row",
    gap: 16
  },
  detailWrappe: {
    flexDirection: "column",
    gap: 10

  },
  wrappe: {
    gap: 7
  },
  orderNum: {
    color: "#18191B",
    // fontFamily: "Plus Jakarta Sans",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 14
  },
  orderDate: {
    color: "#5C6670",
    // fontFamily: "Plus Jakarta Sans",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 14
  },
  orderTitle: {
    color: "#40464B",
    textAlign: "center",
    // fontFamily: "Plus Jakarta Sans",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 14,
  },
  tagText: {
    color: "#EAAA15",
    textAlign: "center",
    // fontFamily: "Plus Jakarta Sans",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 11,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#FFCB00",
    borderRadius:4
  }


















  // orderList: {
  //   paddingHorizontal: 16,
  //   paddingBottom: 20,
  // },
  // orderCard: {
  //   backgroundColor: "#FFF",
  //   padding: 16,
  //   borderRadius: 12,
  //   marginBottom: 12,
  //   borderWidth: 1,
  //   borderColor: "#E0E0E0",
  // },
  // orderId: {
  //   fontWeight: "bold",
  //   fontSize: 16,
  // },
  // orderDetails: {
  //   color: "#777",
  //   fontSize: 12,
  //   marginBottom: 5,
  // },
  // orderItem: {
  //   fontSize: 14,
  //   marginBottom: 5,
  // },
  // orderStatus: {
  //   fontWeight: "600",
  //   color: "orange",
  // },
});
