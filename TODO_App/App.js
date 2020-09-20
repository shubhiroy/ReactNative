import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const DeleteItemHandler = (deletedItemId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.key != deletedItemId);
    });
  };

  const AddTodoHandler = (newTodo) => {
    if (newTodo !== "") {
      setTodos((prevTodos) => {
        return [...prevTodos, { text: newTodo, key: Math.random().toString() }];
      });
    }else {
      Alert.alert("OOPS!" , "Can't add a blank todo.", [
        {text: 'Understood'}
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo addTodoHandler={AddTodoHandler} />
        <View style={styles.list}>
          {todos.length ? (
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressItemHandler={DeleteItemHandler} />
              )}
            />
          ) : (
            <Text style={styles.emptyList}>No Items</Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  emptyList: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
