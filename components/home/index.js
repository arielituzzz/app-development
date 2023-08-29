import { Button, Text, TextInput, View, FlatList, Modal } from "react-native";
import React, { useState } from "react";
import styles from "./homeStyle.js";

export default function Home() {
  const [textValue, setTextValue] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeItem = (text) => {
    setTextValue(text);
  };

  const onHandleAddItem = () => {
    // setItemsList([...itemsList, { value: textValue }]);
    setItemsList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);
    setTextValue("");
  };

  const onHandleClearAll = () => {
    setItemsList([]);
  };

  const renderListItem = ({ item }) => (
    <Text style={styles.containerView2.text}>{item.value}</Text>
  );

  const onHandleDeleteItem = () => {};

  const onHandleModal = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.containerView1}>
        <TextInput
          id="textInput"
          placeholder="Add Item"
          placeholderTextColor={"grey"}
          style={styles.containerView1.textInput}
          value={textValue}
          onChangeText={onHandleChangeItem}
        ></TextInput>
        <View style={styles.containerView1.buttons}>
          <Button
            title="ADD"
            color={"#6CDE40"}
            onPress={onHandleAddItem}
          ></Button>
          <Button
            title="CLEAR ALL"
            color={"#DB405C"}
            onPress={onHandleClearAll}
          ></Button>
        </View>
      </View>
      <View style={styles.containerView2}>
        <FlatList
          data={itemsList}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
        transparent
        style={styles.modal}
      >
        <View style={styles.modal.container}>
          <View>
            <Text style={styles.modal.container.title}>CONFIRM</Text>
          </View>
          <View>
            <Text style={styles.modal.container.message}>
              Are you sure you want to delete?
            </Text>
          </View>
          <View>
            <Button
              color={"#DB405C"}
              title="Delete"
              onPress={onHandleDeleteItem}
            ></Button>
          </View>
        </View>
      </Modal>
      <Button title="Open Modal" onPress={() => setModalVisible(true)}></Button>
    </View>
  );
}

// {itemsList.map((item, index) => (
//   <Text key={index} style={styles.containerView2.text}>
//     {item.value}
//   </Text>
// ))}
