import { Text, View, Modal as NewModal, Button } from "react-native";
import React from "react";
import modalStyles from "./modalStyle";

const Modal = ({
  modalVisible,
  onHandleDeleteItem,
  setModalVisible,
  setItemSelected,
  itemsList,
  itemSelected,
}) => {
  const onHandleCloseModal = () => {
    setModalVisible(false);
    setItemSelected();
  };

  return (
    <NewModal
      visible={modalVisible}
      animationType="fade"
      onRequestClose={onHandleCloseModal}
      transparent
    >
      <View style={modalStyles.modal}>
        <View style={modalStyles.modal.container}>
          <View>
            <Text
              style={modalStyles.modal.container.title}
            >{`CONFIRM (${itemsList[itemSelected]?.value})`}</Text>
          </View>
          <View>
            <Text style={modalStyles.modal.container.message}>
              Are you sure you want to delete?
            </Text>
          </View>

          <View style={modalStyles.modal.container.buttons}>
            <Button
              color={"#DB405C"}
              title="Delete"
              onPress={onHandleDeleteItem}
            ></Button>
            <Button
              color={"grey"}
              title="CLOSE"
              onPress={onHandleCloseModal}
            ></Button>
          </View>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;
