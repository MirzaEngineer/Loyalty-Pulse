import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/auth/SignInScreen';
import TwoFAScreen from '../screens/auth/TwoFAScreen';

const Stack = createNativeStackNavigator();

function SignInStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="TwoStep" component={TwoFAScreen} />
    </Stack.Navigator>
  );
}
export default SignInStackNavigation