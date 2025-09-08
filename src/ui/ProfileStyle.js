import { StyleSheet } from "react-native";

export const ProfileStyles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24, 25, 27, 0.9)",

  },
  profileWrapper: {
    marginTop: 20,
    paddingTop: 24,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    flexDirection: 'column',
    // alignItems: 'center',
    gap: 16,
    alignSelf: 'stretch',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#FFFFFF',


  },
  headder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"

  },
  headderTitle: {
    color: '#18191B',
    // fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22
  },
  rowWrapper: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: "space-between",
    gap: 8,
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: "#E6E9EF"
  },
  left: {
    flexDirection: "row"
  },
  nameTitel: {
    flexDirection: "row",
    gap: 8
  },
  name: {
    color: '#18191B',
    // fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22,
  },
  email: {
    color: '#5C6670',
    // fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
  },
  oringWrapp: {
    flexDirection: 'row',
    paddingVertical: 2,
    paddingHorizontal: 8,   // Thoda zyada padding daalo for better spacing
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E85D43',
    alignSelf: 'flex-start',
  },
  oringText: {
    color: '#E85D43',                  // Primary color
    textAlign: 'center',
    // fontFamily: 'Plus Jakarta Sans',  // Make sure the font is loaded
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
  },
  heading2: {
    color: '#18191B',
    // fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22,
  },
  // cardContainer: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-between',
  //   gap: 12,
  // },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 0,

  },

  logoutBtn: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#C5C7D0",
    marginTop: 12,
    marginBottom: 8,
  },
  logoutText: {
    color: '#18191B',
    // fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22,
  },
  footer: {
    marginTop: -20,

  },
  footerGrayText: {
    color: '#5C6670',
    textAlign: 'center',
    // fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  footerOringeText: {
    color: '#E85D43',
    textAlign: 'center',
    // fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14, // optional: adjust if needed
  }



})