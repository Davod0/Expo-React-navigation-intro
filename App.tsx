import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
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

          <RootStack.Screen name="Home" component={HomeScreen} 
          options={{
          title: 'Shopping Center',
          headerStyle:{ backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}/>
          <RootStack.Screen name="Details" component={DetailsScreen}  options={({ route }) => ({ title: route.params.name })}/>
          <RootStack.Screen name="Cart" component={CartScreen} 
          options={{
             headerRight: () => (
            <Button onPress={() => alert('Alert button')} title="info" color="black"/>
          )}}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


