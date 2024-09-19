import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoreInfoScreen from "../screens/tabScreens/MoreInfoScreen";
import SettingsScreen from "../screens/tabScreens/SettingsScreen";


export type TabStackParamList = {
  Settings: undefined;
  MoreInfo: undefined;
};

export const TabStack = createNativeStackNavigator<TabStackParamList>();

export default function TabNavigatorScreen() {
  return (
    <TabStack.Navigator initialRouteName="MoreInfo" >
      <TabStack.Screen name="MoreInfo" component={MoreInfoScreen} />
      <TabStack.Screen name="Settings" component={SettingsScreen} />
    </TabStack.Navigator>
  );
}
