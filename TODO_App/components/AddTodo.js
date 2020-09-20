import React, { useState } from "react";
import { TextInput, View, Text, Button, StyleSheet } from "react-native";

const AddTodo = ({addTodoHandler}) => {
    const [todo, setTodo] = useState('');

    const textChangeHandler = (val) => {
        setTodo(val);
    };

    return ( 
        <View>
            <TextInput
            placeholder='New Todo ...'
            onChangeText={textChangeHandler}
            style={styles.input}                
            />
            <Button 
                    title="ADD"
                    color='coral'
                    onPress={() => addTodoHandler(todo)}
                />
        </View>
     );
};
 
const styles = StyleSheet.create({
input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
}
});

export default AddTodo;