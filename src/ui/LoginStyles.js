import { StyleSheet } from "react-native";

export const LoginStyles = StyleSheet.create({
  
  mainContainer: {
  flex: 1,                        
  flexDirection: "row",
  alignItems: "center",           
  justifyContent: "center",       
},
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 24,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 6,
    // marginBottom: 10,
    marginVertical:10
  },
  rememberText: {
    color: '#555',
  },
  
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
   circleChecked: {
    backgroundColor: '#f25c3a',
    borderColor: '#f25c3a',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  forgot: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  
  
});
