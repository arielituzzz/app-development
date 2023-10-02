import { View, FlatList, SafeAreaView } from "react-native";
import styles from "./home.style.js";
import { CategoryItem } from "./components/index.js";
import { Header } from "../../components";
import { useGetCategoriesQuery } from "../../services/shopApi.js";

export default function Home({ navigation }) {
  const { data, isLoading } = useGetCategoriesQuery();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container.listContainer}>
        <Header title="CATEGORIES" />
        {!isLoading && (
          <FlatList
            data={data}
            keyExtractor={(category) => category}
            renderItem={({ item }) => (
              <CategoryItem category={item} navigation={navigation} />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
