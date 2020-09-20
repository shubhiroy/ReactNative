import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const TodoItem = ({item, pressItemHandler}) => {
    return ( 
       <TouchableOpacity style={styles.item} onPress={() => pressItemHandler(item.key)}>
           <Text>{item.text}</Text>
       </TouchableOpacity> 
     );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
});

 
export default TodoItem;