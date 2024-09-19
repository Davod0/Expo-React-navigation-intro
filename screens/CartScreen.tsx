import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { products } from "../data";

type Props = NativeStackScreenProps<RootStackParamList, "Cart">;

export default function CartScreen({navigation, route}: Props) {
  const product = products.find((p) => p.id === route.params.id);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <View style={styles.productContainer}>
        <Text style={styles.productName}>{product?.name}</Text>
        <Text style={styles.productDescription}>{product?.description}</Text>
        <Text style={styles.productPrice}>Price: ${product?.price.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  productContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
