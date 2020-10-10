import React, { useState } from "react";
import { Keyboard, Modal, StyleSheet, Text, View,TouchableWithoutFeedback, FlatList, TouchableOpacity } from "react-native";
// import { , } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [...currentReviews, review];
    })
    setModalOpen(false);
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{...styles.modalToggle, ...styles.modalClose}}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm addReview={addReview} />
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        style={styles.modalToggle}
        size={24}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", { item })}
          >
            <Card>
              <Text style={globalStyles.text}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  text: {
    fontFamily: "nunito-bold",
    fontSize: 18,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
    borderRadius: 50,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});

export default Home;
