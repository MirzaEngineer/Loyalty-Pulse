import { StyleSheet } from "react-native";

export const RedeemStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  iconBG: {
    borderWidth: 1,
    borderColor: 'rgba(197, 199, 208, 1)',
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  headTitle: {
    color: '#18191B',
    fontSize: 20,
    fontWeight: '600',
  },
  cashContainer: {
    padding: 16,
    flexDirection: 'column',
    gap: 16,
    alignSelf: 'stretch',
  },
  cashTitle: {
    color: '#18191B',
    fontSize: 20,
    fontWeight: '600',
  },
  cashDescription: {
    color: '#5C6670',
    fontSize: 14,
    fontWeight: '400',
  },
  boxContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  left: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    backgroundColor: '#FFF',

    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E6E9EF',
  },
  center: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: 'flex-start',
    gap: 16,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E6E9EF',
  },
  right: {
    display: 'flex',
    padding: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E6E9EF',

  },
  cardText: {
    color: '#5C6670',
    fontSize: 12,
    fontWeight: '400',
  },
  cardNumber: {
    color: '#E85D43',
    fontSize: 20,
    fontWeight: '600',
  },
  inputContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  leftInput: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  rightInput: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  input: {
    backgroundColor: "#FFF",
    flexDirection: 'row',
    padding: 16,
    alignItems: 'flex-start',
    gap: 10,
    alignSelf: 'stretch',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E9EF"

  },
  cashWalletWrapper: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
    alignSelf: 'stretch',
  },
  walletDetailsCard: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E6E9EF',
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    gap: 12,
    alignSelf: 'stretch',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5C6670',
  },

  textStyle: {
    color: '#18191B',
    // fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
  },
  selectPayment: {
    padding: 16,
    flexDirection: 'row', // ✅ horizontal layout
    alignItems: 'center',
    justifyContent: 'space-between', // ✅ text left, radio right
    gap: 16,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E6E9EF',
  },
  jazzText: {
    color: '#18191B',
    // fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
  },

  // ✅ Radio button styles
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#C5C7D0', // gray by default
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: '#F2551C', // orange border when selected
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F2551C',
  },
  button: {
    flexDirection: 'row',
    paddingVertical: 16, // from var(--Large, 16px)
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8, // supported in newer versions of React Native
    alignSelf: 'stretch',
    backgroundColor: "#E85D43",
    borderRadius: 100,
    marginHorizontal: 18,
    marginTop: 60


  },
  buttonTitel: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16
  }

});
