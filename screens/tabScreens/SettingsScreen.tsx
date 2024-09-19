import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TabStackParamList } from '../../Navigator/TabNavigator';

type Props = NativeStackScreenProps<TabStackParamList, "Settings">;

export default function SettingsScreen(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Button 
        title="Go back to home page"
        onPress={() => props.navigation.popToTop()}
        color="#f4511e"  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',      
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,  
  },
});
