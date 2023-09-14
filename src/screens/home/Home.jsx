import { View, FlatList, SafeAreaView } from "react-native";
import styles from "./home.style.js";
import { CategoryItem } from "./components/index.js";
import { Header } from "../../components";
import dataCategories from "../../data/dataCategories.js";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container.listContainer}>
        <Header title="CATEGORIES" />
        <FlatList
          data={dataCategories}
          keyExtractor={(category) => category}
          renderItem={({ item }) => (
            <CategoryItem category={item} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
