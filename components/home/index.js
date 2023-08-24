import { Button, Text, TextInput, View } from "react-native";
import styles from "./homeStyle.js";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerView1}>
        <TextInput
          placeholder="Ingrese Item"
          placeholderTextColor={"grey"}
          style={styles.containerView1.textInput}
        ></TextInput>
        <Button title="ADD" color={"#DB405C"}></Button>
      </View>
      <View style={styles.containerView2}>
        <Text style={styles.containerView2.text}>Item 1</Text>
        <Text style={styles.containerView2.text}>Item 2</Text>
        <Text style={styles.containerView2.text}>Item 3</Text>
      </View>
    </View>
  );
}
