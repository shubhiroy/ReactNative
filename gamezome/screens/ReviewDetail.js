import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/Card";

const ReviewDetail = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };

  const rating = navigation.getParam('item').rating;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.text}>
          TITLE : {navigation.getParam("item").title}
        </Text>
        <Text style={globalStyles.text}>
          BODY : {navigation.getParam("item").body}
        </Text>
        <View style={styles.rating}>
          <Text>GameZone Rating : </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>

      <Button title="GO BACK" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default ReviewDetail;
