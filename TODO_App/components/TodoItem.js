import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, pressItemHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressItemHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color='#ff005d' />
        <Text style={styles.itemText} >{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: 'row'
  },

  itemText: {
      marginLeft: 10
  }

});

export default TodoItem;
