import React from "react";
import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import listStyles from "./listStyles";

const List = ({ itemsList, onHandleModal, itemSelected }) => {
  const renderListItem = ({ item, index }) =>
    index === itemSelected ? (
      <View style={listStyles.list.container}>
        <Text style={listStyles.list.container.textSelected}>{item.value}</Text>
        <TouchableOpacity onPress={() => onHandleModal(index)}>
          <Text style={listStyles.list.container.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={listStyles.list.container}>
        <Text style={listStyles.list.container.text}>{item.value}</Text>
        <TouchableOpacity onPress={() => onHandleModal(index)}>
          <Text style={listStyles.list.container.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <View style={listStyles.list}>
      <FlatList
        data={itemsList}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default List;
