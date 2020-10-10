import * as React from "react";
import { Text, View, StyleSheet, BackHandler } from "react-native";
import Constants from "expo-constants";
import { Calendar, CalendarList } from "react-native-calendars";
import { Modal, Button, Provider, Portal } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Cal({ navigation }) {

  const [selectedDay, setSelectedDay] = React.useState('Please select date-time slot');
  const [visible, setVisible] = React.useState(false);
  const [slotsVisible, setSlotsVisible] = React.useState(false);
  const [selectedSlotIndex, setSelectedSlotIndex] = React.useState(-1); 
  const [selectedSlot, setselectedSlot] = React.useState('');
 
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

  const toggleModalVisibility = () => {
    setVisible((oldVisibility) => {
      return !oldVisibility;
    });
  };

  const logData = (currentSlotIndex) => {
    console.log(selectedDay, slots[currentSlotIndex]);
    setselectedSlot(slots[currentSlotIndex]);
    setSelectedSlotIndex(currentSlotIndex);
    setSlotsVisible(false);
    setVisible(false);
  };

  const slotButton = (currentSlotIndex) => {
      if(selectedSlotIndex == currentSlotIndex){
        return (<Button mode="contained" onPress={() => logData(currentSlotIndex)} mode='text' style={{...styles.timeSlot, backgroundColor: '#abe35d'}}>{slots[currentSlotIndex]}</Button>);
      }else {
          return (<Button mode="contained" onPress={() => logData(currentSlotIndex)} mode='text' style={styles.timeSlot}>{slots[currentSlotIndex]}</Button>);
      }
  }
 
  const slots = jsonData.slots;
  const slotsarr = Object.keys(slots).map(function (k) {
    return (
      <TouchableOpacity  key={k}>
        <View style={{margin: 5, flexWrap: 'wrap'}}>
          {slotButton(k)}
        </View>
      </TouchableOpacity>
    );
  });

  const onDayPress = (day) => {
      console.log(day);
    setSelectedDay(day.dateString);
    setSlotsVisible(true);
  };

  const minDate = (() => {
    return new Date().toISOString().split('T')[0];
  })();

  const maxDate = (() => {
      let current = new Date();
    return new Date(current.setMonth(current.getMonth() + 3)).toISOString().split('T')[0];
  })();

  const returnVal = !slotsVisible ? (
    <View>
      <Calendar
        onDayPress={(day) => onDayPress(day)}
        style={styles.calendar}
        hideExtraDays
        minDate={minDate}
        maxDate={maxDate}
        markedDates={{ [selectedDay]: { selected: true } }}
        theme={{
          selectedDayBackgroundColor: "green",
          todayTextColor: "green",
          arrowColor: "green",
        }}
      />
    </View>
  ) : (
    <View style={styles.container}>{slotsarr}</View>
  );

  return (
    <Provider>
      <Portal>
        <Modal visible={visible}>{returnVal}</Modal>
        <Button style={{ marginTop: 30 }} onPress={toggleModalVisibility}>
          <Text>{selectedDay} {(selectedSlot != -1) ? selectedSlot : ''}</Text>
        </Button>
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },

  timeSlot: {
      margin: 5,
      backgroundColor: '#d9d9d0',
      width: '100%',
      borderRadius: 50,
  }
});
