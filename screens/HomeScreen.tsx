import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { products } from "../data";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Shoping Center</Text>
      {products.map((product) =>(
        <View key={product.id}>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
            <Button title="Go to product details" onPress={() => navigation.navigate("Details", {id: product.id})} />
        </View>
      ))}
    </View>
  );
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
