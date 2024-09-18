import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { RootStackParamList } from "../App";
import { products } from "../data";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;



export default function DetailsScreen(props: Props) {
  const product = products.find(p => p.id === props.route.params.id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
          
       <View style={styles.productInfoContainer}>
            <Text style={styles.productName}>{product?.name}</Text>
            <Text style={styles.productDescription}>{product?.description}</Text>
            
            {/* Pris och knappar */}
            <View style={styles.priceAndButtons}>
                <Text style={styles.productPrice}>Price: ${product?.price.toFixed(2)}</Text>
            
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.button, styles.addToCartButton]}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
                    <Text style={styles.buttonText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    textAlign: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  productInfoContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  priceAndButtons: {
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
  },
  buyNowButton: {
    backgroundColor: '#FF9800',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  productDescriptionContainer: {
    marginTop: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
