import React, { useState } from "react";
// import Title from "../../components/title/Title.js";
// import Message from "../../components/message/Message.js";
// import Input from "../../components/input/Input.js";
// import List from "../../components/list/List.js";
// import Modal from "../../components/modal/Modal.js";
import { View, FlatList } from "react-native";
import styles from "./home.style.js";
import { Header } from "../../components/index.js";
import { CategoryItem } from "./components/index.js";
import dataCategories from "../../data/dataCategories.js";

export default function Home({ setCategorySelected }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={dataCategories}
        keyExtractor={(category) => category}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            setCategorySelected={setCategorySelected}
          />
        )}
      />
      <Header title={"Categories"} />
    </View>
  );
}

// {itemsList.map((item, index) => (
//   <Text key={index} style={styles.containerView2.text}>
//     {item.value}
//   </Text>
// ))}
