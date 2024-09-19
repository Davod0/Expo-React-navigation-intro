import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../App";
import { products } from "../data";


type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation, route }: Props) {
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to Shopping Center</Text>

        <FlatList data={products} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Details", { id: item.id, name: item.name })}>

                <View style={styles.productCard}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
                <Text style={styles.productPrice}>Price: ${item.price.toFixed(2)}</Text>

                <Pressable style={styles.detailButton}>
                <Button  title="Go to product details" onPress={() => navigation.navigate("Details", {id: item.id, name: item.name})}/>
                </Pressable>
                </View>
            </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
        />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detailButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  buttonTitle: {
    fontSize: 16,
    color: '#fff',
  },
});

