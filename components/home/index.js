import React, { useState } from "react";
import Title from "../title/Title.js";
import Message from "../message/Message.js";
import Input from "../input/Input.js";
import List from "../list/List.js";
import Modal from "../modal/Modal.js";
import { View } from "react-native";
import styles from "./homeStyle.js";

export default function Home() {
  const [textValue, setTextValue] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [itemSelected, setItemSelected] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [visibleMessage, setVisibleMessage] = useState(false);

  const onHandleChangeItem = (text) => {
    setTextValue(text);
  };

  const onHandleAddItem = () => {
    if (!textValue) {
      setVisibleMessage(true);

      setTimeout(() => {
        setVisibleMessage(false);
      }, 2000);
      return;
    }
    setItemsList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);

    setVisibleMessage(false);
    setTextValue("");
  };

  const onHandleDeleteAll = () => {
    setItemsList([]);
  };

  const onHandleDeleteItem = () => {
    let arr = itemsList;
    arr.splice(itemSelected, 1);
    setItemsList(arr);
    setModalVisible(false);
    setItemSelected();
  };

  const onHandleModal = (index) => {
    setModalVisible(true);
    setItemSelected(index);
  };

  return (
    <View style={styles.container}>
      <Title title={"Products List"} />
      {visibleMessage ? (
        <Message message={"Empty field!"} />
      ) : (
        <Message message={""} />
      )}
      <Input
        textValue={textValue}
        onHandleChangeItem={onHandleChangeItem}
        onHandleAddItem={onHandleAddItem}
        onHandleDeleteAll={onHandleDeleteAll}
      />
      <List
        itemsList={itemsList}
        onHandleModal={onHandleModal}
        itemSelected={itemSelected}
      />
      <Modal
        modalVisible={modalVisible}
        onHandleDeleteItem={onHandleDeleteItem}
        setModalVisible={setModalVisible}
        setItemSelected={setItemSelected}
        itemsList={itemsList}
        itemSelected={itemSelected}
      />
    </View>
  );
}

// {itemsList.map((item, index) => (
//   <Text key={index} style={styles.containerView2.text}>
//     {item.value}
//   </Text>
// ))}
