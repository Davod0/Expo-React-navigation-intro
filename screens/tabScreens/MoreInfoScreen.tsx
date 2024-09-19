
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TabStackParamList } from '../../Navigator/TabNavigator';


type Props = NativeStackScreenProps<TabStackParamList, "MoreInfo">;

export default function MoreInfoScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elektroniska Varor</Text>
      
      <Text style={styles.description}>
        Elektroniska varor inkluderar allt från smartphones, datorer och TV-apparater till 
        hushållsapparater som tvättmaskiner och mikrovågsugnar. 
        Dessa produkter är oumbärliga i dagens moderna liv och hjälper oss att spara
        tid och förbättra vår livskvalitet.
        Innovationer inom elektronik driver teknologiska framsteg, 
        och nya produkter släpps ständigt på marknaden för att möta konsumenternas behov.
      </Text>
      
      <Button 
        title="Go to settings"
        onPress={() => navigation.navigate('Settings')}  
        color="#f4511e"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',  // Ljus bakgrundsfärg
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    lineHeight: 22,
    textAlign: 'justify',
  },
});
