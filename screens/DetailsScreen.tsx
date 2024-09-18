import { Text, View } from "react-native";
import { styles } from "./HomeScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen(props: Props) {
  return (
    <View style={styles.container}>
        <Text>Details Screen</Text>
      <Text>{props.route.name}</Text>
      <Text>ID: {props.route.params.id}</Text>
    </View>
  );
}