import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 14,
    marginVertical:8,
  },
  otpInput: {
  borderWidth: 1,
  borderColor: '#aaa',
  width: 40,
  height: 44,
  textAlign: 'center',
  fontSize: 20,
  borderRadius: 6,
  marginHorizontal: 5,
},
  button: {
    backgroundColor: '#ff5733',
    paddingVertical: 16,

    borderRadius: 50,
    alignItems: 'center',
    marginTop:4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})