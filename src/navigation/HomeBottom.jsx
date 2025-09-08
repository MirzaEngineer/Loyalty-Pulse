import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CustomTabBar from '../componentes/CustomTabBar';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScanScreen from '../screens/ScanScreen';
import LayoutPoint from '../screens/LayoutPoint';

const Tab = createBottomTabNavigator();

const HomeBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      {/* <Tab.Screen name="Scann" component={ScanScreen} /> */}
      
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
      <Tab.Screen name="Layout" component={LayoutPoint} />
    </Tab.Navigator>
  );
};

export default HomeBottom;
