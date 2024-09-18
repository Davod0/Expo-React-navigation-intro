import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { products } from "../data";
import { styles } from "./HomeScreen";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen(props: Props) {

    const product = products.find(p => p.id === props.route.params.id);

  return (
    <View style={styles.container}>
        <Text>Product details</Text>
        <Text>Product name: {product?.name}</Text>
        <Text>Product description: {product?.description}</Text>
        <Text>Product price: {product?.price}</Text>
    </View>
  );
}