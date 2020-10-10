import React, { useState } from "react";
import { Modal, Button, Provider, Portal } from "react-native-paper";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
// import * as firebase from "firebase";
// import Animbutton from "../../components/animbutton";
// import Commonstyle from "../../components/commonstyle";
const jsonData = {
  slots: {
    slot1: "9:00am",
    slot2: "9:30am",
    slot3: "10:00am",
    slot4: "10:30am",
    slot5: "11:00am",
    slot6: "11:30am",
  },
};
export default function Slot({ route, navigation }) {
  const { bookingDate1 } = route.params;
  const [bookingDate, setBookingDate] = useState(bookingDate1);
  const [visible, setVisible] = React.useState(false);
  const toggleModalVisibility = () => {
    setVisible((oldVisibility) => {
      return !oldVisibility;
    });
  };
  const logData = (slot) => {
    console.log(bookingDate1, slot);
  };

  const slots = jsonData.slots;
  const slotsarr = Object.keys(slots).map(function (k) {
    return (
      <TouchableOpacity onPress={() => logData(slots[k])} key={k}>
        <View style={{ margin: 5 }}>
          <Text>{slots[k]}</Text>
        </View>
      </TouchableOpacity>
    );
  });
  return (
    <View>
      {/* <StatusBar barStyle="light-content" />
      <View>
        <TouchableOpacity onPress={() => this._onPressBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <Provider>
        <Portal>
          <Modal visible={visible}>{slotsarr}</Modal>
          <Button style={{ marginTop: 30 }} onPress={toggleModalVisibility}>
            Show
          </Button>
        </Portal>
      </Provider> */}
      {slotsarr}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
