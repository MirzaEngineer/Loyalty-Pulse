// import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, } from 'react-native';
// import Home from './src/screens/HomeScreen';
import SignInScreen from './src/screens/auth/SignInScreen';
import TwoFAScreen from './src/screens/auth/TwoFAScreen';
import { NavigationContainer } from '@react-navigation/native';
// import SignInStackNavigation from './src/navigation/LoginStack';
import HomeScreen from './src/screens/HomeScreen';
import HomeBottom from './src/navigation/HomeBottom';
import AppNavigator from './src/navigation/AppNavigator';
import SignInStackNavigation from './src/navigation/LoginStack';

import { Text, View } from "react-native";

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <View style={styles.container}>
    //   {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <NewAppScreen templateFileName="App.tsx" /> */}
    //   {/* <Home/> */}
    //   {/* <SignInScreen/> */}
    //   <TwoFAScreen/>
    // <NavigationContainer>
    //   <SignInStackNavigation/>
    // </NavigationContainer>

    // </View>
    // <NavigationContainer>
    //   <SignInStackNavigation/>
    // </NavigationContainer>
    // <HomeScreen/>
     <NavigationContainer>
       <AppNavigator/> 
       {/* <SignInStackNavigation/> */}

     </NavigationContainer>
    // <View>
    //   <Text>Mirza Usama</Text>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;













// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

  

//   return (
//     <View>
//       <Text>dgfgdshf</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
