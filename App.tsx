import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import CartScreen from './screens/CartScreen';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: {id: number, name: string};
  Cart: {id: number};
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto"/>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} options={{ title: 'Shopping Center' }}/>
        <RootStack.Screen name="Details" component={DetailsScreen}  options={({ route }) => ({ title: route.params.name })}/>
        <RootStack.Screen name="Cart" component={CartScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


