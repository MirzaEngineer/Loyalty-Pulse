import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },

  subText: {
    fontSize: 14,
    color: "#555",
    width: 270,
    lineHeight: 18,
  },

  iconContaner: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 30
  },
  iconBox: {
    backgroundColor: "#ffffff80",
    borderRadius: 50,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    fontSize: 16,
  },
  pointCard: {
    padding: 16,
    alignItems: "center",
    flexDirection: "column",
    marginVertical: 20
  },
  pointsLable: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: "center",
    color: "#5C6670",
    fontFamily: "Plus Jakarta Sans"
  },
  pointRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 4
  },
  imageWrapper: {
    width: 40,
    height: 40,
    backgroundColor: "#FFE9E5",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },

  pointText: {
    fontSize:48,
    // fontSize: 20,
    fontWeight: '700',
    // lineHeight: 20,
    fontFamily: 'PlusJakartaSans-Regular',
    color: "#18191B"
  },
  tierCard: {
    backgroundColor: "#FFFFFFB2",
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,


  },

  levelTitle: {
    color: "#18191B",
    backgroundColor: "#BFC9CF",
    alignSelf: "flex-start",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    alignItems: "center"
  },
  levelText: {
    color: "#18191B",
    fontSize: 24,
    fontWeight: '900',
    marginHorizontal: 4,
    // fontFamily: 'PlusJakartaSans-Regular',  
  },
  levelImage: {
    width: 90,
    height: 90

  },
  levelHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 4

  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 4

  },
  scaneText: {
    color: "#5C6670",
    fontSize: 14,
    fontWeight: '400'
  },
  scaneNumber: {
    color: "#18191B",
    fontWeight: '500'
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
  scaneTitle: {
    color: "#5C6670",
    textAlign: "center",
    marginVertical: 12
  },
  orderCard: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#18191B',
  },

  iconButton: {
    backgroundColor: '#FFA559', // ya koi brand color
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  orderText: {
    marginTop: 10,
    fontSize: 13,
    color: '#5C6670',
  },
  orderCard: {
    backgroundColor: "#F1F6F9",
    borderRadius: 8,
    padding: 16,


  },

  orderVardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  orderTital: {
    fontSize: 17,
    color: "#5C6670",
    // fontFamily: 'PlusJakartaSans-Regular',
    fontWeight: '500',
  },
  totalOrder: {
    color: "#18191B",
    fontSize: 20,
    fontWeight: "600",
    gap: 10
  },
  scaneContainer: {
    backgroundColor: "#FFFFFF",
    marginTop: 24,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    // Android shadow
    elevation: 1,
  },
  scaneHeader: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20

  },
  scaneTitel: {
    color: "#18191B",
    fontSize: 16,
    fontWeight: "600",
    // fontFamily:"Plus Jakarta Sans",
  },
  historyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    // justifyContent:"center",
  },

  historyText: {
    fontSize: 14,
    color: '#18191B',
    fontWeight: '500',
    // fontFamily: 'Plus Jakarta Sans',
  },

  arrow: {
    fontSize: 22,
    color: '#18191B',
    fontWeight: '500',
    marginLeft: 2,
  },
  scanList: {
    padding: 16,
    flexDirection: "column",
    gap: 12

  },
  scaneBoxContainer: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E6E9EF",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"

  },
  scaneBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  scaneImage: {
    width: 35,
    height: 35,


  },
  imageBg: {
    borderRadius: 40,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center"
  },
  info: {
    flexDirection: "column",
    gap: 7
  },
  boxDate: {
    color: "#5C6670",
    fontWeight: "400",
    fontSize: 12,
    fontFamily: "Plus Jakarta Sans",

  },
  boxText: {
    color: "#18191B",
    fontSize: 14,
    fontWeight: '700',
    fontFamily: "Plus Jakarta Sans",

  },
  ratingData: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingStar: {
    width: 40,
    height: 40
  },
  ratingNumber: {
    fontSize: 16,
    fontWeight: '600'
  }
});
